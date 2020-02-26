var fs = require('fs');

module.exports.WriteToAccessLog = function(data) {
    var text = data+"\r\n"
    fs.appendFile('accesslog.txt', text, (err) => {
        if (err) throw err;
    });
}