# **ISeekYou**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)
[![Version](https://img.shields.io/badge/version-0.0.2-green.svg)](CHANGELOG.md)

**ISeekYou** is a modern, decentralized instant messaging app inspired by the nostalgia of ICQ. It allows users to connect with friends, send real-time messages, and share files—all while maintaining privacy and control over their data.

---

## **Features**
- **User Accounts:** Create an account and log in securely.
- **Real-Time Messaging:** Send and receive messages instantly.
- **Contact Management:** Add friends by unique ID or search by name/email.
- **Typing Indicators:** See when your contacts are typing.
- **File Sharing:** Send and receive files (images, documents, audio snippets).
- **Customizable UI:** Light/dark themes and skinned windows.
- **Decentralized:** Built with privacy and user control in mind.

---

## **Roadmap**
Check out our [roadmap](ROADMAP.md) to see what’s coming next!

---

## **Getting Started**

### **Prerequisites**
- Node.js (v16 or higher)
- npm (comes with Node.js)
- Git (optional, but recommended)

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/ayelis/iseekyou.git
   cd iseekyou
   ```
2. Install back-end dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Install front-end dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

### **Running the App**
1. Start the back-end server:
   ```bash
   cd ../backend
   node server.js
   ```
2. Start the front-end development server:
   ```bash
   cd ../frontend
   npm start
   ```
3. Open your browser and navigate to `http://localhost:3000`.

---

## **Folder Structure**
```
iseekyou/
├── backend/               # Back-end code (Node.js + Express + Socket.IO)
│   ├── server.js          # Main server file
│   ├── package.json       # Back-end dependencies
│   └── ...                # Other back-end files
├── frontend/              # Front-end code (React)
│   ├── public/            # Static files (e.g., index.html)
│   ├── src/               # React source code
│   │   ├── App.js         # Main React component
│   │   └── index.js       # Entry point for React app
│   ├── package.json       # Front-end dependencies
│   └── ...                # Other front-end files
├── README.md              # You are here!
├── LICENSE.md             # MIT License
├── CONTRIBUTING.md        # Contributing Guidelines
└── ROADMAP.md             # Project roadmap
```

---

## **Contributing**
We welcome contributions! Here’s how you can help:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

Please read our [contributing guidelines](CONTRIBUTING.md) for more details.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

---

## **Acknowledgments**
- Inspired by the simplicity and nostalgia of ICQ.
- Built with ❤️ and JavaScript.

---

## **Contact**
Have questions or feedback? Reach out to us at:
- **GitHub:** [@Ayelis](https://github.com/Ayelis)
- **Email:** s.mattison@gmail.com
- **BSky:** [@Ayelis](https://bsky.app/profile/ayelis.bsky.social)
- **LinkedIn:** [@Ayelis](https://www.linkedin.com/in/smattison/)
- **Twitter:** [@Ayelis](https://twitter.com/Ayelis)
- **Website:** [iseekyou.app](https://iseekyou.app)
