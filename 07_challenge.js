// Activity 1:
// Task 1:
let bookProperties = {
    title: '30 Days challenge',
    author: 'Suvodeep Mishra',
    year: 2024
}

console.log(bookProperties)

console.log("\n")
// Task 2:
console.log(bookProperties.title)
console.log(bookProperties.author)

console.log("\n")
// Activity 2:
// Task 3:
bookProperties.getDetails = function () {
    return `${bookProperties.title} by ${bookProperties.author}`
}
console.log(bookProperties.getDetails())

console.log("\n")

// Task 4:
bookProperties.getUpdate = function (year) {
    bookProperties.year = year
    return `${bookProperties.title} by ${bookProperties.author} published on ${bookProperties.year}`
}

console.log(bookProperties.getUpdate(2023))

console.log("\n")

// Activity 3:
// Task 5:
let library = {
    name: "Books Store 1",
    books: [
        { title: '30 Days challenge', author: 'Suvodeep Mishra', year: 2024 },
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
        { title: '1984', author: 'George Orwell', year: 1949 },
    ]
}
console.log(library)

console.log("\n")


// Task 6: 
console.log(library.name);
console.log(library.books[0].title);
console.log(library.books[1].title);
console.log(library.books[2].title);
console.log(library.books[3].title);

console.log("\n")

// Activity 4:
// Task 7:
library.books.forEach(book => {
    book.getTitleAndYear = function(){
        return `Book title: ${this.title} and book year: ${this.year}`
    }
})

library.books.forEach(book => {
    console.log(book.getTitleAndYear())
})

console.log("\n")

// Activity 5:
// Task 8:
for (let i = 0; i < library.books.length; i++) {
    const book = library.books[i];
    console.log(`Book ${i + 1}:`);
    for(let property in book){
        console.log(`${property} is ${book[property]}`)
    }
    
}


console.log('\n')
// Taks 9:
for(const book of library.books){
    console.log('Book ');
    console.log(` Keys: ${Object.keys(book).join(', ')}`)
    console.log(` Keys: ${Object.values(book).join(', ')}`)
}