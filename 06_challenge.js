// Activity 1:
// Task: 1

let arr = [1, 2, 3, 4, 5]
console.log(arr)

// Task 2:
let arr1 = [1, 2, 3, 4, 5]
let firstelement = arr1[arr1.length - 5]
let lastelement = arr1[arr1.length - 1]
console.log(firstelement)
console.log(lastelement)

// Activity 2:
// Task 3:
let arr2 = [1, 2, 3, 4, 5]
let newArr = arr2.push(6)
console.log(newArr);
console.log(arr2);

// Task 4:
let arr3 = [1, 2, 4, 5, 6, 7]
let newArr1 = arr3.pop()

console.log(newArr1)
console.log(arr3)

// Task 5:
let arr4 = ['Chai', 'ginger tea', 'coffe', 'green tea']
let shift = arr4.shift()
console.log(shift);
console.log(arr4);

// Task 6:
let arr5 = ['Chai', 'ginger tea', 'coffe', 'green tea']
let unshift = arr5.unshift("chai aur code")
console.log(arr5);

// Activity 3:
// Task 7:
let arr6 = [1, 2, 4, 5, 6, 7]

let double = arr6.map(e  => {
    return e * 2
})

console.log(double)

// Task 8:
let arr7 = [1, 2, 4, 5, 6, 7]
let evenNums = arr7.filter(e => e % 2 == 0)

console.log(evenNums)

// Task 9:
let arr8 = [1, 2, 4, 5, 6, 7]
let reduce = arr8.reduce((acc, ele) => acc+ele)
console.log(reduce)

// Activity 4:
// Task 10:
let arr9 = [1, 2, 4, 5, 6, 7]
for (let i = 0; i < arr9.length; i++) {
    console.log(arr9[i])
}

// Task 11:
let arr10 = [1, 2, 4, 5, 6, 7]
arr10.forEach(ele =>{
    console.log(ele)
})
console.log("\n")


// Activity 5:
// Takk 12:
let arr2d = [[1, 2, 3], [4, 6, 7], [8, 9, 10]];
for (let i = 0; i < arr2d.length; i++) {
    console.log(arr2d[i]);
}

console.log("\n")

// Task 13:
console.log(arr2d[1][2])