let temperature = 51

// if(temperature <= 50){
//     console.log('temperature is less than 50');
// } else {
//     console.log('temperature is greater than 50');
// }

//Comparison Operators
// <, >, =, ==, ===, <=, >=, !=, !== 

// let score = 300;
// if(score < 200) {
//     let power = "Bunge gum";
//     console.log(`your power is ${power}`);
// } else {
//     let powerTwo = "Shadow Summon";
//     console.log(`your power is ${powerTwo}`);
    
// }

// do not write this type of code
// let score = 600;
// if (score > 500) console.log("Clear level 1"), console.log("Got beginner title");

// let wantedBarries = 895
// if(wantedBarries < 250 ){
//     console.log("Criminal");
// } else if(wantedBarries < 500){
//     console.log("Level Secound Criminal");
// } else if (wantedBarries < 750){
//     console.log("Level Third Criminal");
// } else if (wantedBarries < 1200){
//     console.log("Most Wanted Criminal");
// }

// let username = "vivek"
// let userVerfied = true
// let paymentStatus = true
// let eligibilityCheck = false

// // && (AND) dono side ki value or condition true hona chahiye
// if (userVerfied && paymentStatus && eligibilityCheck){
//     console.log(`${username} can access course`);
// } else {
//     console.log(`${username} cannot access this course`);
    
// }

// || OR sign or Pipe sign
// dono me se koi ek condition true honi chahiye
let loggedInFromEmail = false
let loggedInFromFacebook = false
let guestUser = true

if(loggedInFromEmail || loggedInFromFacebook){
    console.log("user logged in");
} else if(guestUser){
    console.log("Welcome, Guest! Create your ReferBuddy account to enjoy full features.");
    
}