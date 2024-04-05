function leeta() {
    console.log("v")
    console.log("i")
    console.log("j")
    console.log("a")
    console.log("y")
}

//leeta()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // return result
    //console.log("hitesh") // this will not get executed if it is written after return keyword, as by default function has a rule that after return keyword nothing gets executed
    return num1 + num2
}

const result = addTwoNumbers(2 , 4)

//console.log("result:", result)

function loginUserMessage(username = "Sam") {
    if(!username){
        console.log("Please enter username")
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Vijay"))
// console.log(loginUserMessage())

// when we how many aruguments are to be passed like shopping cart 

function calculateCartPrice(...num1) {
    return num1
    // here three dots(...) are called rest operator
}
// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "vijay",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)

}

// handleObject(user)
handleObject({
    username: "vijay",
    prices: 199
})

// Array

 const myArr = [200, 400, 700, 900]

 function returnSecondValue(getArray) {
    return getArray[3]
 }

 //console.log(returnSecondValue(myArr))
 console.log(returnSecondValue([200, 400, 500, 1000]))