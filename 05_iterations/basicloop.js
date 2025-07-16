//for loop

for (let i = 0; i <=10; i++) {
    let number = i;
    if(number == 5){
        // console.log("number 5 is lucky number");
        
    }    
    // console.log(number);
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value ${i}`);
    for (let j = 1; j <= 10; j++){
        console.log(`Inner loop values ${j} and Outer loop ${i}`);
        
    }
}