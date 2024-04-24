/* // ES6

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}


const userOne = new User('UserOne', "userone@gmail.com", "12345")

console.log(userOne.encryptPassword())
console.log(userOne.changeUsername()) */


// Behind the scene

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}


User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}
User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const userTwo = new User('UserTwo', "usertwo@gmail.com", "12345780")

console.log(userTwo.encryptPassword())
console.log(userTwo.changeUsername())