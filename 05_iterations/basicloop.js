//for loop
for (let i = 0; i <=10; i++) {
    let number = i;
    if(number == 5){
        // console.log("number 5 is lucky number");
        
    }    
    // console.log(number);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value ${i}`);
    for (let j = 1; j <= 10; j++){
        // console.log(`Inner loop values ${j} and Outer loop ${i}`);
        
    }
}

let arr = ["ironman", "spiderman", "superman", "thor"];
// console.log(arr.length);
for(let i = 0; i < arr.length; i++){
    let storing = arr[i];
    // console.log(storing);        
}

// my task is printing even numbers like 2,4,6,8...
for(let i = 1; i <= 20; i++){
    if( i % 2 === 0 ){
        // console.log(`${i} is even number`);
    }
}

// Use a for loop to calculate the sum of all numbers from 1 to 50 and print the final result.
let sum = 0;
for( let i = 0; i <= 50; i++){
    sum = sum + i;
}
// console.log(sum);

// Store all numbers between 1 to 100 that are divisible by 5 in a variable

// let number = [];
// for ( let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         number.push(i); //arr ke end me value add kr deta hai push() method
//     }
// }
// console.log(number)

// let customerDetails = [
//   { username: "RiyaKapoor" },
//   { username: "YashGupta" },
//   { username: "NehaJoshi" },
//   { username: "KabirBansal" },
//   { username: "TanyaMishra" },
//   { username: "AdityaRana" },
//   { username: "PoojaAgarwal" },
//   { username: "VivaanShukla" },
//   { username: "SnehaSaxena" },
//   { username: "RahulSinha" }
// ]

// customerDetails.forEach(user => {
//     console.log(`hey ${user.username} how are you?`);  
// });

//break and continue

for(let i = 1; i <= 20; i++) {
    if( i == 5){
        // console.log(`favourite number detected`);
        break;
    }
    // console.log(`value of i is ${i}`);
    
}

//ek bar mistake ko ignore kiya jata hai, matlab ek bari condition ko skip kiya jata hai wo print nhi hota and break nhi krta chalte jata hai condition
for(let i = 1; i <= 20; i++) {
    if( i == 5){
        // console.log(`favourite number detected`);
        continue;
    }
    // console.log(`value of i is ${i}`);
    
}