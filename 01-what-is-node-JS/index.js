// import section
var fs = require('fs');
var http = require('http');
// var routes = require('./routes'); // 2.

// declear variable
var hostname = 'localhost';
var port = 3000;
var readPath = __dirname.concat('\\test-read.txt');

// logic goes here!!
var server = http.createServer(function (req, res) {
    var content = fs.readFileSync(readPath, 'utf8');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('From: ' + readPath + '\n');
    res.end(content);
});
// var server = http.createServer(routes); // 2.

server.listen(port, hostname, function () {
    console.log('Server running at http://' + hostname + ':' + port);
});

// alert('Test alert') <- in Node JS you can't use any function in web browser!! please note
// require('module-name') <- In contrast you can't use require module feature on web browser