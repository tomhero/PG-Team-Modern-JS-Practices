const hello = "Hello Babel!!"
const elSpinners = document.querySelectorAll('.loading-icon')
const elTitles = document.querySelectorAll('.title')

// setTimeout(() => callback, timeout);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function promisedSetTimeout (num) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), num)
    })
}

function simulateLoadingContent (num = 500) {
    try {
        if (num <= 100) {
            throw new Error('Too low num value')
        }

        return promisedSetTimeout(num)

        // elTitle.innerHTML = `BABEL async await @ ${num}ms`
        // console.log(`YaH!! wait for ${num} miliseconds`)

        // return 'success ja'
    } catch (error) {
        return `fail ja | reason : ${error}`
    }
}

simulateLoadingContent(2500)
    .then(() => console.log('success ja'))

// elSpinners[0].style.display = 'block'
// elTitles[0].innerHTML = `Loading.. @ \${ time } ms`
// elTitles[0].classList.remove('fade-in')
// elTitles[0].classList.add('scale-up-center')
// elSpinners[0].style.display = 'none'

for (let index = 0; index < elTitles.length; index++) {
    loadData(index)
}

async function loadData(i) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${getRandomInt(99)}`)
    elTitles[i].innerHTML = res.data.title
    elTitles[i].classList.remove('fade-in')
    elTitles[i].classList.add('scale-up-center')
 }