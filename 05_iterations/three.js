// for of

const arr = [1, 2, 3,4, 5, 6, 7]

for (const num of arr) {
/*     console.log(num) */
}

/* const greetings = "Hello World!"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
} */

// map

const map = new Map()

map.set('IN', "India")
map.set('Fr', "France")
map.set('USA', "United States of America")

/* console.log(map) */

for (const key in map) {
  console.log(key)
}

/* for (const [key, value] of map) {
    //console.log(key, ":-", value)
}
 */
/* const myObject = {
    'game': 'NFS',
    'game2': 'spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ":-", value)
}
 */
// for of loop is not interatable over object but it is iteratable over map and array


