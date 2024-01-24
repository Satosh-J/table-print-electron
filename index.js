const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;
app.on("ready", () => {
  mainWindow = new BrowserWindow({
    icon: path.join(__dirname, "app-icon.ico"), // Set the path to your icon file
    width: 1600,
    height: 1100,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadURL(`${app.getAppPath()}\\build\\index.html`);
});
