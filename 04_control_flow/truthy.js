// const userEmail = "saurav@gmail.com"
const userEmail = []

if (userEmail) {
    console.log("Got user email");
}
else {
    console.log("Don't have user email");
}

// Falsy Values:- false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values:- "0", "false", " ",[], {}, function(){}:- Empty Function,

// if (userEmail.length === 0) {
//     console.log("Array is Empty");
// }

const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = null ?? 10
val1 = null ?? 10 ?? 15


console.log(val1);

// Terniary Operator 

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less Than 80") : console.log("More Than 80");