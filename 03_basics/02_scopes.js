// var a = 300
let b = 900

//if ke jo bhi likha hai wo hai block scope
//if ke bahar jo bhi hai jaise var a = 300 wo global scope hai
// var variable ke wajah se hi let,const laya gya cause var scope problem deta...
if (true) {
    var a = 10
    let b = 20
    const c = 30  

    // console.log("Inner Value:", b);
    
}

// console.log(a);
// console.log(b);
// console.log(b);
// console.log(c);

function one (){
    const name = "Vivek"
    function two (){
        let friendName = "Siddeshwar"
        // console.log(name);
    }
    // console.log(friendName);
    two()
    
}

one()

if(true) {
    let username = "Vivek "
    if(username){
        let surname = "Kumar"
        // console.log(username + surname);
    }
    // console.log(surname);
}

// console.log(username);

// ++++++++++++++ interesting ++++++++++++++

console.log(addone(10))
function addone (num){
    return num + 1
}
//we can assign arguments before func declaretion no error 

console.log(storedFunction(10))
let storedFunction = function addTwo (num){
    return num + 2
}

storedFunction(10)
//this is also a technique of making a func isme jo storedFunc me humne func ko assign kiya hai usey expression bolte hai and log nhi kr skte declare karne se pehle warna error throw krega
// Cannot access 'storedFunction' before initialization
//related to hoisting