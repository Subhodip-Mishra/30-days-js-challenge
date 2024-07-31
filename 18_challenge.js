// Activity 1:
// Task 1:
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log("Sorted Array using Bubble Sort:", arr);
    return arr;
}

let array1 = [64, 34, 25, 12, 22, 11, 90, 120, 12];
bubbleSort(array1);

// Task 2:
function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    console.log("Sorted Array using Selection Sort:", arr);
    return arr;
}


let array2 = [63, 25, 12, 22, 11, 11.4];
selectionSort(array2);

// Task 3:
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== Math.floor(arr.length / 2)) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}


let array3 = [10, 7, 8, 9, 1, 5, 23];
let sortedArray3 = quickSort(array3);
console.log("Sorted Array using Quicksort:", sortedArray3);

// Activity 2:
// Task 4:
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log("Target found at index:", i);
            return i;
        }
    }
    console.log("Target not found");
    return -1;
}

let array4 = [2, 1, 4, 10, 30];
linearSearch(array4, 10);

// Task 5:
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            console.log("Target found at index:", mid);
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log("Target not found");
    return -1;
}

let array5 = [2, 3, 4, 10, 40];
binarySearch(array5, 10);

// Activity 3:
// Task 6:
function countOccurrences(str) {
    let charCount = {};
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    console.log("Character Counts:", charCount);
    return charCount;
}

let string6 = "Chai aur code";
countOccurrences(string6);
// Task 7:
function longSubstring(str) {
    let start = 0, maxLength = 0;
    let seenChars = new Map();

    for (let end = 0; end < str.length; end++) {
        if (seenChars.has(str[end])) {
            start = Math.max(seenChars.get(str[end]) + 1, start);
        }
        seenChars.set(str[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    console.log("Length of the longest substring without repeating characters:", maxLength);
    return maxLength;
}

let string7 = "abcdeab";
longSubstring(string7);
// Activity 4:
// Task 8:
function rotateArray(arr, k) {
    k = k % arr.length;
    let rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));
    console.log("Rotated Array:", rotatedArray);
    return rotatedArray;
}

let array8 = [1, 2, 3, 4, 5, 6, 7];
rotateArray(array8, 3);

// Task 9:
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    console.log("Merged Array:", mergedArray);
    return mergedArray;
}

let array9_1 = [1, 3, 5];
let array9_2 = [2, 4, 6];
mergeSortedArrays(array9_1, array9_2);
// Activity 5:
// Taks 10:
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log("Fibonacci sequence up to", n, ":", fib);
    return fib;
}
fibonacci(10);
// Task 11:
function knapsack(values, weights, capacity) {
    let n = values.length;
    let dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    console.log("Maximum value that can be obtained:", dp[n][capacity]);
    return dp[n][capacity];
}

let values = [60, 100, 120];
let weights = [10, 20, 30];
let capacity = 50;
knapsack(values, weights, capacity);
