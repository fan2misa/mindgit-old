'use strict';

let { app, BrowserWindow } = require('electron');
let path = require('path');
let formatUrl = require('url');

// global reference to mainWindow (necessary to prevent window from being garbage collected)
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
        window.loadURL(formatUrl({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file',
            slashes: true
        }));
    } else {
        window.webContents.openDevTools();
        window.loadURL(`file://${__dirname}/../public/index.html`);
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