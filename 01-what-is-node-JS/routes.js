var fs = require('fs');

var readPath = __dirname.concat('\\test-read.txt');

var handleRequest = function (req, res) {
    console.log(req.headers['user-agent'], '\nRoute :' ,req.url); // loggin request
    var content = fs.readFileSync(readPath, 'utf8'); // <- this is Synchronous code

    // if you already know about non-blocking code, try to use fs.readFile()
    // fs.readFile(readPath, 'utf8', function (err, data) {
    //     if (err) {
    //         console.error(err);
    //         content = null;
    //     } else {
    //         content = data
    //     }
    //      // others logic goes here
    // });

    sendResponse(req.url, res, content);
}

/**
 * This function will handle response content 
 * base on url from web browser.
 * 
 * @param { String } requestUrl - request url from address bar
 * @param { Object } response - response object to handle
 * @param { String } content - text to response
 */
function sendResponse (requestUrl, response, content) {
    response.setHeader('Content-Type', 'text/plain');

    switch (requestUrl) {
        case '/':
            response.statusCode = 200;
            response.write('From: ' + readPath + '\n');
            response.end(content);
            break;
        case '/test':
            response.statusCode = 200;
            response.end('you have enter to "/test" route!!');
            break;
        default:
            response.statusCode = 404;
            response.end('404 not found page');
    }
}

module.exports = handleRequest; // <- with this line, handleRequest function will export as one module