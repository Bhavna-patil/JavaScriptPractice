
const score = 400 // type number emplicit way

const balance = new Number(100) // explicitly a number 

console.log(balance)

// **************************************** MEthods ***********************************

console.log(balance.toFixed(2)) // after the decimal how many digit you want => 100.00

const otherNumber = 129.0888

console.log(otherNumber.toPrecision(4)) /* => 129.1 Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

 @param precision — Number of significant digits. Must be in the range 1 - 21, inclusive.*/

 const hundreds = 1000000 // which is difficult to read so js provide follow method for easy reading

 console.log(hundreds.toLocaleString('en-IN'))

// number.toString()

// Other Properties

// to get minimum number Number.MIN_VALUE / Number.MAX_VALUE

console.log(Number.MIN_VALUE)



//Maths.abs()
// Math.floor()
// Math.ceil()
// Math.pow(a,b)
// Math.log()

// # prperties
    //  Math.PI
    // Math.E


console.log(Math.floor(Math.random()*10)) // generate number 0 to 9

console.log(Math.floor(Math.random()*10) + 1) // 1 t0 10

console.log(Math.floor(Math.random()*5) +  21 ) // frome 21 t0 25


// ************************ formula ******************

// console.log(Math.floor(Math.random() * ( max - min + 1 )) + min)

min = 10
max = 20

console.log( Math.floor( Math.random() * 11 ) + 10 )