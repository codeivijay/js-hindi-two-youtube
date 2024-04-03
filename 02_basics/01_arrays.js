// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ['shaktiman', 'naagraj']

const myArr2 = new Array(1, 2, 3, 4, 5)
myArr2.shift()
console.log(myArr2)

// const newArr = myArr.join()
// console.log(myArr)
// console.log(typeof newArr)

// slice , splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr)

const myn2 = myArr.splice(1,3) // splice manipulate original array
console.log(myn2)
console.log('C ',myArr)