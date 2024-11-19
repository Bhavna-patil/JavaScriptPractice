// Link :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// Date :- avaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number 
           // that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

let myDate = new Date()

// console.log(myDate.toISOString()); //2024-11-19T05:39:50.527Z
// console.log(myDate.toDateString()); //Tue Nov 19 2024
// console.log(myDate.toLocaleDateString());//11/19/2024
// console.log(myDate.toLocaleString()); //11/19/2024, 5:41:13 AM
// console.log(myDate.toTimeString());//05:43:32 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toString());//Tue Nov 19 2024 05:43:32 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toJSON()); // 2024-11-19T05:43:32.750Z

//let myCreatedDate = new Date(2024,12,90) => Mon Mar 31 2025

// let myCreatedDate = new Date(2024,12,30) => Thu Jan 30 2025  Note:- Months are started with 0

// let myCreatedDate = new Date(2024,10,30,5 ,3) => 11/19/2024, 5:03:00 AM

// let myCreatedDate = new Date("19-11-2024") // *Invalid Date // ("MM-DD-YY")formate date should be valid and month start from 1
 
let myCreatedDate = new Date("2024-11-19") // Sun Nov 19 2023 ("yy-mm-dd") date should be valid other wise it shows invalid date


console.log(myCreatedDate.toDateString());

// to find current time

let myTimeStamp = Date.now()  // to calculate time stamp

console.log(myTimeStamp); // 1731996320840 from january 1 1970 t0 now in miliseconds divide by 1000 to conv in sec

console.log(myCreatedDate.getTime()) // 1731996320840 from 1 jan 1970 to our created date

console.log((Date.now() - myCreatedDate.getTime())/1000) //timeStamp in sec


// ************ other Methods ***********

let newDate = new Date()

console.log(newDate)
console.log(newDate.getDate()) // 19
console.log(newDate.getMonth()) // 10 (10+1 == 11)
console.log(newDate.getDay()) // 2 (tuesday)


newDate.toLocaleString('default', {
    weekday : "long"
})

console.log(newDate.toString())