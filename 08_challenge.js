// Activity 1:
// Task 1:
let name = 'Suvodeep'
let age = '20'

let text = `welcome ${name}, ${age}`
console.log(text)

// Task 2:
let multilinesText = `
My name is 
Suvodeep Mishra
I lived in wb
`
console.log(multilinesText)

// Activity 2:
// Task 3:
const number = [1, 2, 3, 4, 5, 6]

const [num1, num2, num3, num4, num5, num6] = number

console.log([num1, num2, num3, num4, num5, num6])

// Task 4:
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Novel"
  };
  
const { title, author } = book;

console.log(`Title: ${title}, Author: ${author}`);

// Activity 3:
// Task 5:
let originalArray = [1,2,3,4,5,6]
let anotherArray = [7,8]

let newArray = [...originalArray, ...anotherArray]

console.log(newArray)

// Task 6:
function sum(...number){
    return number.reduce((total, number) => total + number, 0)
}

const result1 = sum(1, 2, 3)
const result2 = sum(4, 5, 6)
const result3 = sum(7, 8, 9)

console.log(result1)
console.log(result2)
console.log(result3)

// Activity 4:
// Task 7:
function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(3,5))
console.log(multiply(5))

// Task 8:
const name1 = 'Suvodeep Mihsra'
const age1 = 18

const person = {
    name1,
    age1,

    greet(){
        console.log(`Hello my name is ${this.name1} and i'm ${this.age1} years old`)
    },

    getInfo(){
        return `Name: ${this.name1} , Age: ${this.age1}`
    }
}
console.log(person)

// Task 9:
const key = 'dynamicKey';
const value = 'dynamicValue';

const obj = {
  [key]: value
};

console.log(obj);