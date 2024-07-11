// Primitive:- It is called (Call By Value).

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Symbol:- Kisi bhi value ko unique banane ke liye symbol use karte hai 

const score = 100         // Number print
const scoreValue = 100.5  // Number print

const isLoggedIn = false  // boolean
const outsideTemp = null  // Nothing any print
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 425435245235435435n 


// Non Primitive (Call By Reference)
// Array, Objects, Functions.

const arr = ["suresh", "ankit", "plinko"] // array declaration

let myObj = {
    name: "saurav",       // Object Declaration
    age: 24,
}

const myFunctio = function()
{
    console.log("Hello World!");  // Function Declaration
}

console.log(typeof outsideTemp);


// +++++++++++++++++++++++++++++++++++++++++++++++

//There are two types of memory:-
//  1. Stack Memory:- Stack is use all (primitive) data type
//  2. Heap Memory :- Heap is use for (Non-Primitive).

let myYoutubename = "sauravgupta.com"
let anothername  = myYoutubename
anothername = "guptasauarv123.com"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "saurav@gmail.com",
    upi: "user@ybl"
}
let userTwo  = userOne
userTwo.email = "gupta@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
