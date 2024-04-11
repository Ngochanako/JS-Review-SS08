"use strict";
class Book {
    constructor(title, author) {
        this.tittle = title;
        this.author = author;
    }
}
class Library {
    constructor(books) {
        this.books = books;
    }
    renderBook() {
        this.books.forEach(item => console.log(item));
    }
    addBook(book) {
        this.books.push(book);
    }
}
let book1 = new Book("abc", "def");
let book2 = new Book("eyy", "suh");
let library = new Library([]);
console.log(library.renderBook());
library.addBook(book1);
library.renderBook();
