const accountId = 2999;
let accountBalance = 1000;
var accountName = "Vivek";
accountCity = "Mumbai"
let accountType;

// accountId= 999; // This will throw an error because accountId is a constant or not allowed to change

accountBalance = 460;
accountName = "Vivek Kumar";
accountCity = "Delhi";

// console.log(accountName);
console.table([accountBalance, accountName, accountCity, accountType]);

/*
prefer not to use var, beause of issue in block scope & function scope.
Use let for variables that can change and const for constants.
*/