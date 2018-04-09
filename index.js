import electron, {BrowserWindow} from 'electron';
import path from 'path';
import url from 'url';

const app = electron.app;
let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({width: 800, height: 600});

	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'src', 'assets', 'index.html'),
		protocol: 'file:',
		slashes: true
	}));

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});
