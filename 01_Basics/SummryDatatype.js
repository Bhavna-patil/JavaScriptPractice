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