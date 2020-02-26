module.exports.StartServer = function () {
    let http = require('http');
    let https = require('https');
    let cert = require("../Data Access Layer/certificates").GetKeys;
    let express = require('express');
    let WriteLog = require('../Data Access Layer/logs').WriteToAccessLog;

    let app = express();
    let credentials = cert();
    let hostname = 'localhost';

    app.get('/', ((req, res) => {
        let port = req.protocol;
        if (port == 'http') {
            res.redirect("https://" + req.headers.host + req.url)
        }
        if (port == 'https') {
            res.send("Youre on https. Well done on being safe");
            WriteLog(`${req.connection.remoteAddress}    :   ${req.headers.host + req.url}`);
        }
    }))

    var httpServer = http.createServer(app);
    var httpsServer = https.createServer(credentials, app);

    httpsServer.listen(443, hostname, () => {
        console.log("The server is running on https");
    });

    httpServer.listen(80, hostname, () => {
        console.log("The Server will redirect all http requests to https");
    });

   
}