// then and resolve has a default relation

const promiseOne = new Promise(function (resolve, reject) {
  // Do as async task
  // DB calls, cryptography, network

  setTimeout(() => {
    //console.log("Async task is complete")
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  //console.log("Promise Consumed")
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    //console.log("Async task Two")
    resolve();
  }, 1000);
}).then(function () {
  //console.log("Async 2 resolved")
});

// Promise Three

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Chai", email: "Chai@email.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// Promise four

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Vijay", password: "12345" });
    } else {
      reject("Error: Something went Wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  }).finally(() => console.log("The promise is either resolved or Rejected"))


  // Promise Five

  const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({username: "javascript", password: "1234567"})
        } else {
            reject('Error: JS went Wrong')
        }
    }, 1000);

  })

  async function consumePromiseFive() {
    
       try {
        const response = await promiseFive  
        console.log(response) 
       } catch (error) {
        console.log(error);
       } 
  }

  consumePromiseFive()

  // Extra Orinal bringing the Code

/*   async function getAllUsers() {
   try {
    const response = await fetch('https://api.github.com/users/codeivijay')
    const data =  await response.json()
    console.log(data)
   } catch (error) {
    console.log("E:", error)
   }
  }

  getAllUsers()
 */

  fetch('https://api.github.com/users/codeivijay')
  .then(function(response) {
    return response.json()
  })
  .then((data)=> {
    console.log(data)
  })
  .catch((error) => console.log(error))