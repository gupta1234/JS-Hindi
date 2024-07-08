 const accountId = 144553
 let accountEmail = "saurav@google.com"
 var accountPassword = "12345"
 accountCity = "Jaipur"
let accountState;
// {} (Isko scope bolte hai)

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
//accountId = 3412434 Not allowed
 accountEmail = "saurav123@ss.com"
 accountPassword = "3223231"
 accountCity = "Mumbai"
 console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);