const userEmail = "vijay@gmail.com"

if(userEmail) {
    console.log("Got User email")
} else {
    console.log("Don't have user email")
}


// ****** flasy value ****

// falsy , 0, -0, bigInt 0n, '', "" null, undefined, NaN

// ****** truthy value ****

// '0' or "0" - sting ke ander agar value hai tho wo truthy value hai
// 'false', " ", [], {}, function() {}

// if(userEmail.length === 0) {
//     console.log("Array is emty")
// }

const emptyObj = {

}

if(Object.keys(emptyObj).length === 0) {
    console.log("object is empty")
} // Object.keys returns Array

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10

//val1 = null ?? 10

//val1 = undefined ?? 15

val1 = null ?? 20 ?? 30

console.log(val1)

// Ternary operator

// condition ? true : false;

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Yes Price is more than 80 ") : console.log(" No it is less than 80")