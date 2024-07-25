const person = {
    firstname: 'Suvodeep',
    lastname: 'Mishra',
    age: 18,
    fullName(){
        return `${this.firstname} ${this.lastname}`
    },
    greet(){
        return `hello my name is ${this.fullName()} and I am ${this.age}`
    }
}

module.exports = person;