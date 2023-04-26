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
myLibrary.push(howlsCastle);

function addBookToLibrary(title, author, page, status) {
    // get data from user
    // convert data into book objects
    // add object to the array
    const obj = new Book(
        title,
        author,
        page,
        status,
    );

    if (obj.title && obj.author && obj.pages) {
        myLibrary.push(obj);
    }
}

addBookToLibrary();

const container = document.querySelector('.container');

function displayBooksOnPage() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    let index = 0;
    myLibrary.forEach((element) => {
        const book = document.createElement('div');
        book.classList.add('book');
        book.classList.add(`${index}`);
        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const status = document.createElement('div');
        title.textContent = `${element.title}`;
        author.textContent = `${element.author}`;
        pages.textContent = `Pages: ${element.pages}`;
        status.textContent = `${element.read}`;
        book.append(title, author, pages, status);
        container.appendChild(book);

        // add button to remove book from display
        const removeBookBtn = document.createElement('button');
        removeBookBtn.textContent = 'Remove Book';
        removeBookBtn.addEventListener('click', removeBook);
        removeBookBtn.classList.add(`${index}`);
        book.append(removeBookBtn);

        index += 1;
    });
}

displayBooksOnPage();

// hide/display form to add book
function displayForm() {
    const form = document.querySelector('form');
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}

const displayBtn = document.querySelector('#display-form');
displayBtn.addEventListener('click', displayForm);

const form = document.querySelector('#add-book');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTitle = document.querySelector('#title');
    const newAuthor = document.querySelector('#author');
    const newPages = document.querySelector('#page');
    // const newStatus = document.querySelector('#status');

    console.log(newTitle.value, newAuthor.value, newPages.value);
    addBookToLibrary(newTitle.value, newAuthor.value, newPages.value);
    displayBooksOnPage();
});
