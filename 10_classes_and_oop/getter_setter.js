class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this.iemail.toUpperCase()
    }

    set email(value) {
        this.iemail = value
    }

    get password() {
        return `${this.ipassword} vijay`

    }

    set password(value) {
        this.ipassword = value
    }
}

const vijay = new User('h@vijay.ai', 'hello')
console.log(vijay.password)
console.log(vijay.email)