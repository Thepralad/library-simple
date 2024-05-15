let myLibrary = new Array();

function Book(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead ? 'has read' : 'not yet read';
}

function addBookToLibrary(title, author, pages, hasRead){
    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
}

addBookToLibrary('Book1', 'Author1', 100, true);
addBookToLibrary('Book2', 'Author2', 200, false);

for (let i = 0; i < myLibrary.length; i++) {
    console.log(`${myLibrary[i].title},${myLibrary[i].author},${myLibrary[i].pages},${myLibrary[i].hasRead}, `);
}
