const name = "vijay"
const repoCount = 50


//console.log(name + repoCount + "Value")

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

const gameName = new String("hitesh")
// console.log(gameName[0]);
// console.log(gameName.__proto__)

// console.log(gameName.length);
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "   vijay    "
console.log(newStringOne.trim())

let url = 'https://chat.openai.com/c/55ab38a4-a16f-49bf-90a2-bf8%2016b45321b'
console.log(url.replace("%20","-"))
console.log(url.includes("chat"))
console.log(url.split("-")) // split returns array 
