'use strict';

let { app, BrowserWindow } = require('electron');

let mainWindow;

function createMainWindow()
{
    const window = new BrowserWindow({
        width: 1600,
        height: 900,
        webPreferences: {
            nodeIntegration: true
        }
    });

    if (process.env.NODE_ENV === 'production') {
        window.loadURL(`file://${__dirname}/public/index.html`);
    } else {
        window.webContents.openDevTools();
        window.loadURL(`http://localhost:9000`);
    }

    window.on('closed', () => {
        mainWindow = null
    });

    window.webContents.on('devtools-opened', () => {
        window.focus();
        setImmediate(() => {
            window.focus()
        })
    });

    return window
}

// quit application when all windows are closed
app.on('window-all-closed', () => {
    // on macOS it is common for applications to stay open until the user explicitly quits
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    // on macOS it is common to re-create a window even after all windows have been closed
    if (mainWindow === null) {
        mainWindow = createMainWindow()
    }
});

// create main BrowserWindow when electron is ready
app.on('ready', () => {
    mainWindow = createMainWindow()
});