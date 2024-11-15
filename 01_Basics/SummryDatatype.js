// /* 
// # Primitive data types : String , Number , Boolean , BigInt , Symbol , Undefined , Null

let number =123

let IsloggedIn = true

let BigNumber = 677878178281682686n

let id1 = Symbol("123") //make unique
let id2 = Symbol("123")
console.log(id1 === id2) // false

let temprature = null

let email;



// # Reference (NonPrimitive)

// Array , Object ,  function

let Friends = ["Bhavna", "sneha"]

let Books = {
    101 : "JavaScript",
    112 : "React"
}

let callFunc = function (){
    console.log("Hello Dear")
}


console.log(typeof callFunc)


//DataTypes and there typeof result

/*
 
number = number
bigint = bigint
symbol = symbol
boolean = boolean
null = object
undefined = undefined
string = string

array = object
object = object
functon = function

*/



// **********************************************************

//  MEMORY APACES

// Java Script is a dynamically typed language as well as it follow auto memory managment there are two types of memory spaces :-

// 1 Stack :- Primitive data types are build in Stack (call by value)
// 2 Heap :- Non primitive data types (array , object, functon) are created in heap (call by reference)

let user1Name = "bhavna"
let user2Name = user1Name // only share copy
user2Name = "Bhaviii"

console.log(user1Name) 
console.log(user2Name)  // independent to user 1  


let student1 = {
    name : "Bhavna" ,
    rollNO : 123
}

let student2 = student1 // share reference so both are same effect each other

student2.name = "Sakshi"

console.log(student1.name)
console.log(student2.name)
