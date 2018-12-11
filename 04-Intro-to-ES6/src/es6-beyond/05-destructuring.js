/////////////// Object Destructuring ///////////////
const user = {
    id: 4,
    firstName: "Rafe",
    lastName: "Assender",
    email: "rassender0@unblog.co.fr",
    gender: "Male",
    ipAddress: "166.146.17.58"
}

// magic, grap only data we need!!
const { firstName, email } = user
// console.log(firstName, email)

// magic remove unuse object properties
const chaosObject = {
    el1: '1',
    _internal: "secret",
    tooBig: {},
    el2: '2',
    el3: '3'
}
const { _internal, tooBig, ...cleanObject } = chaosObject
// console.log(cleanObject) // {el1: '1', el2: '2', el3: '3'}

function mutator1({ prop1 = 'init value', prop2, prop3: { subProp3 } }) {
    console.log(prop1, prop2, subProp3)
}
const props = {
    // prop1: 'aaa',
    prop2: 1000,
    prop3:
    {
        subProp3: 'Deeper'
    }
}
// mutator1(props)

/////////////// Array Destructuring ///////////////
// basic basic
const rgb = [255, 123, 0]
const [red, green, blue] = rgb
// console.log(`R: ${red}, G: ${green}, B: ${blue}`) // R: 255, G: 200, B: 0

function getDualChanel() {
    return ['3HD', 'MCOT']
}
const [chanel1, chanel2] = getDualChanel()
// console.log(chanel1)
// console.log(chanel2)

function setDualChanel([chanel1, chanel2]) {
    console.log(chanel1, chanel2)
}
// setDualChanel(['7HD', { name: 'Thairat', freq: '35000Hz' }])