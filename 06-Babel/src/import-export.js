// The default function should be the first to import (and named whatever) //
// import mySquare, { divide } from './functions/mather' // I named the default "square" 
const mather = require('./functions/mather-old')

console.log(mather.divide(2), mather.add(2))
// console.log(mySquare(2), divide(2)) // 4, 1

// explaination on stackoverflow
// https://stackoverflow.com/questions/33611812/javascript-es6-export-const-vs-export-default