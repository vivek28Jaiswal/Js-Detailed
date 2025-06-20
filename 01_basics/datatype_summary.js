// Primitive data types in JavaScript

// Primitive data type me jo value hoti hai uski copy banayi jati hai direct main value ko nhi use kiys jata hai

// There are 7 types of primitive data types : String, Numbeer, Boolean, Null, Undefined, Symbol, BigInt

// const isLoggedIn = false;
// const outsideTemp = null;
// let marks = 74;
// let userName = "Vivek";
// let email = undefined;

// const Id = Symbol("123");
// // const anotherId = Symbol("123");

// let storedValue = Id;
// console.log(storedValue === Id); // but mai storedValue ko Id ke barabar kar sakta hu, kyuki storedValue me Id ki value hai

// console.log(Id === anotherId); // false, because symbols unique hote hai, just like classes React me

//Reference (Non Primitive) data types in JavaScript

// let animeCharacter = ["Luffy", "Zoro", "Nami"]; // Array

// let LuffysDetails = {
//     fullname: "Monkey D. Luffy",
//     age: 19,
//     work: "Pirate",
//     currentPosition: "Captain",
//     wanted: "1.5 Billion Berries",
//     isAlive: true,
// }; 

// console.log(LuffysDetails); // Object

// Array, Object, Function 

// console.log(typeof isLoggedIn); 

// let marksCalc = function(dets){
//     console.log("You got 72 marks in English");
// }

let NanCheck = NaN;
console.log(typeof NanCheck);
