const { ipcRenderer } = require('electron');

window.addEventListener('message', ({ data }) => {
	ipcRenderer.send('postMessage', data);
});

ipcRenderer.on('postMessage', (event, ...args) => {
	window.postMessage([], '*');
});
