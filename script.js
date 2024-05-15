let myLibrary = new Array();
function Book(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead ? 'has read' : 'not yet read';
}

const container = document.getElementById('container');

function addBookToLibrary(title, author, pages, hasRead){
    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
    
    const _book = document.createElement('div');
    const _title = document.createElement('h3');
    const _author = document.createElement('p');
    const _pages = document.createElement('p');
    _title.textContent = title;
    _author.textContent = author;
    _pages.textContent = `${pages} pages`;
    _book.appendChild(_title);
    _book.appendChild(_author);
    _book.appendChild(_pages);
    container.appendChild(_book);
}




