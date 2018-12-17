// Problems that We used to encounter

// 1. Closure and non-blocking code
// var i;
for (var i = 0; i < 3; i++) {
    setTimeout(
        // callback function ที่จะเรียกทำงานหลังผ่านไป 1 วินาที
        function () {
            console.log('i :', i);
        },
        1000
    );
}

// 2. Hoisting
/*
console.log(x); // undefined // not error, what??
console.log(print()); // print
// console.log(y); // y is not defined

var x = 3;

function print() {
    console.log('print');
}
// https://devahoy.com/posts/javascript-variable-hoisting/ // (ภาษาไทย)
*/

// 3. Equality Operators
/*
var obj1 = { a: 1 };
var obj2 = { a: 1 };

console.log(obj1 === obj2) // false
*/

// 4. null and undefined
/*
var a;
var b = {};
console.log(typeof a); // undefined
console.log(typeof b); // object
console.log(typeof undefined); // undefined
console.log(typeof null); // object
*/

// https://dorey.github.io/JavaScript-Equality-Table/

// 5. this? - that?
/*
var obj = {
    text: 'hello!!',
    print: function () {
        console.log(this.text);
    },
    waitOneSecBeforePrinting: function () {
        // var that = this;
        setTimeout(
            function () {
                // console.log(that.text);
                console.log(this.text);
            },
            1000
        );
    }
}

obj.print() // 'hello!!'
obj.waitOneSecBeforePrinting() // undefined... what!!?
*/

// 6. non-blocking code again!!??
/*
$(document).ready(function () {
    var url = 'https://jsonplaceholder.typicode.com/posts/1'
    $.get(url, function (data, status) {
        console.log(data, status);
    });

    console.log('wait please!!');
});
*/

////////////////////////////////// รู้หรือไม่ ////////////////////////////////////

// console.log(0.1 + 0.2); // ได้ 0.30000000000000004 นะ magic number 1

// console.log(NaN === NaN); // -> false WTF?

/*
var a = [, , ,];
console.log(a.length); // -> 3
console.log(a.toString()); // -> ',,'
*/

// console.log(typeof NaN === 'number'); // Wait?? NaN is number type??

/* magic number 2
console.log(999999999999999);
console.log(9999999999999999);
console.log(10000000000000000);
console.log(10000000000000000 + 1);
console.log(10000000000000000 + 1.1);
*/

/*
var myArray = [1, 2, 5, 16, -10, -2 , -9, 0];
console.log(myArray.sort());
*/
// The default sort order is built upon converting 
// the elements into strings, then comparing their sequences of UTF-16 code units values.

// read more -> https://github.com/denysdovhan/wtfjs