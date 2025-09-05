// let promiseOne = new Promise(function (resolve, reject) {
//   //do an async task
//   //DB call, cryptography etc
//   setTimeout(function () {
//     {
//       console.log("async task is completed");
//       resolve();
//     }
//   }, 2000);
// });

// promiseOne.then(function () {
//   console.log("im promise one");
// });

//promise two 👇👇

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('im task 2');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('im promise two')
// })

//promise three 👇👇

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: 'belly', age: 24, mail: 'example@example.com'})
//     }, 1000)
// })

// promiseThree.then(function(details){
//     console.log(details);
// })

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "vivek", age: 24, mail: "vivek@example.com" });
//     } else {
//       console.log("ERROR: somthing went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((dets) => {
//     console.log(dets);
//     return dets.username;
//   })
//   .then((user) => {
//     console.log(user); //uper wale then se dets.username ka parameter accept kiya current then me.
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() =>
//     console.log("ye chalega chahe promise resolved ho ya rejected")
//   );

let promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({
        brand: "apple",
        price: "76,000RS",
        model: "macbook m1",
        discount: "applied",
      });
    } else {
      reject("somthing went wrong check your apple pass");
    }
  }, 1000);
});

async function ConsumePromiseFive() {
  try {
    let response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
    
  }
}
// second way to get resolve and reject using async await
ConsumePromiseFive();

async function getAllUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = response.json()
  console.log(data);
}

// getAllUsers()

//fetch using then, catch, finally
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
  let data = response.json()
  return data;
})
.then((data) =>{
  data.forEach(user => {
    console.log(user.name)
  });
})
.catch((error) => console.log(error));                   