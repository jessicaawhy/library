


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

  let currentBook = {
    title: title,
    author: author,
    pages: pages,
    status: status, 
  }
  
  myLibrary.push(currentBook);
}

function render(array) {
  const container = document.querySelector('#container');
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }

  array.forEach(item => {
    let book = document.createElement('div');
    book.textContent = JSON.stringify(item);
    container.appendChild(book);
  })
}

render(myLibrary);