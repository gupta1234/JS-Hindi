// if Statement
const inUserLoggedIn = true
const temperature = 41

// if(temperature === 41){
//     console.log("Less than 50");
// }else{
//     console.log("Temperature is greater than 50");
// }
// console.log("Executed");

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);

// const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("Less than 500");
// }else if(balance < 750){
//     console.log("Less than 750");
// }else if (balance < 900) {
//     console.log("Less than 900");
// }else{
//     console.log("Less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false 
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In");
}

// const month = 3
// if (month == 1) {
//     console.log("Januray");
// }
// else if (month == 2) {
//     console.log("Fenruary")
// }
// else if (month == 3) {
//     console.log("March");
// }
// else if(month == 4){
//     console.log("April")
// }
// else{
//     console.log("There is no month");
// }