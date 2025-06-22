// let studentId = 1234567890;
// console.log(studentId);

// let newID = new Number(studentId);
// console.log(newID);

// let newstringID = new String(studentId);
// console.log(newstringID);

braceletPrice = 440.989898777;

// console.log(braceletPrice.toString().length); 
// console.log(braceletPrice.toFixed(2));

// console.log(braceletPrice.toPrecision(4));

const hundred = 10000;
// console.log(hundred.toLocaleString('en-IN'));

// ++++++++++++++++ Maths ++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-10)); // Absolute value, returns positive value always
// console.log(Math.round(4.2)); // Rounds to nearest integer means roundoff kr deta hai value ko
// console.log(Math.ceil(4.1)); // Rounds up to the next integer
// console.log(Math.floor(4.9)); // Rounds down to the previous integer
// console.log(Math.orderMax(10, 20, 30, 40, 50));

// console.log(Math.random());
// let storedValue = ((Math.random()*10)+ 1); // 10 use for not getting 0 value and +1 for if any chance we got 1.034555 so avoiding this thing we used +1
// let finalValue = storedValue;
// console.log(finalValue);


// function checked(){
//     let storedValue = (Math.floor(Math.random()*10)+ 1); // 10 use for not getting 0 value and +1 for if any chance we got 1.034555 so avoiding this thing we used +1
//     let finalValue = storedValue;
//     console.log(finalValue);
//     console.log("working?");
// };

// checked();

let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// explanation 
// so math.floor use hua hai round of krne ke for example 6.9 hai to 6 dega round off krke
// math.random hume ek random value provide krta hai between 0-1 ke bich
// * (max - min + 1) use is liye kiye hai ki hume value jo chahiye wo 10 to 20 ke bich rahe aur sabko random k sath * (multiply) is liye kr diya value 0 me na mile warna floor roundoff krke 0 kr dega wo hume nhi chahiye we need 1 to aage ki value
// and end me + min ka use is liye kiya ki kyuki hume 10 to 20 ke bich hi number chahaiyee






