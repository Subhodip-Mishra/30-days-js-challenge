

// Activity 1: Vairable Declaration

// Task 1: Declare a variable using var , assign it a number, and log the value to the console.
var num = 1
console.log(num)

// Task 2: Declare a veriable using let, assign it a string, and log the value to the console.
let string = '30-days-JS-Challenge'
console.log(string)

// Activity 2: Constant Declaration
// Task 3: Declare a variable using const , assign it a boolean value, and log the value to the console.
const boolean = false
console.log(boolean);

// Activity 3: Data Types
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

let Roll = 1;
let name = 'Subhodip'
let isPassed = true;
let arr = [1, 'Subhodip', true];
let object = {
    username: "Subhodip Mishra",
    roll: 1,
    age: 18,
}

console.log("Roll NO: ", typeof Roll)
console.log("Name: ", typeof name)
console.log("isPassed: ", typeof isPassed)
console.log("arr: ", typeof arr)
console.log("object: ", typeof object)

// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console.

let check = 'js challenge'
console.log(check);

check = '30 days js challenge'
console.log(check);

// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.

const constant = 1;
console.log(constant);

// constant = 2
console.log(constant);
// constant = 2
//          ^
// TypeError: Assignment to constant variable.

// Feature Request:
// 1 . Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.


function featureRequest(req){
    console.log(req, ":", typeof req);
}

featureRequest(45)
featureRequest("30 Days javascript challenge")
featureRequest(true)
featureRequest(["hello", 'world'])
featureRequest({
    username: 'Subhodip',
    age: 18
})


// 2 Reassignment Demo:  Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.


let age = 15;
console.log(age);

age = 18
console.log(age);


const newAge = 16;
console.log(newAge);

// newAge = 17;
console.log(newAge);
// newAge = 17;
//        ^


// output:

// 1
// 30-days-JS-Challenge
// false
// Roll NO:  number
// Name:  string
// isPassed:  boolean
// arr:  object
// object:  object
// js challenge
// 30 days js challenge
// 1
// 1
// 45 : number
// 30 Days javascript challenge : string
// true : boolean
// [ 'hello', 'world' ] : object
// { username: 'Subhodip', age: 18 } : object
// 15
// 18
// 16
// 16