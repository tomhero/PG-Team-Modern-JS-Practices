// callback to promise a.k.a. promisify
const fetch = require('fetch')

// simple timeout function
setTimeout(function () {
    // do something
 }, 1000)
 
// warp it with Promise API
function promisedSetTimeout (num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('final value'), num)
    })
}

promisedSetTimeout(1000)
    .then(val => console.log('wait -> result:', val))
    .catch(err => console.error('error!! ->', err))
    // .finally(() => console.log('finally!!')) // not supported in node JS

////////////// example //////////////
// fetch API