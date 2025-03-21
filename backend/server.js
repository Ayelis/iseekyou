const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from the front-end
app.use(express.static('../frontend/public'));

// Handle Socket.IO connections
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Broadcast the message to all clients
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Start the server
server.listen(3000, () => {
  console.log('listening on *:3000');
});