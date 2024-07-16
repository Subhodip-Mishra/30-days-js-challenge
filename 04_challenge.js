// Activity 1: 
// Task 1:

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// Task 2:
for (let i = 0; i <= 10; i++) {
    console.log(i * 5)
}

// Activity 2:
// Task 3:
let sum = 0
let i = 1;
while (i <= 10) {
    i += 1;
    sum += 1
    console.log(sum)
}

// Task 4:
let j = 10;
while (j >= 1) {
    console.log(j)
    j -= 1;
}

// Activity 3:
// Task 5:
let a = 1
do {
    console.log(a)
    a++;
} while (a <= 10);

// Task 6:
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers"
    }

    let result = 1;
    let i = 1;

    do {
        result *= i;
        i++
    } while (i <= n);

    return result
}

const number = 5
console.log(`Factorial of ${number} is ${factorial(number)}`)

// Activity 3:
// Task 7:
let rows = 5

for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '* ';
    }
    console.log(pattern);
}

// Activity 4:
// Task 8:

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// Task 9:
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}a