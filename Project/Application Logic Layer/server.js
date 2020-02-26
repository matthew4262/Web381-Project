var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('./CertKeys/notaviruswebsite.key', 'utf8');
var certificate = fs.readFileSync('./CertKeys/notaviruswebsite.cert', 'utf8');
var hostname = 'localhost';

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

app.get('/', ((req,res)=>{
    let port = req.protocol;
    console.log(port);
    if (port == 'http') {
        res.send("Youre on http bruh. Get safe")
    }

    if (port == 'https') {
        res.send("Youre on https. Well done on being safe")
    }
}))

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);


httpServer.listen(80,hostname,()=>{
    console.log("running on http");
    
});

httpsServer.listen(443,hostname,()=>{
    console.log("running on https");
    
});
