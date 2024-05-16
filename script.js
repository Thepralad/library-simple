let myLibrary = new Array();
function Book(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead ? 'Already read' : 'Not yet read';
}

const container = document.getElementById('container');

function addBookToLibrary(title, author, pages, hasRead){
    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
}

function displayBook(){
    for (let i = 0; i < myLibrary.length; i++) {
        const _book = document.createElement('div');
        _book.classList.add('book');
        const _title = document.createElement('h3');
        const _author = document.createElement('p');
        const _pages = document.createElement('p');
        const _hasRead = document.createElement('p');
        const _removeBtn = document.createElement('button')

        _title.textContent = myLibrary[i].title;
        _author.textContent = myLibrary[i].author;
        _pages.textContent = `${myLibrary[i].pages} pages`;
        _hasRead.textContent =  myLibrary[i].hasRead;
        _removeBtn.textContent = 'Remove'
        
        _book.appendChild(_title);
        _book.appendChild(_author);
        _book.appendChild(_pages);
        _book.appendChild(_hasRead);
        _book.appendChild(_removeBtn);

        container.appendChild(_book);
    }
}

addBookToLibrary('Nigga', 'thisIsCool', 256, true);
addBookToLibrary('hair', 'beardo', 234, false);
addBookToLibrary('love', 'andrew tate', 76, true);

displayBook();

