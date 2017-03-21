import { app, BrowserWindow } from 'electron';
import path                   from 'path';
import url                    from 'url';

app.on('ready', function() {

    const main = new BrowserWindow({
        height: 600,
        width: 800
    });

    main.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    main.webContents.openDevTools();

});
