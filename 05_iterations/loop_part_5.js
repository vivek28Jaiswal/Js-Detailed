let nums = [11, 12, 13, 14, 15, 16, 17, 18];

//iif kisi values me kuch add krna ho using forEach so pehle ek empty var create krdo then push krke usme dalde jao
let storingNums = []; 
nums.forEach( (item)=>{
    storingNums.push(item + 10);
})

console.log(storingNums);
