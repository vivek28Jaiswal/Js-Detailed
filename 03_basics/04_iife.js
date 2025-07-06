//Immediately invoked Function Expressions (IIFE)
//note IIFE ka use func ko immediately execute krne k liye hota hai and kai bar global scope ke pollution se problem hoti hai usko hatake ke liye IIFE ka use hota hai

(function DBase(){
    //named IIFE
    console.log("DB IS CONNECTED");
})();

((name)=>{
    console.log(`YOU ARE CONNECTED ${name}`);    
})("Vivek");