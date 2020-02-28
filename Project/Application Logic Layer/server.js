module.exports.StartServer = function () {
    let http = require('http');
    let https = require('https');
    let cert = require("../Data Access Layer/certificates").GetKeys;
    let express = require('express');
    let WriteLog = require('../Data Access Layer/logs').WriteToAccessLog;

    let app = express();
    let credentials = cert();
    let hostname = 'localhost';

    app.use(function (req, res, next) {
        if (req.secure) {
            next();
        } else {
            res.redirect('https://' + req.headers.host + req.url);
        }
    });


    app.get('/', ((req, res) => {
        res.send("Home Search Page");
        WriteLog(`${req.connection.remoteAddress}    :   ${req.headers.host + req.url}`);
    }))

    app.use('/Weather', require('./Routes/Weather'));

    app.use((req, res) => {
        res.status(404);
        res.send("Error 404 Page not found");
        WriteLog(`${req.connection.remoteAddress}    :   ${req.headers.host + req.url}  + Failed Connection`);
    });

    var httpServer = http.createServer(app);
    var httpsServer = https.createServer(credentials, app);

    httpsServer.listen(443, hostname, () => {
        console.log("The server is running on https");
    });

    httpServer.listen(80, hostname, () => {
        console.log("The Server will redirect all http requests to https");
    });
}