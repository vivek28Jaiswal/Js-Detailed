// dates

let currentDate = new Date()
// console.log(currentDate.toString());              //Mon Jun 23 2025 12:01:04 GMT+0530 (India Standard Time)
// console.log(currentDate.toLocaleString());        //23/6/2025, 12:01:04 pm
// console.log(currentDate.toLocaleDateString());    //23/6/2025
// console.log(currentDate.toISOString());           //2025-06-23T06:31:04.881Z
// console.log(currentDate.toJSON());                //2025-06-23T06:31:04.881Z
// console.log(currentDate.toDateString());          //Mon Jun 23 2025
// console.log(currentDate.toTimeString());          //12:07:10 GMT+0530 (India Standard Time)

// let createdDate = new Date(2001, 11, 28)           //remember date start with always 0 index, means 0 = jan, 1 = feb, 2 = march....
// let createdDate = new Date(2001, 11, 28, 16, 30)      //new.Date(2001, 11, 28, 16, 30) so mujhe mera birth timing add krni thi me 4:30pm ko hua to is ko train timing ke hisab se set koya 16:30 means 4:30 pm      
// console.log(createdDate.toLocaleString());

let createdDate = new Date('2001-12-28');          // YYYY-MM-DD format me date liya
console.log(createdDate.toLocaleDateString());




