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
        book.textContent = `${element.title} by ${element.author}, ${element.pages}, ${element.read}`;
        container.appendChild(book);
    });
}

displayBooksOnPage();
