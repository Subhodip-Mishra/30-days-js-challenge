// Activity 1:
// Task 1:
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const testCases = [0, 1, 3, 4, 5, 6, 7];

testCases.forEach(test => {
    console.log(`Factorial of ${test} is ${factorial(test)}`)
})

// Task 2:
function fibonacci(n) {
    if (n === 0) {
        return 0
    }

    if (n === 1) {
        return 1
    }

    return fibonacci(n - 1) + fibonacci(n - 2)
}

const newtest = [1, 2, 3, 4, 5, 6, 7]

newtest.forEach(testcase => {
    console.log(`Factorial of ${testcase} is ${fibonacci(testcase)}`)
})

// Task 3:
function sumArray(array) {
    if (array.length === 0) {
        return 0
    }

    return array[0] + sumArray(array.slice(2))
}

const originalArray = [1, 2, 3, 4, 3, 7]
const newArray = originalArray.slice(1)

console.log("Original array: ", originalArray)
console.log("New array: ", newArray)
console.log("sum of all array:", sumArray(originalArray))

console.log('\n')
// Task 4:
function findMax(arr) {
    if (arr.length === 1) {
        return arr[0]
    }

    const maxOfrest = findMax(arr.slice(1))

    return arr[0] > maxOfrest ? arr[0] : maxOfrest;
}

const testCases1 = [
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [-1, -2, -3, -4, -5],
    [100, 2, 300, 4, 50],
    [7]
];

testCases1.forEach(testcase => {
    console.log(`Maximum number of [${testcase}] is ${findMax(testcase)}`)
})

console.log("\n")
// Activity 3:
// Task 5:
function reverseString(str) {
    if (str === "") {
        return "";
    }

    return reverseString(str.slice(1)) + str[0];
}

const testString = ["Chai", "aur", "code", "mam"]

testString.forEach(str => {
    console.log(`Reverse of ${str} is ${reverseString(str)}`)
})

// Task 6:
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }

    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, -1));
    }

    return false;
}

const testPalindromes = ["racecar", "madam", "hello", "level", "world"];

testPalindromes.forEach(testStr => {
    console.log(`Is "${testStr}" a palindrome? ${isPalindrome(testStr)}`);
});

// Activity 4:
// Task 7:
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    if (arr[mid] > target) {
        return binarySearch(arr, target, start, mid - 1);
    }

    
    return binarySearch(arr, target, mid + 1, end);
}


const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const targets = [3, 7, 13, 2];

targets.forEach(target => {
    console.log(`Index of ${target} in array is ${binarySearch(sortedArray, target)}`);
});

// Task 8:
function countOccurrences(arr, target) {
    if (arr.length === 0) {
        return 0;
    }

    const countInRest = countOccurrences(arr.slice(1), target);
    return arr[0] === target ? 1 + countInRest : countInRest;
}

const array = [1, 2, 3, 2, 4, 2, 5];
const targetsForCount = [2, 3, 6];

targetsForCount.forEach(target => {
    console.log(`Occurrences of ${target} in array is ${countOccurrences(array, target)}`);
});

// Activity 5:
// Task 9:
class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}

function inOrderTraversal(node){
    if(node === null){
        return;
    }

    inOrderTraversal(node.left)

    console.log(node.value)

    inOrderTraversal(node.right)
}

const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.right = new TreeNode(3)
tree.left.left = new TreeNode(4)
tree.left.right = new TreeNode(5)

inOrderTraversal(tree)

// Task 10:
function claculateDepth(node){
    if(node === null){
        return 0;
    }

    const leftDepth = claculateDepth(node.left)
    const rightDepth = claculateDepth(node.right)

    return Math.max(leftDepth, rightDepth) + 1
}

const rootForDepth = new TreeNode(1)
rootForDepth.left = new TreeNode(2)
rootForDepth.right = new TreeNode(3)
rootForDepth.left.left = new TreeNode(4)
rootForDepth.left.right = new TreeNode(5)
rootForDepth.left.right.left = new TreeNode(6)

console.log(`Depth of the binary tree is ${claculateDepth(rootForDepth)}`)