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

// let number = 1;
// for ( let i = 1; i <= 100; i++) {
//     i % 5 === 0
// }