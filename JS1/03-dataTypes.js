// Data Types 

// Primitive Data Types 
// #1 - String
let firstName = "vp";
let lastName = 'yadav';
let fullName = firstName + " " + lastName;

console.log(firstName);
console.log(lastName);
console.log(fullName);

// #2 - Number 
let num = 10.6;
console.log(num);

num = 10;
console.log(num);

// #3 - Boolean
let bool = true;
bool ? console.log("True") : console.log("False");

// #4 - Undefined
let x;
console.log(x);

// #5 - Null
let y = null;
console.log(y);

// Non - Primitive 
// #1 - Array 

let arr = [1, 2, 3, 4, 5];
console.log(arr);

arr = ['my','name','is','vp yadav'];
console.log(arr);
console.log(arr[0]);

// #2 - Object 

let obj = {
    "Name" : 'vp yadav',
    "Age" : 20
};

console.log(obj["Name"]);
console.log(obj["Age"]);
console.log(obj.Name);