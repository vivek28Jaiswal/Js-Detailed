// stack memory
// stack memory is used for static memory allocation jitni bhi primitives data types hain wo sab stack memory me store hote hain
// means ki variable ek copy banake stack memory me store hota hai

// heap memory
// heap memory is used for dynamic memory allocation jitne bhi reference data types hain wo sab heap memory me store hote hain
// means ki variable ek reference banake heap memory me store hota hai if hum kisi variable ko change karte hain to wo orignal value me bhi change  hota hai
 
// stack memory example
let profession = "artist";
let anotherProfession = profession;
anotherProfession = "developer";

console.log(profession);
console.log(anotherProfession);

// heap memory example
let rahulDetails = {
    name : "Rahul",
    age: 25,
    email: "rahulmehta@google.com"
}

let manishDetails = rahulDetails;
manishDetails.email = "manishmei@amazon.com";


console.log(rahulDetails.email);
console.log(manishDetails.email); 

// important note:
// manish and rahul ka mail same ho jayega kyuki original value me change ho raha hai isme koi copy nhi hoti directly ref or main se baat hoti hai

