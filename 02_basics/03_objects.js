// singleton
//Object.create - this is singleton

// Objec literals
const mySym = Symbol("key1")
const JsUser = {
    name: 'vijay',
    age: 18,
    "full name": "vijay Singh Diggi",
    [mySym]: "myKey1",
    location: 'chakradharpur',
    email: "vijay@gmail.com",
    isLoggedIn : true,
    lastLoginDays: ['Monday', 'Tuesday']

}


// console.log(JsUser.email)
// console.log(JsUser['email'])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


JsUser.email = "chat@gmail.com"
// console.log(JsUser.email)
//Object.freeze(JsUser)
JsUser.email = "vijay@mirrosoft.com"
// console.log(JsUser);
// console.log(JsUser.email);


JsUser.greeting = function() {
    console.log("Hello Js User");
}
JsUser.greetingTwo = function() {
    console.log(`Hello Js User ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())