class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username : ${this.username}`)
    }

    static createId() {
        return `123456`
    }
}

const vijay = new User("vijay")

//console.log(vijay.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone@gmail.com")
iphone.logMe()
console.log(iphone.createId())