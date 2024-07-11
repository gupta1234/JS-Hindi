const name = "saurav"
const repoCount = 40

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sauravv-vv-dss')   // we have to create string 

//  console.log(gameName[0]);
//  console.log(gameName.__proto__);

//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
//  console.log(gameName.charAt(2));
//  console.log(gameName.indexOf('t'));

 const newString = gameName.substring(0,4);
 console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   saurav   "
console.log(newStringOne);
console.log(newStringOne.trim());

 const url = "https://saurav.com/saurav%30gupta"
 console.log(url.replace('%30','-'));

 console.log(url.includes('sundar'));

 console.log(gameName.split('-'));