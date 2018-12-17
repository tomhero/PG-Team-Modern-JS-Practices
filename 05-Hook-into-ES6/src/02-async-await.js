// ES2017 feature!!

function promisedSetTimeout(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('final value'), num)
    })
}

// promise!!
let timmer
function beginOpreation() {
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
}

beginOpreation()

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

////////////// example with fetch API //////////////
const url = 'https://jsonplaceholder.typicode.com/users'
async function fetchData(url) {
    try {
        const response = await fetch(url)
        const myJson = await response.json()
        console.log(JSON.stringify(myJson, null, 2))
    } catch (error) {
        console.log(error.message)
    }
}

///////////// Vue resouce //////////////
async function getResource(url) {
    let response
    try {
        response = await this.$http.get(url) // vue-resource method
    } catch (error) {
        // handle error
        console.error(error)
    }
    const data = response.body
    console.log(data)
}

///////////// With Jquery!! //////////////
async function getData(url) {
  timmer = new Date()
  console.log('loading...')
  const dataset = await $.ajax(url);
  document.querySelector('.joke').innerHTML = dataset.value.joke
  console.log('loading', new Date() - timmer, 'ms')
}

const jokesUrl = 'https://api.icndb.com/jokes/random'
getData(jokesUrl)