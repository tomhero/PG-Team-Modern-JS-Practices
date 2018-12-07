function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max))
}

const bts = {
    fullName: 'Bangkok Mass Transit System, not "Bangtan Boys"',
    ownedTrain: 24,
    systemStatusList: ['all green', 'busy', 'danger', 'critical!!'],
    showStatusInOneSecond: function () {
        const stance = getRandomInt(3)
        console.log('gathering data please wait...')
        setTimeout(function () {
           console.log(this.systemStatusList[stance])
        }, 1000)
    }
}

bts.showStatusInOneSecond()