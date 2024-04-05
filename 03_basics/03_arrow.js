const user = {
    username: "vijay",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "vivek"
// user.welcomeMessage()

// console.log(this)

// function chai() {
//     let username = "vijay"
//     console.log(this.username)
// }
// chai()

// const chai = function() {
//     let username = "vijay"
//     console.log(this.username)
// }

// chai()
const chai = () => {
    let username = "vijay"
    console.log(this)
}

//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2

// }
// const addTwo = (num1, num2) =>(num1 + num2)

const addTwo = (num1, num2) => ({username: "vijay"})

console.log(addTwo(2, 8))

// const myArray = [2, 7, 8, 5, 7, 9]

// myArray,forEach()