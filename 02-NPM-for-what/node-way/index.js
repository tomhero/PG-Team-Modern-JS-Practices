var moment = require('moment-timezone');
var http = require('http');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(getTimes(), null, 2));
});

server.listen(port, hostname, function () {
    console.log('Server running at http://' + hostname + ':' + port);
});

function getTimes() {
    var losAngelsDate = moment().tz("America/Los_Angeles").format('LL');
    var bangkokDate = moment().tz("Asia/Bangkok").format('LL');
    var tokyoDate = moment().tz("Asia/Tokyo").format('LL');

    var losAngelsTime = moment().tz("America/Los_Angeles").format('LTS');
    var bangkokTime = moment().tz("Asia/Bangkok").format('LTS');
    var tokyoTime = moment().tz("Asia/Tokyo").format('LTS');

    var displayTimeData = [
        {
            timeZone: 'America/Los_Angeles',
            date: losAngelsDate,
            time: losAngelsTime
        },
        {
            timeZone: 'America/Bangkok',
            date: bangkokDate,
            time: bangkokTime
        },
        {
            timeZone: 'Asia/Tokyo',
            date: tokyoDate,
            time: tokyoTime
        }
    ];
    return displayTimeData;
}