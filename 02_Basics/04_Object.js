/*The Object.assign() static method copies all enumerable own properties from one or more source objects
 to a target object. It returns the modified target object. */

 const target = { a: 1, b: 2 };
 const source = { b: 4, c: 5 };
 
 const returnedTarget = Object.assign(target, source);
//  const returnedTarget = Object.assign({},target, source); then "target === returnedTarget" (false)
 
 console.log(target);
 // Expected output: Object { a: 1, b: 4, c: 5 }
 
 console.log(returnedTarget === target);
 // Expected output: true

// * Another method for merging

obj1 = {1:"a",2:"b"}
obj2 = {3:"c",4:"d"}
obj3 = {...obj1 , ...obj2}
console.log(obj3)

console.log(Object.keys(obj1)) // return array of keys [ '1', '2' ]

console.log(Object.values(obj1)) //  array of  values [ 'a', 'b' ]

console.log(Object.entries(obj1)); // [ [ '1', 'a' ], [ '2', 'b' ] ]

console.log(obj1.hasOwnProperty("1")) // if hass key value as specified then gove true alse false    



// De-Structuring of Object => provides deadablity and avoid redundancy

const course = {
    cName : "JavaScript" ,
    courseInstructor : "HiteshC",
    fees : "free"
}

// whenewer we need courseConstructer we have to write course.CourseInstructor again and agin 
// to avoid this situation we do de Structuring (used in react function) to access class propert directly

let {courseInstructor} = course

console.log(courseInstructor); // directly used

// if we think that the propery name is not suitable for u than u can also change property name accoordingly

let {courseInstructor : instructor} = course

console.log(courseInstructor,instructor,course.courseInstructor ,course.instructor);//HiteshC HiteshC HiteshC undefined

const {keys : k} = Object //***********

console.log(k(course))

