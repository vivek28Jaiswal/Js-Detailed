const shopOwner = new Object()  //Singleton
// console.log(shopOwner);

const shopOwnerWife = {}       //Non-Singleton
// console.log(shopOwnerWife);

const Hogwarts = {
    houseOwner: "Ron Wiseasly",
    houseWife: "Hermoine",
    ownerFriend : {
        name: "Harry",
        lastname: "Potter",
        isSchoolMate: true,
        mothername: {
            name: "Lily",
            lastname: "Potter",
            isalive: false,
            causeofDeath: "Secret"
        }

    }  

}

// nested objects, object ke ander objects banana
// console.log(Hogwarts.ownerFriend.mothername.causeofDeath);

// add multiple objects

const obj1 = {
    userOne: "akash",
    userTwo:  "vikash",
    userThree: "Rahul",
}
const obj2 = {
    parentOne: "Mrs Moksha",
    parentTwo:  "Mrs Sonam",
    parentThree: "Mr Raghuveer",
}

// const obj3 = Object.assign({}, obj1, obj2) //two or more than two objs ko jodne ke liye object.assign() method ka use krte hai and {} curly brackets as a target liya jata hai and obj1,obj2 as a source if we dont use {} than obj will be modified.
const obj3 = {...obj1, ...obj2} //easy and most used way to combine obj by spread operator ✅✅
// console.log(obj3);

//ARRAY OF OBJECTS

const students = [
    {
        name: "Mahira",
        age: 30,
        collegename: "PVMP"
    },
    {
        name: "Mohit",
        age: 28,
        collegename: "GBSSS"
    },
    {
        name: "Vikash",
        age: 18,
        collegename: "GBSSS"
    },
    {
        name: "Tanu",
        age: 20,
        collegename: "MVP"
    },
]

// console.log(students[0].collegename); //note: array of object of access krne ke liye first hume array name then square brackets use krna hota hai uske ander jo arr of obj chahiye uska index number dalna hota hai fir dot notation then jo chahiye wo like age,mail etc

// console.log(Object.keys(Hogwarts)); //only obj ke keys ko access krne ke liye jo return krega jo array ke form me
// console.log(Object.values(Hogwarts)); //only value ko access krne ke liye jo return krega jo array ke form me
// console.log(Object.entries(Hogwarts)); //har key and value ko array bana diya jata hai
// console.log(Hogwarts.hasOwnProperty("ownerFriend", "mothername")); // check kr skte hai property exist krti bhi hai ya nhi koi obj me

const course = {
    coursename : "Bachelor of Computer Application",
    coursefee: "1,20,000 INR",
    courseduration: "3 years",
    isStudyMaterialAdded: false,
    courseInstructor: "Vivek Kumar"
}

const {coursefee} = course;
const {coursefee : fee} = course; //sort kar skte name ko destructure.
console.log(`Bca course fee is ${fee}`); 

// API | JSON format

{
    //this is api looks like 
}

{
    "name" : "Random", //api just like objects bas uska koi variable name nhi hota and keys as a string trat hoti 
    "course" : "Bsc",
    "gender" : "male",
}

// this is also a api its format is array of object
[
    {},
    {},
    {},
]