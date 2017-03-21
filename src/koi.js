import { app, BrowserWindow } from 'electron';
import path                   from 'path';
import url                    from 'url';
// import { create }             from 'switzerland';
// import { html }               from 'switzerland/middleware';

let main = null;

app.on('ready', function() {

    main = new BrowserWindow({
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
