# **ISeekYou**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)
[![Version](https://img.shields.io/badge/version-0.0.2-green.svg)](CHANGELOG.md)

**ISeekYou** is a modern, decentralized instant messaging app inspired by the nostalgia of ICQ. It allows users to connect with friends, send real-time messages, and share files—all while maintaining privacy and control over their data.

---

## **Features**
- **Decentralized:** Built with privacy and user control in mind.
- **Real-Time Messaging:** Send and receive messages instantly.
- **User Accounts:** Create an account and log in securely. (Coming in v0.04)
- **Typing Indicators:** See when your contacts are typing. (Coming in v0.175)
- **Contact Management:** Add friends by unique ID or search by name/email. (Coming in v0.3)
- **File Sharing:** Send and receive files (images, documents, audio snippets). (Coming in v0.4)
- **Customizable UI:** Light/dark themes and skinned windows. (Coming in v0.5)

---

## **Roadmap**
Check out our [roadmap](ROADMAP.md) to see what’s coming next!

---

## **Getting Started**  
### **Prerequisites**  
Before you blast into the past, ensure you have:  
- **Node.js 18+** (Get it [here](https://nodejs.org/))  
- **npm** or **yarn** (Legends prefer `npm`, but we won’t judge)  
- **Git** (For cloning, unless you’re downloading the ZIP like it’s 1999)  

---

### **Installation**  
1. **Clone the repo** (or download the ZIP and extract it):  
   ```sh
   git clone https://github.com/Ayelis/iSeekYou.git
   cd iSeekYou
   ```  

2. **Install dependencies** (This might take a minute—imagine it’s dial-up):  
   ```sh
   npm install
   ```  

3. **Optional**: If you’re using **Electron Builder** for packaging:  
   ```sh
   npm install electron-builder --save-dev
   ```  

---

### **Running the App**  
#### **Development Mode** (Hot Reload + 90s Nostalgia)  
```sh
npm run dev
```  
- Launches **Vite’s dev server** (React) + **Electron** in watch mode.  
- Changes update instantly—no need to smash F5 like it’s Windows 98.  

#### **Production Build** (For Distributing Your Masterpiece)  
```sh
npm run build
npm run electron:start
```  
- Builds the app into `/dist` (thanks to Vite).  
- Launches the production-ready **Electron** app.  

#### **Package for Release** (Share with Fellow Time Travelers)  
```sh
npm run electron:build
```  
- Generates installers (`.exe`, `.dmg`, etc.) in `/release`.  
- Configure outputs in `electron-builder.yml` (add this file if needed).  

---

### **Need Help?**  
- **Stuck?** Check `debug.log` (or yell at your screen like it’s a CRT monitor).
- **Want to customize?** Edit:  
  - `vite.config.js` → React/Vite settings  
  - `electron/main.js` → Electron’s entry point  

---

## **Folder Structure**
```
iseekyou/
├── index.html           (Vite's main HTML, edited directly)
├── public/              (Static assets, copied as-is to /dist)
│   ├── assets/          (Images, fonts, etc.)
│   ├── favicon.ico      (If not using a React-based favicon)
│   └── ...              (Other front-end files)
├── src/                 (React/Vite processed files)
│   ├── App.jsx
│   ├── main.jsx         (Entry point, imports CSS/JS)
│   └── styles/          (CSS-in-JS/modules, preferred over /public/css)
├── dist/                (Generated by Vite, ignored by Git)
├── README.md            (You are here!)
├── LICENSE.md           (MIT License)
├── CONTRIBUTING.md      (Contributing Guidelines)
└── ROADMAP.md           (Project roadmap)
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
- **LinkedIn:** [@smattison](https://www.linkedin.com/in/smattison/)
- **Twitter:** [@Ayelis](https://twitter.com/Ayelis)
