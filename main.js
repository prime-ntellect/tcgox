const { app, BrowserWindow, ipcMain } = require('electron');
const { exec } = require('child_process');
const path = require('path');
require('./server');
//require('update-electron-app')();
function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		icon: './public/AppIcon.icns',
		webPreferences: {
			nodeIntegration: true,
			preload: path.join(__dirname, 'preload.js'),
		},
	});
	win.loadURL('http://localhost:21380/search');
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

ipcMain.on('postMessage', (e, url) => {
	exec(`open ${url}`);
});
