// Activity 1:
// Task 1:
const str1 = "Javascript is a popular language. I love Javascript!";
const regex1 = /Javascript/g;
const matches1 = str1.match(regex1);
console.log(matches1);

// Task 2:
const str2 = "The year is 2024 and the time is 12:30.";
const regex2 = /\d/g;
const matches2 = str2.match(regex2);
console.log(matches2);

// Activity 2:
// Task 3:
const str3 = "JavaScript is Developed by Brendan Eich.";
const regex3 = /\b[A-Z][a-z]*\b/g;
const matches3 = str3.match(regex3);
console.log(matches3);

// Task 4:
const str4 = "The year is 2024 and the time is 12:30.";
const regex4 = /\d+/g;
const matches4 = str4.match(regex4);
console.log(matches4);

// Activity 3:
// Task 5:
const str5 = "(123) 456-7890";
const regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const matches5 = str5.match(regex5);
console.log(matches5); 

// Task 6:
const str6 = "example@example.com";
const regex6 = /([^@]+)@([^@]+)/;
const matches6 = str6.match(regex6);
console.log(matches6); 

// Activity 4:
// Task 7:
const str7 = "Hello, this is a test. Hello again!";
const regex7 = /^\w+/;
const matches7 = str7.match(regex7);
console.log(matches7);
// Task 8:
const str8 = "This is a test string for Regex";
const regex8 = /\w+$/;
const matches8 = str8.match(regex8);
console.log(matches8);

// Acitvity 5:
// Taks 9:
const password = "Password123!";
const regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
const isValidPassword = regex9.test(password);
console.log(isValidPassword);
// Task 10:
const url = "https://www.example.com";
const regex10 = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
const isValidURL = regex10.test(url);
console.log(isValidURL);
    

