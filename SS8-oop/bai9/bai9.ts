class Book{
    private tittle:string;
    private author:string;
    constructor(title:string,author:string){
        this.tittle=title;
        this.author=author;
    }
}
class Library{
    books: {title:string,author:string}[];
    constructor(books:{title:string,author:string}[]){
        this.books=books;
    }
    renderBook() :void{
        this.books.forEach(item=>console.log(item))
    }
    addBook(book:{title:string,author:string}){
        this.books.push(book)
    }
}
let book1=new Book("abc","def");
let book2=new Book("eyy","suh");
let library=new Library([]);
console.log(library.renderBook());

library.addBook(book1);
library.renderBook();