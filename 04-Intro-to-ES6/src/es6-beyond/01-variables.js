console.log(`Start ES6+ : ${Date()}, unix timestamp = ${Date.now()}`)
// 0. no more semicolon needs

// 1. const let (block-scoped) var (fucntion-scoped)
const a = 10
// a = 11 // error

let b = 'val'
b = 'new val'
 // good

for (let i = 0; i < 3; i++) {
    var j = 0
    setTimeout(function () {
        console.log('j :', j);
        j++;
    },1000);
} // error i is not defined
const numbers = [1,2,3,4]
numbers.push(99)
