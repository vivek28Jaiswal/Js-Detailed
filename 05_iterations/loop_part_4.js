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
const newNumbers = numbers.filter( (num) => {
    // return num >= 5;
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