// Activit 1:
// Task 1:
class Person {
    constructor(firstName, lastName, name, age) {
        this.name = name;
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;

    }

    getGreeting() {
        return `Hello my name is ${this.name}and I am ${this.age} years old.`
    }

    updateAge(newAge) {
        this.age = newAge
        console.log(`Age updated to: ${this.age}`)
    }
    static staticGreeting() {
        return `Hello from the static method`
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName){
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName || ''
        this.lastName = lastName || ''
    }

        
}

const person2 = new Person('Suvodeep', 'Mishra', 18)

console.log(person2.getGreeting())

// Task 2:

person2.updateAge(19)

// Activity 2:
// Task 3:
class Student extends Person {

    static studentCount = 0;
    constructor(name, age, studentId) {
        super(name, age)
        this.studentId = studentId
        Student.studentCount++
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`
    }

    getGreeting() {
        return `Hello my name is ${this.name}, I am ${this.age} years old, my student Id is ${this.studentId}`
    }

    static getStudentCount() {
        return `total number of student: ${this.studentCount}`
    }




}

const studentId = new Student('Suvodeep Mishra', 18, 'S123456')

console.log(studentId.getStudentId())

// Task 4:
const student1 = new Student('Suvodeep Mishra', 18, 'S12121')
console.log(student1.getGreeting())

// Activity 3:
// Task 5:
const staticGreeting = Person.staticGreeting()

console.log(staticGreeting)

// Task 6:
const student2 = new Student('Suvodeep Mishra', 18, 'S12121')
const student3 = new Student('John Smith', 20, 'S12627')
const student4 = new Student('John doe', 25, 'S12234')

console.log(Student.getStudentCount())

// Activity 4:
// Task 7:
const newPerson = new Person('Robert', 'Smith')

console.log(newPerson.fullName)

// Task 8:
person2.fullName = 'John Smith'

console.log(person2.fullName)

// Activity 5:
// Task 9:
class Account {
    #balance

    constructor(initialBalance){
        if (initialBalance < 0) {
            throw new Error('Initial balance cannot be negative.');
          }
        this.#balance = initialBalance
    }

    deposit(amount){
        if(amount <= 0){
            throw new Error('Deposit amount must be positive.');
        }
        this.#balance += amount
        console.log('In your account deposit:',this.#balance -+ amount)

    }

    withdraw(amount){
        if(amount <= 0){
            throw new Error('Withdrawal amount must be positive.');
        }

        if(amount > this.#balance){
            throw new Error('Insuficient Funds')
        }

        console.log('From your account withdraw:',this.#balance -+ amount)
    }

    getBalance(){
        return this.#balance
    }
        
}

const myaccount = new Account(1000);

myaccount.deposit(500)

console.log(myaccount.getBalance())

myaccount.withdraw(200)

console.log(myaccount.getBalance())

// Task 10:
myaccount.deposit(500);
console.log('Balance after depositing 500:', myaccount.getBalance()); 

myaccount.withdraw(200);
console.log('Balance after withdrawing 200:', myaccount.getBalance());