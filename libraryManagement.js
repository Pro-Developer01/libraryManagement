class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    viewBooks() {
        if (this.books.length === 0) {
            console.log("Library is empty! contact the manager.");
        } else {
            console.log("Library Store:");
            this.books.forEach(bookItem => {
                console.log(bookItem);
            });
        }
    }

    removeBook(book) {
        const index = this.books.findIndex(b => b === book);
        if (index !== -1) {
            this.books.splice(index, 1);
        } else {
            console.log("Book not found.");
        }
    }
}

class User {
    constructor() {
        this.borrowedBooks = [];
        this.borrowingLimit = 2;
    }

    borrowBook(book, library) {
        if (this.borrowedBooks.length < this.borrowingLimit) {
            const index = library.books.findIndex(b => b === book);
            if (index !== -1) {
                library.removeBook(book);
                this.borrowedBooks.push(book);
                console.log(`You have borrowed ${book}`);
            } else {
                console.log("Book not found in library.");
            }
        } else {
            console.log("You have reached your borrowing limit.");
        }
    }
}

//Scenario 1: 
// Given, there are no books in the library
// When, I view the books in the library
// Then, I see an empty library
const emptyLibrary = new Library();
emptyLibrary.viewBooks();

// Given, there are books in the library
// When, I view the books in the library
// Then, I see the list of books in the library
const library1 = new Library();
library1.addBook('book1');
library1.addBook('book2');
library1.addBook('book3');
library1.viewBooks();

// Scenario 2:  User can borrow a book from the library
// Given, there are books in the library
// When, I choose a book to add to my borrowed list
// Then, the book is added to my borrowed list
// And, the book is removed from the library

const scenario_2_Library = new Library();
scenario_2_Library.addBook('book1');
scenario_2_Library.addBook('book2');
scenario_2_Library.addBook('book3');

const user_one = new User();
user_one.borrowBook('book1', scenario_2_Library);
user_one.borrowBook('book2', scenario_2_Library);
user_one.borrowBook('book3', scenario_2_Library);

// View borrowed books
console.log("Borrowed books List:");
user_one.borrowedBooks.forEach((book, index) => {
    console.log(`${index + 1} - ${book}`);
});
