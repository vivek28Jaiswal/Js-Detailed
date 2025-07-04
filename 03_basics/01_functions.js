//jab hum func ki defination banate hai to jo bhi hum input lete h usey parameter bolte hai

// function addTwoNumbers (num1, num2){
//     console.log(num1 + num2); 
    
// };

// function addTwoNumbers (num1, num2){
//     let result = num1 + num2;
//     return result; 
    
// };

function addTwoNumbers (num1, num2){
    return num1 + num2;     
};
let result = addTwoNumbers(13, 10); //arguments yahan value pass krni hai
// console.log("result is", result);

function shoppingMessage (username){
    if (!username){
        console.log("Please enter a username");
        return
    } else{
        return (`${username}, Thank you for your purchase!`)
    }
}

// console.log(shoppingMessage("UB"));

// (!username) and (username === undefiend) both are same

function calculateCartPrice (val1, val2, ...num){
    return num
}

// console.log(calculateCartPrice(100, 200, 400, 700))
// (...numb) The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

const username = {
    name: "Mohit",
    price: "2999Rs"
}
function objectHandle (anyobject){
    return (`${anyobject.name} thank you for shopping, your bill is ${anyobject.price}`);
    // return
}

console.log(objectHandle(
    {
        name: "Ron",
        price: "30,0000"
    }
)); 
//func ko call krne ke time bhi hum obj de sakte hai

const newArray = [200, 300, 400, 500]

function reutnArrayIndex (getArray){
    return getArray[2]
}

// console.log(reutnArrayIndex(newArray));
// console.log(reutnArrayIndex([10, 20, 30, 40]));
