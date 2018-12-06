var moment = require('moment-timezone');

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

console.log(JSON.stringify(displayTimeData, null, 2));