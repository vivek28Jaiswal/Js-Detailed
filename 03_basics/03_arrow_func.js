let user = {
    username: "Vivek",
    enrollFee : 999,
    
    welcomeMessage(){
        console.log((`Hey, ${this.username} Welcome`));
        console.log(this);
        
    }
}

// user.welcomeMessage();
// user.username = "Mrunal thakur"
// user.welcomeMessage();
// console.log(this);

// function color (){
//     favColor = "Black"
//     console.log(this.favColor);
    
// }

// color()


function color (){
    let username = "PostPie"
    console.log(this.username);
    
}

// color()

//ES6 arrow func aya
//note func me this undefiend show krta hai
//note if func ke ander curly braces hai to return likhna hoga
//note if func implicit return me likha gya hai to curly braces hata dena hai same isme bhi no need  to write return
//note and parentheses () me likha to return use krna nhi padega  

let closeFriend = ()=>{
    let friendname = "Sam";
    console.log(this.friendname);
}

// closeFriend()

// let addTwoNum = (num1, num2) => {
//     return num1 + num2;
// }
// let addTwoNum = (num1, num2) => num1 + num2;
// let addTwoNum = (num1, num2) => (num1 + num2)
let addTwoNum = (num1, num2) => ({name: "UB", age: 24})


console.log(addTwoNum());
