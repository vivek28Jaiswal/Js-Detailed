// For...of ek aisa loop hai jo kisi bhi iterable (jaise array, string, set, etc.) ke har ek value par chal kar usse ek-ek karke access karta hai.

let username= 'Weasily'
for (const user of username) {
    // console.log(`Every char is ${user}`);
}

let map = new Map();
map.set('INR', 'Indian Rupees');
map.set('USD', 'United states dollor');
map.set('Yen', 'Japanese currency');

// console.log(map.get('Yen'));

for (const [key, value] of map) {
    // console.log(key, '=', value);    
}

myObjects = {
    hi : "hello",
    ty : "thank-you",
    lol : "lots of laugh"
}

// for (const [key, value] of myObjects) {
//     // console.log(key, value); // myobjects is not iterable
// }

for (const key in myObjects) {
//    console.log(`${key} means ${myObjects[key]}`); //myObjects[key] ka matlab hai: "myObjects" object ke andar jis key ka naam abhi "key" variable me hai, uski value do.
   ;
}

let arr = ['js', 'ruby', 'cpp', 'threejs']
for (const key in arr) {
    // console.log(arr[key]); //using for ...in loop in arrays
}

let newMap = new Map();
newMap.set('dog', 'huskey');
newMap.set('cat', 'persian');
newMap.set('owl', 'potters owl ');

for (const key in newMap) {
    // console.log(key);   //map is not iterable in for...in
}
for (const [key, value] of newMap) {
    console.log(key, '=', value); //used for...in loop
}

// ++++++++++ notes ++++++++++
// newMap.set('cat', 'persian'); //set ek value hai jo allow krti hai unique type ki value ko store karwane ke liye isme duplicate values allow nhi hai
// objects ke ander loop lagane ke liye for... in ka use kr Sakte
// array me lagane ke liye for of 