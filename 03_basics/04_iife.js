// Immediately Invoked Function Expression (IIFE)

(function chai() {
    // named iife
    console.log(`DB CONNECTED`)
})(); // also remember about the semi colon becaus it is very crucial

// ()() - first parentheses where we write the defination or code second one is for exectution
// why we writ iife - we use it beacuse sometimes we get into problem due to global scope so in order to avoid that we have to use iife, which is (IMMEDIATELY INVOKED FUNCTION EXPRESSION)

((name) => {
    console.log(`db connected ${name}`)
})("vijay")