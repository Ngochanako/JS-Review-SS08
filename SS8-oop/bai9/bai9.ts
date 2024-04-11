class Book{
    private title:string;
    private author:string;
    constructor(title:string,author:string){
        this.title=title;
        this.author=author;
    }
}
class Library{
    books: Book[];
    constructor(books:Book[]){
        this.books=books;
    }
    renderBook() :void{
        this.books.forEach(item=>console.log(item))
    }
    addBook(book:Book){
        this.books.push(book)
    }
}
let book1=new Book("abc","def");
let book2=new Book("eyy","suh");
let library=new Library([]);

library.addBook(book1);
library.addBook(book2);
library.renderBook();
