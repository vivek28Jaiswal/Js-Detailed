let maleaAimeMC = ["Luffy", "Zoro", "Naruto", "Hiro", "Sanji"];
let femaleAnimeMC = ["Boa Hancock", "Nico Robin", "Hinata", "Zerotwo", "Nami"];

// let allFavMC = maleaAimeMC.push(femaleAnimeMC);
// console.log(allFavMC);  // if ye log krunga to 6 output ayega jo ki allfavMC ki array ki length de raha. means maleMc me 5 array hai and female ko as a one array leke chal raha
// // console.log(maleaAimeMC);
// // console.log(femaleAnimeMC);

// maleaAimeMC.push(femaleAnimeMC); //main array me push hoga no copy kyuki ye reference type (heap memory) hai, the reference is pushed not copy.
// console.log(maleaAimeMC); 

//concat() Method

// let allMC = maleaAimeMC.concat(femaleAnimeMC);  //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(allMC);

//spread() Method

let allnewMC = [...maleaAimeMC, ...femaleAnimeMC]; // value ko spread kr deta hai and iska jyada use hota hai compare to concat() isme koi limitation bhi nhi hoti kitne bhi array ko acces and spread krlo
// console.log(allnewMC);

const another = [12, 13, 14, [44, ["Govind", 20]]]; 
// console.log(another.flat(Infinity)); //flat() method basically concatented (link/join) krta hai more than two arrays ko and isme hum dept choose kr skte hai kitne array tak chahiye hume concat array

console.log(Array.isArray("Gon")); //questioning its this array or not
console.log(Array.from("Mahira")); // converted string or number into an array
console.log(Array.from({name: "Sam"})); // interesting ye confused ho jayega me pehele key ka array banau ya value ka! is liye ye ek empty array writen krega

let candidateOne = "Gaurav";
let candidateTwo = "Mukesh";
let candidateThree = "Sanjay";

console.log(Array.of(candidateOne, candidateTwo, candidateThree));
