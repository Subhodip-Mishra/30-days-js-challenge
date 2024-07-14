

//activity1: arithmatic operations

//task 1:
function add(a, b){
    return a + b;
}

let addition = add(3,5)
console.log(addition)

//task 2:
function sub(a, b){
    return a - b;
}

let subtract = sub(4, 5)

console.log(subtract)

//task 3:
function mul(a, b){
    return a * b;
}

let multiply = mul(3,5)
console.log(multiply)

//task 4:
function div(a, b){
    return a / b;
}

let division = div(3,5)
console.log(division)

//task 5:
function mod(a, b){
    return a % b;
}

let reminder = mod(3,5)
console.log(reminder)


// Activity2: Assignment operators

// Task 6:
let num = 5
num += 1
console.log(num)

// Task 7: 
let num1 = 5
num -= 1
console.log(num1)


// Activity3: Comparison Operators

// Task 8: 
let a = 10;
let b = 14;

if(a>b){
  console.log('a is greater than b')
}else{
    console.log('b is greater than a')
}

// Task 9: 
let c = 10;
let d = 12;
let e = 22;

if(c <= d){
    console.log('c is less than or equal to d')
}

if(c>=e){
    console.log('c is greater than or equal to e')
}

// Task 10: 
let num2 = 3
let num3 = '3'

if( num2 == num3){
    console.log('num2 is equal to num3')
}
if(num2 === num3){
    console.log('num2 is triple equal to num3')
}

let num4 = 3
let num5 = 3
if( num4 == num5){
    console.log('num2 is equal to num3')
}
if(num4 === num5){
    console.log('num2 is triple equal to num3')
}   

// Activity4: Logical Operators

// Task 11:
let age = 18
let isPassed = true

if(age && isPassed){
    console.log('You start this course')
}

if(isPassed || age){
    console.log('You are eligible for this course')
}

if(!isPassed){
    console.log('You are not eligible for this course')
}

// Activity5: Ternary Operator

// Task 14:
let age1 = 20
age1 >= 18 ? console.log("you can drive") : console.log("you can not drive")


// Feature Request:

// 1
let g = 12
let h = 14

console.log(g+h)
console.log(g-h)
console.log(g*h)
console.log(g/h)
console.log(g%h)

// 2
let j = 10

console.log(j+=1)
console.log(j-=1)

// 3
let check = 5
let check1 = -1

check > 0 ? console.log('This is positive number') : console.log("This is negative number")
check1 > 0 ? console.log('This is positive number') : console.log("This is negative number")

