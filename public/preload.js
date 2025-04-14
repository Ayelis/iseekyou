const { contextBridge, ipcRenderer } = require('electron');

// White-listed channels
const validChannels = ['close-window'];

// Expose protected methods to the renderer
contextBridge.exposeInMainWorld('electronAPI', {
  send: (channel, data) => {
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  closeWindow: () => ipcRenderer.send('close-window'),
  showWindow: () => ipcRenderer.send('show-window'),
  hideWindow: () => ipcRenderer.send('hide-window')
});
