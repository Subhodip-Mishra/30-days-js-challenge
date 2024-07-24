// Activity 1:
// Task 1:
function throwNewError() {
    throw new Error("This is an error")
}

try {
    throwNewError()
} catch (error) {
    console.error('An error occurred ', error.message)
}

// Task 2:
function divideNumbers(numerator, denominator) {
    if (denominator == 0) {
        throw new Error("Cannot divide by zero")
    }
    return numerator / denominator
}

try {
    let result = divideNumbers(10, 511)
    console.log("Result", result)
} catch (error) {
    console.error("An error occurred ", error.message)
}

// Activity 2:
// Task 3:
function demoFunction() {
    console.log('This is a try catch block')
    throw new Error('This is an intentional error')
}

try {
    demoFunction()
} catch (error) {
    console.log('This is a catch block')
    console.log("An error occurred ", error.message)
} finally {
    console.log('This is a finally block')
}

// Activity 3:
// Task 4:
class customeError extends Error {
    constructor(message) {
        super(message)
        this.name = "Custome error"
    }
}


function throwCustomError() {
    throw new customeError("This is a custom error")
}

try {
    throwCustomError()
} catch (error) {
    if (error instanceof customeError) {
        console.error('Caught the custom error', error.message)
    } else {
        console.error('An error occurred ', error.message)
    }
}

// Task 5:
class CustomeError extends Error {
    constructor(message) {
        super(message)
        this.name = "validation error"
    }
}
function validates(input) {
    if (input.trim() === '') {
        throw new CustomeError("Input cannot be empty")
    }
    return 'Input is valid'
}

try {
    let result = validates("")
    console.log(result)
} catch (error) {
    if (error instanceof CustomeError) {
        console.error('Validation failed: ', error.message)
    } else {
        console.error('An error occurred ', error.message)
    }
}

// Activity 4:
// Task 6:
function getRandomPromise() {
    return new Promise((resolve, reject) => {
        const randomoutput = Math.random() > 0.5

        setTimeout(() => {
            if (randomoutput) {
                resolve("Promise resolve successfully")
            } else {
                reject("Promise rejected")
            }
        }, 1200);

    },)
}

getRandomPromise()
    .then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

// Task 7:
function RandomPromise() {
    return new Promise((resolve, reject) => {
        const randomoutput = Math.random() > 0.5

        setTimeout(() => {
            if (randomoutput) {
                resolve("Promise resolve successfully")
            } else {
                reject("Promise rejected")
            }
        }, 1500);

    },)
}

async function RandomPromise() {
    try {
        const result = await RandomPromise()
        console.log(result)
    } catch (error) {
        console.log('An error occurred', error.message)
    }
}
RandomPromise()

// Activity 5:
// Task 8:
function fetchDatafromInvalidUrl() {
    return fetch('https://invalid-url.example.com/data')
        .then(res => {
            if (!res.ok) {
                throw new Error('Http error')
            }
            return res.json()
        }).then(data => {
            console.log(data)
        }).catch(error => {
            console.error('An error occurred', error.message)
        })
}

fetchDatafromInvalidUrl()

// Task 9:
async function fetchData() {
    try {
        const result = await fetch('https://invalid-url.example.com/data')

        if (!result.ok) {
            throw new Error('Http error')
        }
        const data = await result.json()
        console.log("Data fetched successfully ", data)
    } catch (error) {
        console.error('An error occurred', error.message)
    }
}

fetchData()