const myNumbers = [1, 2, 3, 4, 5, 6]

/* const initial = 3;
const sumWithInitial = myNumbers.reduce ((accumulator, currentVal) => {
    console.log(`acc: ${accumulator} and currentVal: ${currentVal}`)
    return accumulator + currentVal

}, initial ) */

const myTotal = myNumbers.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal)

const shoppingCart = [
    {
        itemName : "Js Course",
        price: 299
    },
    {
        itemName : "DevOps Course",
        price: 999
    },
    {
        itemName : "MobileApp Android Course",
        price: 1999
    },
    {
        itemName : "Java Course",
        price: 599
    },

]

const priceToPay = shoppingCart.reduce((acc, item) => acc+item.price, 0 )

console.log(priceToPay)