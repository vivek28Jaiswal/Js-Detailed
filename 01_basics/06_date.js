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
// console.log(createdDate.toLocaleDateString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(createdDate.getTime());

// console.log(Math.floor(Date.now()/1000)); // hume ms ko seconds me chahiye tha to hume 1000 se / kr diya
// Date.now() // ye method time dikhata hai in ms me and ye time 1 jan 1970 se abhi tak ki value dega in ms me like 1334534555 somthing jo ki har bar har sec change hoga


let newDate = new Date()
// console.log(newDate); //basically current date dikhayega!
// console.log(newDate.getDay() + 1); // get day basically day batata hai and +1 add is liye kiya jis se code index wala scene shot ho jaye! wo 0 se wala
// console.log(newDate.getHours());
// console.log(newDate.getFullYear());
// console.log(newDate.getUTCMonth() + 1);

let whatMonth = new Date();
console.log(`this is ${whatMonth.getUTCMonth() + 1} month`);







