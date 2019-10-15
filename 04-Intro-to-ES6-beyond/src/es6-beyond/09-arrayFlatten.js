// Flatten array in JS is possible in one line 💫
const cities = ['City 1', ['City 2'], ['City 3', ['City 4']]]
console.log(cities.flat(2)) // <- Because of the default depth is 1
console.log(cities.flat(Infinity)) // <-- You can also do this 😋

// outputs ["City 1", "City 2", "City 3", "City 4"]

// TIP : Array.flat will remove all empty slots from our array.
const numbers = [1, 2, [3, 4],, 5, 6,, [7,8]]
console.log(numbers.flat())

// outputs [1, 2, 3, 4, 5, 6, 7, 8]

// Array.flatMap()
// This method first maps each element using a mapping function, 
// then flattens the result into a new array.

const users = [['John', 49, 96], ['Frank', 25, 388], ['David', 36, 14]]
const usersFlattened = users.flatMap(([name, age, followers]) => {
    return { name, age, followers }
})
console.log(usersFlattened)

// outputs:
// 0: {name: "John", age: 49, followers: 96}
// 1: {name: "Frank", age: 25, followers: 388}
// 2: {name: "David", age: 36, followers: 14}
//   length: 3