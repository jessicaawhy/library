let myLibrary = [{
  title: 'It',
  author: 'Stephen King',
  pages: 1138,
  status: 'Read',
},{
  title: 'Harry Potter and the Sorcerer\'s Stone',
  author: 'J. K. Rowling',
  pages: 309,
  status: 'Not Read',
}];

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

function render(array) {
  const container = document.querySelector('#container');
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }

  array.forEach((item, index) => {
    let book = document.createElement('tr');

    let title = document.createElement('td');
    let author = document.createElement('td');
    let pages = document.createElement('td');
    let status = document.createElement('td');
    let deleteButton = document.createElement('td');
    let button = document.createElement('button');
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

const addBook = document.querySelector('#add-book');
const form = document.querySelector('#new-book-form');
addBook.addEventListener('click', toggleDisplay);


function toggleDisplay() {
  form.classList.toggle('toggle-visibility');
}

// initial
render(myLibrary);
