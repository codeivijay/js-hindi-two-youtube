// Dates
let myDate = new Date()

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())
// console.log(myDate.getTimezoneOffset())

let myCreateDate = new Date(2023,0, 23)
// console.log(myCreateDate.toDateString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
//console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())

let h = newDate.toLocaleString('default', {
    weekday: "long",
   
})

console.log(h.weekday)




