function one() {
    const username = 'vijay'

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    // two()

}

// one()

if(true) {
    const username = "vijay"
    if(username === "vijay") {
        const website = "youtube"
        //console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)

// ++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++

console.log(addOne(5))
function addOne(num) {
    return num + 1
}


addTwo(7) // here comes the concept of hoisting
const addTwo = function (num) {
    return + 2
}
