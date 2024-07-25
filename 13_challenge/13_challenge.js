const addNum = require('./mathModule')

// Activity 1:
// Task 1:
const num1 = 4;
const num2 = 200;
const sum = addNum(num1, num2)

console.log(`The sum of ${num1} and ${num2} is ${sum}`)

// Task 2:
const person = require('./personModule')

console.log(person.fullName());
console.log(person.greet())

// Activity 2:
// Task 3:
const { add, subtract, multiply, divide } = require('./multiple_function')

const num3 = 245
const num5 = 12

console.log(`Addition: ${num3} + ${num5} = ${add(num3, num5)}`)
console.log(`Subtraction: ${num3} - ${num5} = ${subtract(num3, num5)}`)
console.log(`Multiplication: ${num3} X ${num5} = ${multiply(num3, num5)}`)
console.log(`Ddivision: ${num3} / ${num5} = ${divide(num3, num5)}`)

// Task 4:

const add1 = require('./defualtexport')

const num6 = 5;
const num9 = 3;
const sum1 = add1(num6, num9);

console.log(`The sum of ${num6} and ${num9} is ${sum1}`);

// Activity 3:
// Task 5:
const myModule = require('./05task')

console.log('PI:', myModule.PI)
console.log('E:', myModule.E)

const sum2 = myModule.add(4,5) 
const difference = myModule.subtract(5, 3);
const product = myModule.multiply(5, 3);
const quotient = myModule.divide(5, 3);


console.log('Sum:', sum2);         
console.log('Difference:', difference); 
console.log('Product:', product);       
console.log('Quotient:', quotient);  

// Activity 4:
// Task 6:
const _ = require('lodash');

const array = [1, 2, 3, 4, 5];
const reversedArray = _.reverse([...array]); 

console.log('Original Array:', array);
console.log('Reversed Array:', reversedArray);

// Task 7:
const axios = require('axios')

async function fetchData(){
    try {
        const response = await axios.get('https://chaicode.com/')
        console.log("The response is ", response)
    } catch (error) {
        console.error('An error occured', error.message)
    }
}
fetchData()

// Acitivty 5:
// Task 8:
import { greet } from './module1';
import { farewell } from './module2';

const name = 'Suvodeep Mishra'

console.log(greet(name))
console.log(farewell(name))