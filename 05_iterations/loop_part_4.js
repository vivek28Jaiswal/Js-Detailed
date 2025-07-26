//this is fatarrow function 
//using forEach loop

let companyWorkers = ['Ajay', 'Avinash', 'Arjun', 'Nikhil'];

// companyWorkers.forEach((workers) => {
//     console.log(workers + " junior");   
// });

companyWorkers.forEach(function(item){
    // console.log(item + " is Promoted");
    
})

function printME(item){
    // console.log(item);
} // kuch nhi kr raha ye function

// companyWorkers.forEach(printME)

companyWorkers.forEach((items, index, arr)=>{
    // console.log(items, index, arr);
})

let users =[
    {
        username: 'Roshan',
        age: 24
    },
    {
        username: 'Mohit',
        age: 34
    },
    {
        username: 'Lucy',
        age: 20
    },
]

users.forEach( (item) => {
    // console.log(item.age);
})

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// filter array ki  value ko return karwata hai jo ki given condition se match ho jati hai tab
const newNumbers = numbers.filter( (num) => {
    return num >= 5;
})

// console.log(newNumbers);

let storingNumbers = []
numbers.forEach( (items)=> {
    if( items >= 5){
        storingNumbers.push(items)
    }
})

// console.log(storingNumbers);

// leetcode question
// function helloWorld (){
//     function newFunction (){
//         console.log('Hello world!');
//     }
//     newFunction();
// }
// helloWorld();

// let nums = [2,7,11,15];
// let target = 9;
// if(nums[0] + nums[1] == target){
//     console.log(nums);
// };

let employe = [
  {
    "username": "Abhay",
    "roles": "SDE",
    "monthlySalary": 8000,
    "location": "San Francisco",
    "age": 22
  },
  {
    "username": "Xavi",
    "roles": "designer",
    "monthlySalary": 6500,
    "location": "New York",
    "age": 17
  },
  {
    "username": "Charlie",
    "roles": "designer",
    "monthlySalary": 7200,
    "location": "Seattle",
    "age": 28
  },
  {
    "username": "Drek",
    "roles": "SDE",
    "monthlySalary": 9000,
    "location": "Austin",
    "age": 32
  }
]

let employeDetails = employe.filter( (val)=> {
    return val.roles == "designer" && val.age >= 20;
})

// console.log(employeDetails);

let nums = [11, 12, 13, 14, 15, 16, 17, 18];
let addednums = nums.map( (val)=> {
     return val + 10;
}) 

// console.log(addednums);


