const data1 = [{
    "id": 1,
    "first_name": "Meta",
    "last_name": "Wint",
    "email": "mwint0@fotki.com",
    "gender": "Female",
    "ip_address": "252.231.225.173"
}, {
    "id": 2,
    "first_name": "Richardo",
    "last_name": "Brickwood",
    "email": "rbrickwood1@google.com.br",
    "gender": "Male",
    "ip_address": "200.38.20.128"
}, {
    "id": 3,
    "first_name": "Bria",
    "last_name": "Dyble",
    "email": "bdyble2@dailymail.co.uk",
    "gender": "Female",
    "ip_address": "20.174.244.35"
}]

const data2 = [{
    "id": 4,
    "first_name": "Rafe",
    "last_name": "Assender",
    "email": "rassender0@unblog.fr",
    "gender": "Male",
    "ip_address": "166.146.17.58"
}, {
    "id": 5,
    "first_name": "Yale",
    "last_name": "Keemer",
    "email": "ykeemer1@europa.eu",
    "gender": "Male",
    "ip_address": "255.182.48.204"
}, {
    "id": 6,
    "first_name": "Tim",
    "last_name": "Bithany",
    "email": "tbithany2@webnode.com",
    "gender": "Male",
    "ip_address": "129.222.17.189"
}]

const allData = [ ...data2, ...data1, { myItem: 'test' } ] // Array Spread
// console.log(allData)
// const randomArray = [1,23,45,6,6,444,0,52,4,2,74,0,1,2]
// const uniqueArray = [...new Set(randomArray)]
// console.log(uniqueArray)

// Cloning Arrays
const copyOfAllData = [ ...allData ]
// console.log('copyOfAllData:', copyOfAllData)

const someData = allData[0]
const extendData = {
    city: 'Banī Walīd',
    ...someData
} // Object Spread
// console.log('extendData:', extendData)

// Cloning Object
const copyOfsomeData = { ...someData }
// console.log('copyOfsomeData:', copyOfsomeData)

// rest
function restFunc(x, ...y) {
    console.log('x:', x, '\ny:', y)
}
// restFunc(1, 2, 3 ,4 , 'Hi')

// แถม // default value
function defalutFunc(z = 101) {
    console.log('z:', z)
}
// defalutFunc()

// แถม 2 // each element of array as argument
function arrayArgs(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3)
}
const myArray = [5, 4, 3, 2, 1]
// arrayArgs(...allData)