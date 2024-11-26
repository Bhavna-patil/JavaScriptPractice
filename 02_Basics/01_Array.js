/* Array => 1. JavaScript Object
            2. Allow to store multible element (can be hetro)
            3. Array is mutable so [] == [] is false
            4. Accessible using index (positive only)
            5. When we do copy operation on array then they do shallow copy(share reference)
               arr1[] = arr[2] (shallow copy) like c++
            */


let Arr = [1 , "bhavii", true]
        // OR
let arr2 = new Array(1 , "bhaviii" , true)

console.log( Arr == arr2) // false

// *************************************** Array Methods ******************************* //

// 1. push(element) = arr2.push(9) add at last
// 2. pop
// 3. shift(2 or empty) => delete from start amd return it
// 4. unshift()  => add to start
// 5. includes() => 
// 6. indexOf() => return index at element persent else return -1
// 7. concat() => merge two array and return it

 const user = ["bhavna" , "ankita" , "sneha"]
 const guest = ["vaish" , "nikki" ]

 const allMember = user.concat(guest) // return new array with combine element of both

 // Another Way : -

 const allMemberUingSpred = [...user, ...guest]

// 8. reverse()
// 9. slice() => return part of array
// 10. splice()
// 11. sort() => sort the value after converting it in string not provide valid result
 
// arr2.unshift(6)

console.log(arr2.includes("bhavii"))

