function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero")
    }
    const result = a/ b
    return Math.round(result * 100) / 100
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
}
