// Map , Filter, Reduce, Find // example (all is Good for small - medium data set)!! ⚠

/////////////////////// Map ///////////////////////
let myWords = [
    'Li ',
    'Europan',
    'lingues ',
    'es.',
    'membres',
    'del sam. ',
    'familie.',
    'Lor separat  '
]

let myAdvanceWords = [
    { text: 'hi', time: '15:30' },
    { text: 'membres ', time: '15:33' },
    { text: 'familie', time: '15:33' },
    { text: 'Europan', time: '15:39' },
    { text: '  sunnor', time: '15:55' },
    { text: 'ziser.', time: '15:55' },
]

// make its UPPERCASE THEN TRIM!!
// for (var index = 0; index < myWords.length; index++) {
//     myWords[index] = myWords[index].toUpperCase()
//     myWords[index] = myWords[index].trim()
// } // only recomended for large data set e.g. if myWords has length of >= 10000

// myWords = myWords.map(function (word) {
//     var cleanedWord = word.toUpperCase()
//     cleanedWord = cleanedWord.trim()
//     return cleanedWord
// }) // ok but old syntax.

// myWords = myWords.map((word) => {
// let cleanedWord = word.toUpperCase()
//     cleanedWord = cleanedWord.trim()
//     return cleanedWord
// }) // ok readable

// myWords = myWords.map(word => word.toUpperCase().trim()) // very handy!! and readable!!

console.log(myWords)

/////////////////////// Filter /////////////////////// 

// get only >= 3 length and have no '.' in word
myWords = myWords.filter(word => word.length >= 3 && !word.includes('.'))


/////////////////////// Reduce /////////////////////// 
const numbers = [1, 3, 4, 6, 7, 8, 10] // easy way to sum number values from array
summy = numbers.reduce((prev, currrent) => prev + currrent, 0)

// conditional reducer
myAdvanceWords = myAdvanceWords.reduce((prevValue, currentValue) => {
    // console.log(prevValue, currentValue)
    if (currentValue.text.length > 6) {
        currentValue.text = currentValue.text.toLowerCase()
        return prevValue.concat(currentValue.time)
    }
    return prevValue
}, [])


// console.log(myWords)
// console.log(myAdvanceWords)
// console.log(summy)
