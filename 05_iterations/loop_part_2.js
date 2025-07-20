let i = 0;
while(i <= 10){
    // console.log(`value of i is ${i}`);
    i = i + 2;
    
}
let arrIndex = 0;
let herosList = ['ironman', 'spiderman', 'batman', 'hulk', 'loki', 'thor'];
// console.log(`hey i am ${herosList[4]}`);

while(arrIndex < herosList.length){
    // console.log(`hey i am ${herosList[arrIndex]}`);
    arrIndex = arrIndex + 1;
}

// arrindex jiski value 0 assign ki hai
// and humare pass herolist hai joki ek array hai jisme values hai 
// ab humne arrIndex pe loop lagaya and loop me conditon dali ki (arrindex < herolist) hai to aage ka code execute ho jisme humne arr ki value print ki hai sab hero name ki 
// to loop tabtak chalega jabtak condition true hoti rahegi 

// do while loop isme pehle kaam hota hai badme condition check hoti hai, matlab ek bar value print hoti hi hoti hai

let username = 'vivek'
let initialScore = 10;
let finalScore = 10;
do {
    if(initialScore > false){
        // console.log(`${username} you are at gold league`); //if condtion match bhi na kare fir bhi ek bar value execute hogi terminal pe
    } else {
        // console.log(`${username} you are at silver league`);
    }
    initialScore++
} while (initialScore <= 10);