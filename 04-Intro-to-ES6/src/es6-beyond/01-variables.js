console.log(`Start ES6+ : ${Date()}, unix timestamp = ${Date.now()}`)
// 0. no more semicolon needs

// 1. const let (block-scoped) var (fucntion-scoped)
const a = 10
// a = 11 // error

let b = 'val'
b = 'new val' // good

for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log('i :', i);
    },1000);
}
console.log('the end : i = ' + i) // error i is not defined
