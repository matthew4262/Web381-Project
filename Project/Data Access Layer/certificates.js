let fs = require('fs');
let privateKey = fs.readFileSync('./CertKeys/notaviruswebsite.key', 'utf8');
let certificate = fs.readFileSync('./CertKeys/notaviruswebsite.cert', 'utf8');

module.exports.GetKeys = function(){
    return { key: privateKey, cert: certificate };
}