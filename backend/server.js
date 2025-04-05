// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// ------------------------------
// MongoDB Connection & Models
// ------------------------------
mongoose.connect('mongodb://localhost/iseekyou', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Message schema for offline messages
const MessageSchema = new mongoose.Schema({
  from: String,
  to: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
  delivered: { type: Boolean, default: false },
});
const Message = mongoose.model('Message', MessageSchema);

// (Additional schemas for user profiles, friends, etc. could go here)

// ------------------------------
// Express Setup
// ------------------------------
app.use(express.static('../frontend/public')); // Serving frontend static files

// ------------------------------
// In-memory user registry
// ------------------------------
// Maps userId to socket id for active connections
const connectedUsers = {};

// ------------------------------
// Socket.IO Event Handlers
// ------------------------------
io.on('connection', (socket) => {
  console.log('User connected: ' + socket.id);

  // Authentication event: client should emit with their userId
  socket.on('authenticate', (userId) => {
    connectedUsers[userId] = socket.id;
    console.log(`User ${userId} authenticated with socket ${socket.id}`);

    // Retrieve and send any offline messages
    Message.find({ to: userId, delivered: false }, (err, messages) => {
      if (err) return console.error(err);
      messages.forEach((msg) => {
        socket.emit('chat message', {
          from: msg.from,
          message: msg.message,
          timestamp: msg.timestamp,
        });
        // Mark as delivered
        msg.delivered = true;
        msg.save();
      });
    });
  });

  // Chat messaging: support for both real-time and offline messaging
  socket.on('msg:snd', ({ from, to, message }) => {
    const timestamp = Date.now();
    if (connectedUsers[to]) {
      // Recipient is online: emit the message directly
      io.to(connectedUsers[to]).emit('chat message', { from, message, timestamp });
    } else {
      // Recipient offline: store message in MongoDB
      const offlineMsg = new Message({ from, to, message });
      offlineMsg.save((err) => {
        if (err) console.error('Error saving offline message:', err);
      });
    }
    // Optionally acknowledge the sender
    socket.emit('chat message sent', { to, message, timestamp });
  });
  // Chat messaging: support for typing indicators...
  socket.on('msg:typ', ({ from, to }) => {
    //TODO
    socket.emit('rtc request sent', { to, from, timestamp });
  });

  // Chat messaging: support for establishing 'multiplayer notepad'
  socket.on('msg:rtc', ({ from, to }) => {
    const timestamp = Date.now();
    io.to(to).emit('msg:rtc:request', { from, timestamp });
    socket.emit('msg:rtc:sent', { to, timestamp });
  });
  socket.on('msg:rtc:accept', ({ from, to }) => {
    io.to(from).emit('msg:rtc:accepted', { to });
    io.to(to).emit('msg:rtc:accepted', { from });
    //Utilize webRTC
    // History Capture Strategies:
    // Interval Snapshots: Every N seconds (e.g., 60s).
    // Typing Milestone: Every 500 characters.
    // Backspace Trigger: First backspace after a burst of input triggers a snapshot.
    // Manual Save: User can hit a Save/Pin button to persist current state.
  });
  socket.on('msg:rtc:rej', ({ from, to }) => {
    socket.emit('rtc request rejected', { to, from, timestamp });
  });

  // Friend management events (placeholders for actual DB logic)
  socket.on('usr:req', ({ userId, friendId }) => {
    // TODO: update friend lists in the database
    socket.emit('usr:request sent', { friendId });
  });
  socket.on('usr:add', async ({ userId, friendId }) => {
    if (userId === friendId) {
      return socket.emit('usr:add error', { message: "You can't add yourself." });
    }
    try {
      const [user, friend] = await Promise.all([
        User.findById(userId),
        User.findById(friendId)
      ]);
      if (!user || !friend) {
        return socket.emit('usr:add error', { message: 'User not found.' });
      }
      const alreadyFriends = user.friends.includes(friendId);
      if (alreadyFriends) {
        return socket.emit('usr:add error', { message: 'Already friends.' });
      }
      user.friends.push(friendId);
      await user.save();
      // Optional: add reciprocal friendship
      friend.friends.push(userId);
      await friend.save();
      socket.emit('usr:add success', { friendId });
      io.to(friendId).emit('usr:request received', { from: userId });

    } catch (err) {
      console.error(err);
      socket.emit('usr:add error', { message: 'Server error.' });
    }
  });
  socket.on('usr:del', ({ userId, friendId }) => {
    socket.emit('usr:delete success', { friendId });
  });
  socket.on('usr:blk', ({ userId, friendId }) => {
    socket.emit('usr:block success', { friendId });
  });

  socket.on('usr:sts', ({ userId }) => {
    socket.emit('usr:status update success', { userId });
  });
  // Profile update event (placeholder)
  socket.on('usr:upd', (profileData) => {
    // TODO: persist profile changes in the database
    socket.emit('usr:profile update success', profileData);
  });

  // File sharing event
  socket.on('dat:snd', ({ from, to, fileData, fileName }) => {
    const timestamp = Date.now();
    if (connectedUsers[to]) {
      io.to(connectedUsers[to]).emit('file share', { from, fileData, fileName, timestamp });
    } else {
      // Optionally, handle offline file shares differently or notify sender
      socket.emit('file share failed', { to, reason: 'User offline' });
    }
  });

  // Handle disconnects
  socket.on('disconnect', () => {
    // Remove user from connectedUsers (iterative lookup)
    for (const userId in connectedUsers) {
      if (connectedUsers[userId] === socket.id) {
        delete connectedUsers[userId];
        console.log(`User ${userId} disconnected`);
        break;
      }
    }
  });
});

// ------------------------------
// Start the Server
// ------------------------------
server.listen(3000, () => {
  console.log('Server listening on *:3000');
});
