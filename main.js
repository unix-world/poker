
// https://github.com/hokein/electron-sample-apps

const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
      height: 600,
      width: 920,
      webPreferences: {
      	nodeIntegration: true
      }
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
});
