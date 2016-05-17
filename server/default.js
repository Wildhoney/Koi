import express from 'express';

(function($process) {

    "use strict";

    var app = express();
    var server = require('http').createServer(app);

    app.use(express.static(`${__dirname}/public`));
    server.listen($process.env.PORT || 5000);

})(process);
