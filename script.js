const myLibrary = [];

// the book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        console.log(`${title} by ${author}, ${pages}, ${read}`);
    };
}

const howlsCastle = new Book(
    'Howl\'s Moving Castle',
    'Diana Wynne Jones',
    336,
    'read',
);

const Test = new Book (
    'A',
    'A',
    300,
    'read',
);

function addBookToLibrary() {
    // get data from user
    // convert data into book objects
    // add object to the array
    myLibrary.push(howlsCastle);
    myLibrary.push(Test);
}

addBookToLibrary();

const body = document.querySelector('body');
const container = document.querySelector('.container');

function displayBooksOnPage() {
    myLibrary.forEach((element) => {
        const book = document.createElement('div');
        book.classList.add('book');
        const title = document.createElement('div')
        const author = document.createElement('div')
        const pages = document.createElement('div')
        const status = document.createElement('div')
        title.textContent = `${element.title}`;
        author.textContent = `${element.author}`;
        pages.textContent = `Pages: ${element.pages}`;
        status.textContent = `${element.read}`;
        book.append(title, author, pages, status);
        container.appendChild(book);
    });
}

displayBooksOnPage();
