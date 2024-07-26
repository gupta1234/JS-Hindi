// for of 

// ["", "", ""]   // for array declaration
// [{}, {}, {}]   // for array in object declaration

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
   // console.log(i);
}

const greetings = "Hello World!"
for (const i of greetings) {
    // if (i === ' ') {
    //     continue;    // Skip Space
    // }
    // console.log(`Each char is ${i}`);
}
// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, Value] of map) {
    // console.log(key, ':-', Value);
}

const myObject = {
    game1: "BGMI",
    game2: "Candy"
}
// for (const [key, Value] of myObject) {
//     console.log(key, ':-', Value);
// }