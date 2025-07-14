let email = BigInt (0n); //false value

// if(email) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
    
// }

// falsy values 
// false, 0, -0, "", undefined, null, bigInt 0n, "", null, undefined, NaN

// truthy values
// "hello", 1, -1, [], {}, "0", true, BigInt(1), Symbol("symbol")

// if(email.length == 0){
//     console.log("email is empty");
// } else {
//     console.log("email is not empty");
    
// };

// const carSpecification = {
//     // brand: "Farari"
// }

// if (Object.keys(carSpecification).length === 0){
//     console.log("Object is empty");
// } else {
//     console.log("Object is not empty");
    
// }

// Nullish Coalescing Operator (??): null undefined
// Jab hume check karna hota hai ki koi value null ya undefined hai ya nahi, aur agar hai to uski jagah koi default (khud se value dena) value use karni hai.
let val1;
val1 = 5 ?? 10
val1 = 10 ?? 5
val1 = null ?? 5
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
// console.log(val1);

// Terniary Operator 
// Condition ? true : false

const laptopPrice = 80000;
laptopPrice <= 80000 ? console.log("mid level laptop") : console.log("high level laptop");