let express = require("express");
let router = express.Router();
let WriteToLog = require('../../../Data Access Layer/logs').WriteToAccessLog;
let processingZip = require('../../weatherProcessing').GetWeatherByZipCode;

router.get('/', (req, res) => {
    res.send("Weather Page");
    WriteToLog(`${req.connection.remoteAddress}    :   ${req.headers.host + req.url}Weather`);
});

router.get('/zip/:zip', (req, res) => {
    let zipCode = req.params.zip;
    processingZip(zip).then((weather)=>{
        
    })

    res.send("Weather Page" + zipCode);
    WriteToLog(`${req.connection.remoteAddress}    :   ${req.headers.host}/Weather${req.url}`);

});

router.get('/coordinates/:long&:lat', (req, res) => {
    let long = req.params.long;
    let lat = req.params.lat;
    res.send("Weather Page" + long + " " + lat);
    WriteToLog(`${req.connection.remoteAddress}    :   ${req.headers.host}/Weather${req.url}`);
});

module.exports = router;