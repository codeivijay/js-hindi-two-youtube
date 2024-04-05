// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "12345";
tinderUser.name = "Sammy";
tinderUser.isLoggeIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vijay",
            lastname: "diggi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

// Optional Chaining

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

// const obj3 = {obj1, obj2}  
//const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

const user = [
    {
        id: 1,
        email: "@email"
    },
    {
        id: 2,
        email: "@vijay"
    }
]

// user[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggeIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

const navbar = () => {

}

navbar(company = "hitesh")

// json

// {
//     'name' : "hitesh",
//     'course': "js in hindi",
//     'price': "free"
// }