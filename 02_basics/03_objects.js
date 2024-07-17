// singleton

// Object Literals

// Object.create // Constructor method

const mySym = Symbol("key1")


const Jsuser = { 
    name: "Saurav",
    "full name": "Saurav Gupta", // We  don't have to access for Console.log(Jsuser.full name)
    [mySym]: "myKey1",
    age: 19,
    location: "Jaipur",
    email: "saurav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "saurav@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "saurav@micro.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS User");
}

Jsuser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`); // $ sign is not working 
}

// console.log(Jsuser.greeting);  // output is:- [function (anonymous)]
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());

