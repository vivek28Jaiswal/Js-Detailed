mySym = Symbol ("Love");

const employeOne = {
    "fullname": "Vivek",
    age: 24,
    location: "Delhi",
    email: "vivek@google.com",
    isLoggedIn: false,
    isLoginDays: ["Monday", "Staurday"],
    [mySym]: "Love the way you lie!",
}

console.log(employeOne.fullname); // correction we can access string using just keyname


// jo left side me hai "name", "age", "email" etc unhe keys/Property bolte and right side me unhe values "Vivek", "24" etc 
// object me jab keys banate to wo as a js usey string form me leta hai but show nhi krta

// console.log(employeOne.isLoggedIn); // step1 access krne ka tarika value ko
// console.log(employeOne["email"]);   // step2 access krne ka tarika value ko, kabhi kabhi object me keys string format me bhi user bana skta hai to step one se acess nhi le skte usey to step 2 hi use karna padega

// how to take symbole as ka key

mySym = Symbol ("Love");

const testing = {
    [mySym]: "Love the way you lie!", // [] square brackets lagane ke baad ab ye symbol ko refer krega, but fir bhi type of check krenge to string hi show krega kyuki key ke ander jo value hai wo ek string h but ke symbol hai
}

// console.log(testing[mySym]); // symbol ki key vlaue ko access krne ke liye square brackets hi lagana hota hai 
// console.log(typeof mySym);

employeOne.email = "vivek@boats.com"
// Object.freeze(employeOne); // freeze() method use  krne se ab koi value change nhi kr payega! object ki
employeOne.email = "vivekfr28@yahoo.com"
employeOne.age = 30
// console.log(employeOne);

//function

employeOne.greeting = function(){
    console.log("Hello, employee one");
    
};

employeOne.greetingTwo = function(){
    console.log(`Hello, ${this.name}, Thanks for joining Yahoo!, your company email is ${this.email}`); //this ka use object ke ander wali Property/keys ko acess krne ke liye use krte hai!
    
};


// console.log(employeOne.greeting);
// console.log(employeOne.greetingTwo());
employeOne.greetingTwo();
// console.log(greeting); // ye func ka bas refernce return krega not full function
// console.log(greeting());
