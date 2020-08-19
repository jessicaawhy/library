let myLibrary = [{
  title: 'title',
  author: 'author',
  pages: 5,
  status: 'status',
},{
  title: 'title',
  author: 'author',
  pages: 3,
  status: 'status',
}];

// function Book(title, author, pages, status) {
// }

function addBookToLibrary() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let status = document.getElementById('status').value;

  if (title && author && pages && status) {
    
    let currentBook = {
      title: title,
      author: author,
      pages: pages,
      status: status, 
    }
    
    myLibrary.push(currentBook);

  } else {
    alert('Please fill out all fields.');
  }
}

function render(array) {
  const container = document.querySelector('#container');
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }

  array.forEach(item => {
    let book = document.createElement('tr');

    let title = document.createElement('td');
    let author = document.createElement('td');
    let pages = document.createElement('td');
    let status = document.createElement('td');

    title.textContent = item.title;
    author.textContent = item.author;
    pages.textContent = item.pages;
    status.textContent = item.status;

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(status);

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