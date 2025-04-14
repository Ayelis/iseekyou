const { app, BrowserWindow, ipcMain, Tray, Menu } = require('electron');
const path = require('path');
const iconPath = path.join(__dirname, 'public/images', 'icon.png');

let mainWindow;
let tray;

function createWindow() {
  // Create the main window (single instance)
  mainWindow = new BrowserWindow({
    backgroundColor: '#cccccc',
    icon: iconPath,
    frame: false,
    width: 225,
    height: 600,
    skipTaskbar: true,
    webPreferences: {
      preload: path.join(__dirname, 'public/preload.js'), // Critical!
      nodeIntegration: false, // Security best practice
      contextIsolation: true  // Security best practice
    },
  });

  // Tray setup
  tray = new Tray(iconPath);
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Open', click: () => mainWindow.show() },
    { label: 'Quit', click: () => app.quit() }
  ]);
  tray.setToolTip('iSeekYou');
  tray.setContextMenu(contextMenu);
  tray.on('click', () => mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show());

  // Load app (dev vs prod)
  mainWindow.loadURL(
    !app.isPackaged
      ? 'http://localhost:5173' // Vite default port is 5173
      : `file://${path.join(__dirname, 'dist/index.html')}`
  );

  // IPC handlers
  ipcMain.on('close-window', () => mainWindow.close());
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});