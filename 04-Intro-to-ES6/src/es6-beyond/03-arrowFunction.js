function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}
// const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

const bts = {
    fullName: 'Bangkok Mass Transit System, not "Bangtan Boys"',
    ownedTrain: 24,
    systemStatusList: ['all green', 'busy', 'danger', 'critical!!'],
    showStatusInOneSecond: function showStatusInOneSecond() {
        const stance = getRandomInt(3)
        console.log('gathering data please wait...')
        setTimeout(() => {
            console.log(this.systemStatusList[stance])
        }, 1000)
    },
    addTrain(amount) { // function as property syntax short hand
        this.ownedTrain += amount
    },
    removeTrain(amount) {
        if (amount > this.ownedTrain) {
            console.log('connot remove more train')
        } else {
            this.ownedTrain -= amount
        }
    }
}

bts.showStatusInOneSecond()
// bts.addTrain(20)
// bts.removeTrain(50)
// bts.removeTrain(10)
// console.log(bts.ownedTrain)