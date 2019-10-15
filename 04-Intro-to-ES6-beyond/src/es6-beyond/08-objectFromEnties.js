// Object.fromEntries method transforms a list of key-value pairs into an object
// transforms a list of key-value pairs into an object

const users = [['John', 49], ['Frank', 25], ['David', 36]]
const usersAge = Object.fromEntries(users) // converts the given object into its key-value pair
console.log(usersAge)

// outputs: {John: 49, Frank: 25, David: 36}