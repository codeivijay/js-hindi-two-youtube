const user = {
    username: "vijay",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        //console.log("Got user details from database")
        //console.log(`Username: ${this.username}`);
        console.log(this)
    }


}

const user2 = {
    username: "vijay diggi",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function() {
        //console.log("Got user details from database")
        //console.log(`Username: ${this.username}`);
        console.log(this)
    }


}

//console.log(user.username)
//console.log(user.getUserDetails())
//console.log(this)

//const promiseOne = new Promise()

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

   /*  this.gretting = function() {
        console.log(`welcome ${this.username}`)
    }
     */
   
}

const userOne = new User("Vijay", 12, true)
const userTwo = new User("Chai aur Code", 18, false)

console.log(userOne.constructor)
console.log(userTwo)

