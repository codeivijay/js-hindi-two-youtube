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

// const obj3 = {obj1, obj2}
const obj3 = Object.assign(obj1, obj2)

console.log(obj3)