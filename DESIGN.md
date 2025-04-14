# Project Title:
**ISeekYou** – A Clean, Modern Reboot of ICQ98

---

## Overview
ISeekYou is a modern, decentralized instant messaging app inspired by the clean simplicity and nostalgic charm of ICQ circa 1998. It allows users to connect with friends, send real-time messages, and share files—all while maintaining privacy and control over their data. Designed as a browser-based app, it delivers core chat features like friend list management, offline message queues, and basic profile editing—without the bloat of later versions. The interface evokes the original desktop feel, launching in a chromeless window from a web page button for a focused, clutter-free experience.

---

### Core Features

**1. Contact List**
- Online/Offline grouping
- Optional user-defined custom groups
- Add/remove contacts by number or username
- Show status (online, offline, away, invisible)

**2. User Profile**
- Editable nickname, status message, avatar
- Unique user ID (auto-assigned, not changeable)
- Visible to others via mini-profile popover

**3. Messaging**
- Real-time, letter-by-letter text transmission (like typing on a teletype)
- Rich text formatting: bold, italics, underline, colors, emoji
- Offline message queue: messages delivered when user comes online
- Audio notifications ("Uh-oh!" but new and improved...)
- Message history retained in local storage (with optional cloud sync)
- E2E Asymmetrical Encryption, Federated servers or p2p

**4. File/Image Sharing**
- Drag-and-drop or file picker support
- Sends directly in chat
- Simple preview and download functionality
- Max file size limits configurable

**5. UI/UX**
- Evoked in a chromeless popup/modal-style window
- Skinnable interface themes (Classic, Modern Minimal, Dark Mode)
- Lightweight and responsive, minimal animations
- No ads, no clutter

---

### Out of Scope / Explicitly Not Included
- Topics/interest-based chat rooms
- Translator
- ICQMail, newsletters
- Games, to-do lists, reminders
- Greeting cards, sticky notes, "fun" extras
- Anything that wasn’t in the messenger before bloat set in

---

### Tech Stack (Proposed)
- **Frontend:** React (for dynamic UI), Vite, and Electron
- **Backend:** Express (REST API for user/auth management, message metadata)
- **Database:** MongoDB (for user data, encrypted/offline messages, reporting)
- **File Storage:** Cloudinary, S3 for offline files, avatars, reporting
- **Realtime:** Socket.IO for messages, WebRTC for Chat, Files, Voice
- **Considerations:** Gun.js/Hypercore for p2p, Sharding/IPFS for storage

---

### Security & Privacy
- Encrypted messaging over HTTPS/WSS
- Optional E2E encryption for messages and file transfer (phase 2)
- Simple block/report system
- No ads, no data selling, no trackers

---

### Stretch Goals
- Light customization (themes, sounds)
- Notification integration (browser/system)
- Multi-device sync
- "2go" functionality: ISeekYou access in a webpage!

---

### MVP Checklist
- [ ] Login/registration system
- [ ] Basic profile/avatar editing
- [ ] Add/remove friends
- [ ] View friends by status or group
- [ ] Audio notification
- [ ] Launch in Cordova tooltip popup
- [ ] Launch with Electron systray support
- [ ] Retro theme
- [ ] Image/file sharing
- [ ] Real-time chat + offline messages
