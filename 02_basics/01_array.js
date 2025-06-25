const arr = [10, 20, 30, "Vivek", 50, false];
// console.log(arr);
// console.log(typeof arr[5]);

// let copyArr = new Array(1, 2, 3, "Snape", "Lily", true);  //new ek instance banata hai asaan sabdo me bole to copy and array ka type of object hai
// console.log(copyArr[3]);

// array methods
arr.push(101,102);  // array ke last me value add kr deta hai jo user provide krta hai it can be numbers,string,boolean vlaue
arr.pop()           // pop() method array ke last vlaue ko remove kr deta hai 
// arr.unshift("Mr.")  // unshift("added") method array ke first me given value add kr deta hai
// arr.shift()      // shift() method first value hata deta hai
// console.log(arr);

// console.log(arr.includes(true));

// let combineArr = [201, "mukesh", "raju", 403, "mohit", 679];
// let newArr = combineArr.join(); // sab array ko add kr deta hai and value jo provie krta hai wo string form me hoti hai
// console.log(typeof newArr);     

let arr1 = [12, 13, 24, 56, 88];
console.log(arr1.splice(1,3));  // splice() method range include krta hai exp 1,3 to wo include hoga and main array me se value gayab ho jayegi jo acess kiye 

let arr2 = [12, 13, 24, 56, 88];
console.log(arr2.slice(1,3));  // slice() method value include nhi karta and og array me koi fark nhi padega as it is rahega array apna





