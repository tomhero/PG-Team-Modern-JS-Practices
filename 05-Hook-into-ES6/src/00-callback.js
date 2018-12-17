////////////////////// Callback //////////////////////
function isUserTooYoung(id, callback) {
    openDatabase((db) => {
        getCollection(db, 'users', (col) => {
            find(col, {
                'id': id,
            }, (result) => {
                result.filter(function (user) {
                    callback(user.age < cutoffAge)
                })
            })
        })
    })
}

isUserTooYoung(2, result => {
    console.log(result)
})

// Why promise ??

////////////////////// Promise //////////////////////
function isUserTooYoung(id) {
    return openDatabase() // returns a promise
        .then(db => {
            return getCollection(db, 'users')
        })
        .then(col => {
            return find(col, {
                'id': id
            })
        })
        .then(user => {
            return user.age < cutoffAge
        })
}

isUserTooYoung(2)
    .then(data => console.log(data))
    .catch(err => console.error(err))
    .finally(() => cleanSomething())