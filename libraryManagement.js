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
}

//Scenario 1: 
// Given, there are no books in the library
// When, I view the books in the library
// Then, I see an empty library
const emptyLibrary = new Library();
emptyLibrary.viewBooks();

//Given, there are books in the library
// When, I view the books in the library
// Then, I see the list of books in the library
const library1 = new Library();
library1.addBook('book1');
library1.addBook('book2');
library1.addBook('book3');
library1.viewBooks();