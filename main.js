class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

function addBookToLibrary() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let status;
  if (document.getElementById('read').checked) {
    status = 'Read';
  } else if (document.getElementById('not-complete').checked) {
    status = 'Not Read';
  }

  if (title && author && pages && status) {
    let currentBook = new Book(title, author, pages, status);
    myLibrary.push(currentBook);
    localStorage.setItem('library', JSON.stringify(myLibrary))
    form.reset();
    toggleDisplay();
  } else {
    alert('Please fill out all fields.');
  }
}

function removeChild() {
  const container = document.querySelector('#container');
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function createChildElements(array) {
  const container = document.querySelector('#container');
  array.forEach((item, index) => {
    let book = document.createElement('tr');

    let title = document.createElement('td');
    let author = document.createElement('td');
    let pages = document.createElement('td');

    let statusElement = document.createElement('td');
    let statusButton = document.createElement('button');
    statusButton.classList.add('status-button');
    statusButton.textContent = item.status;
    statusElement.appendChild(statusButton);

    let deleteElement = document.createElement('td');
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.setAttribute('id', index);
    deleteButton.textContent = "x";
    deleteElement.appendChild(deleteButton);

    title.textContent = item.title;
    author.textContent = item.author;
    pages.textContent = item.pages;

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(statusElement);
    book.appendChild(deleteElement);

    container.appendChild(book);
  })
}

function createDeleteListeners(array) {
  const buttons = document.querySelectorAll('.delete-button');
  buttons.forEach(button => button.addEventListener(('click'), () => {
    const index = button.getAttribute('id');
    array.splice(index, 1);
    render(array);
  }))
}

function createReadListeners(array) {
  const buttons = document.querySelectorAll('.status-button');
  buttons.forEach((button, index) => button.addEventListener('click', () => {
    if (array[index].status === "Read") {
      array[index].status = "Not Read";
    } else {
      array[index].status = "Read";
    }
    render(array);
  }))
}

function render(array) {
  removeChild();
  createChildElements(array);
  createDeleteListeners(array);
  createReadListeners(array);
  localStorage.setItem('library', JSON.stringify(array));
}

const addBook = document.querySelector('#add-book');
const form = document.querySelector('#new-book-form');
addBook.addEventListener('click', toggleDisplay);

function toggleDisplay() {
  form.classList.toggle('toggle-visibility');
}

if (!localStorage.getItem('library')) {
  let myLibrary = [];

  // Populate library with data
  let book1 = new Book("It", "Stephen King", 1138, "Read");
  myLibrary.push(book1);
  let book2 = new Book("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", 309, "Not Read");
  myLibrary.push(book2);
  let book3 = new Book("Eloquent JavaScript", "Marijin Haverbeke", 448, "Not Read");
  myLibrary.push(book3);
  let book4 = new Book("The Subtle Art of Not Giving a F*ck", "Mark Manson", 224, "Not Read");
  myLibrary.push(book4);
  let book5 = new Book("The Hate U Give", "Angie Thomas", 444, "Not Read");
  myLibrary.push(book5);
  let book6 = new Book("The Gift of Fear", "Gavin de Becker", 432, "Read");
  myLibrary.push(book6);

  localStorage.setItem('library', JSON.stringify(myLibrary))
}

let myLibrary = JSON.parse(localStorage.getItem('library'))
render(myLibrary);
