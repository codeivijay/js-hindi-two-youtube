/* let myName = "vijay       "

//console.log(myName.length)
console.log(myName.trueLength()) */

let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.vijay = function() {
    console.log(`vijay is present in all objects`)
}

Array.prototype.vivek = function() {
    console.log(`Hey i am vivek`)
}
// heroPower.vijay()
// myHeros.vijay()
// myHeros.vivek()
// heroPower.vivek()

// Inheritance 

const User = {
    name: "chai",
    email: 'chai@google.com'
}


const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeacherSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeacherSupport, Teacher)

let anotherUserName = "ChaiAurCode       "

String.prototype.trueLength = function() {
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUserName.trueLength()
'vijay'.trueLength()
'icetea'.trueLength()