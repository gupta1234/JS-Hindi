let a = 300

if (true) {
    let a = 10
    const b = 20
   // console.log("Inner: ", a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);
// console.log(b);

function one(){
    const username = "saurav"

    function two(){
        const website = "youtube"
       // console.log(username); // I have use this line because I have to see whether it is accessing the username or not
    }
   // console.log(website);
    two()
}
one()

if (true) {
    const username = "saurav"
    if (username === "true") {
        const website = " youtube"
       // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++ Intersting +++++++++++++

// console.log(addone(4));
// addone(4)
function addone(num){
    return num + 1
}
//    console.log(addone(4));

//addtwo(4)
const addtwo = function(num){
    return num + 2
}
// console.log(addtwo(4));