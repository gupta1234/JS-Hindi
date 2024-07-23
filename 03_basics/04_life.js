// Immediately Invoked Function Expressions (IIFE)

//  (function chai(){
//     console.log(`DB CONNECTED`)
// })();    // Semi-colon isliye lagaya hai koi ki pta nhi chalta ki wo kaha pr stop ho raha hai ya hoga....

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`)
// } )('saurav')

(function one (){
    console.log("DB Connect")
})();
( () => {
    console.log(`DB CONNECTED JJJ`);
} )()

