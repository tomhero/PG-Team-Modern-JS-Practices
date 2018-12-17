// callback to promise a.k.a. promisify
const fetch = require('node-fetch')

// simple timeout function
setTimeout(function () {
    // do something
}, 1000)

// warp it with Promise API
function promisedSetTimeout(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('final value'), num)
    })
}

promisedSetTimeout(1000)
    .then(val => console.log('wait -> result:', val))
    .catch(err => console.error('error!! ->', err))
// .finally(() => console.log('finally!!')) // not supported in node JS

////////////// example with fetch API //////////////
const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
    .then(response => {
        return response.json() // response.json() is return promise
    })
    .then(myJson => {
        console.log(JSON.stringify(myJson));
    })
    .catch(error => {
        console.log(error.message)
    })

///////////// Vue resouce //////////////
// GET /someUrl
this.$http.get(url)
    .then(response => {
            // get body data
            this.someData = response.body
        },
        response => {
            // error callback
            console.error(response.body)
        })

///////////// Jquery Ajax //////////////
$.ajax(url)
    .then(data => console.log(data.value))
    .catch(err => console.error(err))