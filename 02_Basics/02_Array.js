// 7. concat() => merge two array and return it

const user = ["bhavna" , "ankita" , "sneha"]
const guest = ["vaish" , "nikki" ]

const allMember = user.concat(guest) // return new array with combine element of both

// Another Way : -

const allMemberUingSpred = [...user, ...guest]

//13. flat() => this mathod is applied on nested array to solve array at perticular depth (passed as argument)

const anotherArray = [1,2,3,[4,5],6,[7,[8,9]],10]

const realAnotherArray = anotherArray.flat(1)  // anotherArray.flat(Infinity)
console.log(realAnotherArray)

//Static Methods

//  1. Array.isArray()  => ask a perticular value is an array or not

console.log(Array.isArray([])) // true
console.log(Array.isArray(Array(0))) // true
console.log(Array.isArray("bhavii")) // false

//  2. Array.from(arr like obj / iterable) => used to creat array from

/* The Array.from() static method creates a new, shallow-copied Array instance 
     from an iterable or array-like object paramether = array like object. */

console.log(Array.from("Bhavii"))

console.log(Array.from(Object.keys({name : "bhavii", grade : 8.8}))) //[ 'name', 'grade' ]
console.log(Array.from(Object.values({name : "bhavii", grade : 8.8}))) //[ 'bhavii', 8.8 ]

// Better utilization of from 

/* To generate even number */

evnNo = Array.from({length:5} ,(it,x) => x*2)
console.log(evnNo)

// multiple a array by 2

const arr = [1,2,3]
console.log(Array.from(arr, it => it*2)) //[ 2, 4, 6 ]

// 3. Array.of()
   /*The Array.of() static method creates a new Array instance from a variable number of arguments, 
     regardless of number or type of the arguments.*/

console.log(Array.of(1,"Bhavii",{name : "bhavii", grade : 8.8})) //[ 1, 'Bhavii', { name: 'bhavii', grade: 8.8 } ]

console.log(Array.of("Bhaviii")) //[ 'Bhaviii' ]