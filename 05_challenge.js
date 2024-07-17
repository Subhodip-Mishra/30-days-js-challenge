// Activity 1:
// Task 1:
function check(number) {
    if(even % 2 == 0){
        console.log(`${number} is even`)
    }else{
        console.log(`${number} is odd`)
    }
}
// check(7)
// Task 2:
function calculateSqure(num){
   return num * num
}
console.log(calculateSqure(2))
// Activity 2:
// Task 3:
function maximum(a, b){
    return (a>b)? `${a} is maximum`: `${b} is maximum`
}
console.log(maximum(3,6))
// Task 4:
function concatetwostring(s1, s2){
    return s1 + " " + s2;
}
console.log(concatetwostring("Suvodeep", "Mishra")) 
// Activity 3:
// Task 5:
const sum=(a, b)=>{
    return a+b
}
console.log(sum(2, 4));
// Task 6:
const checkChar =((st, character)=>{
    return st.includes(character)
})
console.log(checkChar("suvodeep", 'e'));
// Activity 4:
// Task 7:
const product=((a, b=3)=>{
    return a+b
})
console.log(product(1))
// Task 8:
const greeting=(name, age=18)=>{
    return ([name, age])
}
console.log(greeting("suvodeep", 18))
// Activity 5:
// Task 9:
const su1=((a,b)=>{
    console.log(a+b)
  });
  let higherOrder = (func, num) => {
    for (let i = 1; i <= num; i++) {
      func(i, i); 
    }
  };
  higherOrder(su1,5);
// Task 10:
higherOrder(sum,5);
//Task 10:
let higherOrderFunc = (func1, func2, value) => {
  return func2(func1(value));
};
let func1 = (num) => {
  return num * 5;
};
let func2 = (num) => {
  return num * num;
};
console.log(higherOrderFunc(func1, func2, 5));