// function Book(title, author, pages, status) {
// }

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
    let currentBook = {
      title: title,
      author: author,
      pages: pages,
      status: status, 
    }
    myLibrary.push(currentBook);
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
    let status = document.createElement('td');
    let deleteButton = document.createElement('td');
    let button = document.createElement('button');
    button.classList.add('delete-button');
    button.setAttribute('id', index);
    button.textContent = "x";

    title.textContent = item.title;
    author.textContent = item.author;
    pages.textContent = item.pages;
    status.textContent = item.status;
    deleteButton.appendChild(button);

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(status);
    book.appendChild(deleteButton);

    container.appendChild(book);
  })
}

function render(array) {
  removeChild();
  createChildElements(array);
  createDeleteListeners(array);
}

function createDeleteListeners(array) {
  const buttons = document.querySelectorAll('.delete-button');
  buttons.forEach(button => button.addEventListener(('click'), () => {
    const index = button.getAttribute('id');
    array.splice(index, 1);
    render(array);
  }))
}

const addBook = document.querySelector('#add-book');
const form = document.querySelector('#new-book-form');
addBook.addEventListener('click', toggleDisplay);

function toggleDisplay() {
  form.classList.toggle('toggle-visibility');
}

// initial

let myLibrary = [{
  title: 'It',
  author: 'Stephen King',
  pages: 1138,
  status: 'Read',
},{
  title: "Harry Potter and the Sorcerer's Stone",
  author: 'J. K. Rowling',
  pages: 309,
  status: 'Read',
},
{
  title: 'Eloquent JavaScript',
  author: 'Marijin Haverbeke',
  pages: 448,
  status: 'Not Read',
},{
  title: 'The Subtle Art of Not Giving a F*ck',
  author: 'Mark Manson',
  pages: 224,
  status: 'Not Read',
},
{
  title: 'The Hate U Give',
  author: 'Angie Thomas',
  pages: 444,
  status: 'Not Read',
},{
  title: 'The Gift of Fear',
  author: 'Gavin de Becker',
  pages: 432,
  status: 'Not Read',
}];

render(myLibrary);
