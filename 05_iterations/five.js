const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function(code) {
//     console.log(code)
// })

// coding.forEach((code) => {
//     console.log(code)
// })

/* function printMe (code) {
    console.log(code)
}

coding.forEach(printMe) */

/* coding.forEach((code, a, b, ) => {
    console.log(code, a, b, )
}) */

const myCoding = [
    {
     languageName : 'c++',
     langFileName: "cpp"
    },
    {
        languageName : 'Java',
        langFileName: "java"
    },
    {
        languageName : 'javaScript',
        langFileName: "js" 
    }
]


myCoding.forEach((code, index, arr) => {
console.log(code, index, arr)
})