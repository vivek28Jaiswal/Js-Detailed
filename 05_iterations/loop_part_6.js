let arr = [1, 2, 3, 4, 5, 6];
let initialValue = 0;

// let sumWithinitial = arr.reduce( (acc, currentval)=>{
//     // console.log(`acc value: ${acc} and currentval: ${currentval}`);
//     return acc + currentval;    //acc ki value initial user jo provide krega wo rahega then fir jo value add hoke suru me sum ayega usey next acc manega!
// }, 0)

// console.log(sumWithinitial);

let totalValue = arr.reduce( (acc, currentval) => (acc + currentval), 0)
// console.log(totalValue);


let shoppingCart = [
    {
        itemName: "tshirt",
        price: 399
    },
    {
        itemName: "pant",
        price: 1499
    },
    {
        itemName: "bag",
        price: 899
    },
    {
        itemName: "shoe",
        price: 1199
    },
]

let billToPay = shoppingCart.reduce( (acc, item)=> (acc + item.price), 0);
console.log(billToPay);
