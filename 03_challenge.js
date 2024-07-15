// Activity 1:
// Task 1:
let num = 1
if (0 < num) {
    console.log("Number is positive")
} else if (num == 0) {
    console.log('Number is 0')
} else {
    console.log('Number is negative')
}
// Task 2:

let age = 18
if (18 <= age) {
    console.log('You are eligible for vote')
}
// Activity 2:
// Task: 3
function largest(a, b, c) {
    if (a > b) {
        if (a > c) {
            console.log(a + " is largest");
        } else {
            console.log(c + " is largest")
        }
    } else {
        if (b > c) {
            console.log(b + " is largest");
        } else {
            console.log(c + " is largest")
        }
    }
}

largest(2, 3, 1)

// Activity 3:
// Task 4:

switch (new Date().getDay()) {
    case 1:
        day = 'Monday'
        break;
    case 2:
        day = 'Tuesday'
        break;
    case 3:
        day = 'Wednessday'
        break;
    case 4:
        day = 'Thursday'
        break;

    case 5:
        day = 'Friday'
        break;
    case 6:
        day = 'Saturday'
        break;
    case 7:
        day = 'Sunday'
        break;
    default:
        break;
}

console.log(day)


// Task 5:
let score = 80
let grade;
switch (true) {
    case score >= 90:
        grade = 'A'
        break;
    case score >= 80:
        grade = 'B'
        break;
    case score >= 70:
        grade = 'C'
        break;
    case score >= 60:
        grade = 'D'
        break;
    case score >= 50:
        grade = 'E'
        break;
    default:
        grade = 'F'
        break;
}
console.log("The grade is" + grade)


// Activity 4:
// Task 6:
let checknumber = 4

checknumber % 2 === 0 ? console.log('Even') : console.log("Odd")

// Activity 5:
// Task 7:
function isLeapYear(year) {
    if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
        console.log("Input year: " + year, "is a leap year");
    } else {
        console.log("Input year: ", year, 'this is not leap year')
    }
}
isLeapYear(2024)

