// ES2017 feature!!

function promisedSetTimeout(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('final value'), num)
    })
}

// promise!!
let timmer = new Date()
promisedSetTimeout(500)
    .then(val => console.log(val + ' then -> I'))
    .then(() => promisedSetTimeout(2000))
    .then(val2 => console.log('val =', val2))
    .then(() => promisedSetTimeout(1000))
    .then(() => console.log('then and then and ...'))
    .then(() => { 
        console.log('end of opreation')
        console.log('estimated time:', new Date() - timmer)
    })
    .catch(err => console.error(err))

// async await !!! 
// async function myOpreation(baseDelay) {
//     try {
//         let val = await promisedSetTimeout(baseDelay)
//         val += ' then -> I'
//         console.log(val)
//         let val2 = await promisedSetTimeout(2000)
//         console.log(val2)
//         await promisedSetTimeout(1000)
//         console.log('then and then and ...')
//     } catch (err) {
//         console.error(err)
//     }
// }

// timmer = new Date()
// myOpreation(500)
//     .then(() => { 
//         console.log('end of opreation')
//         console.log('estimated time:', new Date() - timmer)
//  })