// The default function should be the first to import (and named whatever) //
import square, {divide} from './functions/hello' // I named the default "square" 

console.log(square(2), divide(2)) // 4, 1

// https://stackoverflow.com/questions/33611812/javascript-es6-export-const-vs-export-default