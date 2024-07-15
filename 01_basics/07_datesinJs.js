// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);    //  Date is always show Object.

// let myCreateDate = new Date(2024, 1, 15)
// let myCreateDate = new Date(2024, 1, 15, 5, 3)
 let myCreateDate = new Date("2024-04-23")  // "YYYY-MM-DD"
// let myCreateDate = new Date("22-03-2024")  // "DD-MM-YYYY"

// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);     // output comes for mili-second
// console.log(myCreateDate.getTime());  // output comes for mili-second
// console.log(Math.floor(Date.now()/1000));  // Output comes for second // Interview question

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getFullYear());

// '${newDate.getDay()} and the time'

newDate.toLocaleString('default', {  // Important
    weekday: "long"
})