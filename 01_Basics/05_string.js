// suggeste syntax for string interpolation

let user = "Bhavna"
console.log(`Hellow ${user}`)

// two ways to define string

// 1 is all we know and socend is

let user2 = new String("Bhaviii") // this syntax will return non primitive value of string which type is object

console.log(typeof user2) // Object

// ********************************* METHODS of string ******************************


const name = new String("Bhavna Patil")

// 1. at 

console.log(name.at(5)) // a
console.log(name.at(15)) // undefined
console.log(name.at(-15)) // v