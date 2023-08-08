const myLibrary = [];

// the book constructor
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function () {
        console.log(`${title} by ${author}, ${pages}, ${status}`);
    };
}

// add status prototype to Book constructor
Book.prototype.changeStatus = function(inputIndex) {
    console.log('hello hehehe');
    if (myLibrary[inputIndex].status === 'read') {
        myLibrary[inputIndex].status = 'not read';
    } else {
        myLibrary[inputIndex].status = 'read';
    }

    const clickedBook = document.querySelector(`
        div[data-index='${inputIndex}']`);
    let statusText = document.querySelector('#status');
    statusText.textContent = myLibrary[inputIndex].status;
};

const howlsCastle = new Book(
    'Howl\'s Moving Castle',
    'Diana Wynne Jones',
    336,
    'read',
);
myLibrary.push(howlsCastle);

// add user book data to book array
function addBookToLibrary(title, author, page, status) {
    const obj = new Book(
        title,
        author,
        page,
        status,
    );

    if (obj.title && obj.author && obj.pages && obj.status) {
        myLibrary.push(obj);
    }
}

addBookToLibrary();

const container = document.querySelector('.container');

// displays content of book array to the page
function displayBooksOnPage() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    let index = 0;
    myLibrary.forEach((element) => {
        const book = document.createElement('div');
        book.classList.add('book');
        book.setAttribute('data-index', `${index}`);
        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const status = document.createElement('div');
        status.id = 'status';
        title.textContent = `${element.title}`;
        author.textContent = `${element.author}`;
        pages.textContent = `Pages: ${element.pages}`;
        status.textContent = `Status: ${element.status}`;
        book.append(title, author, pages, status);
        container.appendChild(book);

        // add button to remove book from display
        const removeBookBtn = document.createElement('button');
        removeBookBtn.textContent = 'Remove Book';
        removeBookBtn.addEventListener('click', removeBook);
        removeBookBtn.setAttribute('data-index', `${index}`);
        book.append(removeBookBtn);

        // button to change read status of book
        const changeStatusBtn = document.createElement('button');
        changeStatusBtn.textContent = 'Change Status';
        changeStatusBtn.addEventListener('click', (e) => {
            let arrayIndex = e.target.dataset.index;
            myLibrary[arrayIndex].changeStatus(arrayIndex);
        });
        changeStatusBtn.setAttribute('data-index', `${index}`);
        book.append(changeStatusBtn);

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

// form to retrieve user input on books
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTitle = document.querySelector('#title');
    const newAuthor = document.querySelector('#author');
    const newPages = document.querySelector('#page');
    const newStatus = document.querySelector('#status');

    console.log(newTitle.value, newAuthor.value, newPages.value, newStatus.value);
    addBookToLibrary(newTitle.value, newAuthor.value, newPages.value, newStatus.value);
    displayBooksOnPage();
});

// remove book from display when remove book button clicked
function removeBook(e) {
    const clickedBook = document.querySelector(`
        div[data-index='${e.target.dataset.index}']`);
    container.removeChild(clickedBook);

    // remove book from library
    myLibrary.splice(e.target.dataset.index, 1);
}
