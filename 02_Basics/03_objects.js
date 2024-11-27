// There are two ways to creat objects => 1.Singleton , 2. Object literal

/*  1. Singleton =>  objects created using constructor method 
     Example -  Array() , Object() etc
     
    2. Object literal => const obj = {name : "bhaviii" , age : 21}
                         const arr = []
*/

// Object is a js object which has (key , value ) pair 

const syb = Symbol("Key1")
const user ={
    name : "bhavna" ,
    "age" : 21 ,
    [syb] : "myKey" ,
    location : "Burhanpur" ,
    email : "bhavna@gmail.com"
    
}

/*Note :- 1. Here keys are outomatically treated as a string so if we write like user[name] then 
             it will gives error we must write like user["name"]
          2. if we want to use Symbole (const syb = Symbole("Key1")) then we must use it in brakets
             like [syb] : "myKey" then it will be trated as symbole if we write like syb : "myKey" then 
             it will be treated as noraml object pair 
          3. if we explicitly use a key as a string then we cant acess it through .(dot) operator */

console.log(user.name)
// console.log(user."age")  syntax error
console.log(user["name"])

console.log(user["age"])

console.log(user[syb]) // myKey

console.log(user.syb) // Undefined

// Modifying objects values

user.email = "bhavna@youtube.com"
console.log(user)

// Object.freeze(user) // if we dont want to make changes in object

user.email = "bhavna@microsoft.com" // dosen't make any changes

console.log(user) 
/* {
  name: 'bhavna',
  age: 21,
  location: 'Burhanpur',
  email: 'bhavna@youtube.com',
  [Symbol(Key1)]: 'myKey'
}  */

user.greeting = function(){
    console.log("Welcome to over page")
}

user.greeting2 = function(){
    console.log(`Welcome ${this.name}`)
}

console.log(user.greeting())
console.log(user.greeting2())