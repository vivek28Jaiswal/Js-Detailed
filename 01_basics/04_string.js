let userName = "Vivek-kumar-jaiswal";
// const userAccountBalance = 100;
// let friend = "Siddeshwar";

// console.log(userName + " has " + userAccountBalance + " in his account.");

// Template literals `${}`
// console.log(`${userName} has ${userAccountBalance} rupees in his account and he want to share with ${friend} `);

// console.log(userName.charAt(3));
// console.log(userName.indexOf("a"));


// let newuserName = userName.substring(0, 5);
// console.log(newuserName);

// let newUserName2 = userName.slice(-6, 5);
// console.log(newUserName2);


// trim() method is used to remove the whitespace from both ends of a string
// let movieName = "    Harry Potter and the Philosopher's Stone   ";
// console.log(movieName);
// console.log(movieName.trim()); 

let onepieceUrl = "https://www.onepiece%berries.com/";
console.log(onepieceUrl.replace("%berries", "-anime"));

// includes() method is used to check if a string contains a specific substring, gives True or False
console.log(onepieceUrl.includes("picaso?"));

// split() method is used to split a string into an array of substrings based on a specified separator
console.log(userName.split('-'));
