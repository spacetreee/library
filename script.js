const myLibrary = [1];

const Test = {
    title: 'A',
    author: 'A',
    pages: 300,
    read: 'read',
};

const Test2 = {
    title: 'A',
    author: 'A',
    pages: 300,
    read: 'read',
};

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

function addBookToLibrary() {
    myLibrary.push(howlsCastle);
    myLibrary.push(Test);
    myLibrary.push(Test2);
}

addBookToLibrary();
const body = document.querySelector('body');

function displayBooksOnPage() {
    myLibrary.forEach((element) => {
        console.log(element);
        const div = document.createElement('div');
        div.textContent = element;
        body.appendChild(div);
    });
}
