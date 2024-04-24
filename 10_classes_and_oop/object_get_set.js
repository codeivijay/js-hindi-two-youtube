const User = {
    _email: "vijay@google.com",
    _password: "abc",

    get email() {
        return this._email.toUpperCase()

    },

    set email(value) {
        this._email = value

    },

    get password() {
        return this._email.toUpperCase()

    },

    set password(value) {
        this._email = value

    }
}


const tea = Object.create(User)
console.log(tea.email)