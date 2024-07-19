function name() {
    console.log("S");
    console.log("a");
    console.log("u");
    console.log("r");
    console.log("a");
    console.log("v");
    
}
// name()     // Name is a reference and ()brackets is a execution..

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(3,3)
// addTwoNumbers(3,"3")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)

function addTwoNumbers(number1, number2){

    //  let result = number1 + number2
    //  return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
    // if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Saurav"));
//  console.log(loginUserMessage("saurav"));

function calculateCartPrice(val1, val2, ...num1){
    //console.log(43);
    return num1
}
// console.log(calculateCartPrice(300, 400, 500,5455));

const user = {
    username: "saurav",
    prices: 344
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sameer",
    price:  499
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));