//const tinderUser = new Object()  // This a Singleton Object
const tinderUser = {}  // This is not a Singleton Object.

tinderUser.id = "53465"
tinderUser.name = "Sahil"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sahil@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sahil",
            lastname: "Khan"
        }
    }
}

// console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // Important // convert key, values to array.

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);

// const {courseInstructor} = course
// console.log(courseInstructor);
const {courseInstructor: instructor} = course
console.log(instructor);

const {price} = course
//  console.log(price)

// {
//     "name": "asasa",
//     "coursename": ".Net",    JSON Format
//     "price": "1200"
// }
[
    {},    // JSON Format for array
    {},
    {}
]