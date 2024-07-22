const user = {
    username: "saurav",
    price: 999,

    welocmeMessage: function (){
        console.log(`${this.username}, Welcome to Website`);
       // console.log(this);
    }
}
// user.welocmeMessage()
// user.username = "abhi"
// user.welocmeMessage()
// console.log(this);

// function one(){
//     let username = "saurav"
//     console.log(this.username);
// }
// one()

// const one = function(){
//     let username = "abhi"
//     console.log(this.username);
// }
// one()

// const one = () => {  
//     let username = "abhi"
//     console.log(this);
// }
// one()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4, 4));

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "saurav"})

console.log(addTwo(4, 4));

// const addTwo = (num1, num2) => {
//     return username = "saurav"
// }

// console.log(addTwo(username));

// const getusername = () => {
//     return "saurav"
// }
// console.log(getusername());