// const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// const values = coding.forEach((code) => {
//     //console.log(code)
//     return code;
// })

// console.log(values)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* const newNums = myNums.filter((num) => {
    const n = num > 4
    return n
} ) */

const newNums = []

myNums.forEach((num) => {
if (num > 4) {
    newNums.push(num)
}
})
console.log(newNums)

