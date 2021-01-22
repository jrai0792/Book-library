/* eslint-disable no-unused-vars */
const myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Displaying book to the UI
function displayBook(book) {
  const list = document.querySelector('#book-list');
  const row = document.createElement('tr');
  row.innerHTML = `
      <td class="mx-4">${book.title}</td>
      <td class="mx-4">${book.author}</td>
      <td class="mx-4">${book.pages}</td>
      <td><a href="#" class="btn btn-primary mx-4" id="statusYes">${book.read}</a></td>
      <td><a href="#" class="btn btn-danger mx-4 delete">Remove</a></td>
      `;
  list.appendChild(row);
}

// Adding book
function addBookToLibrary(e) {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = (function () {
    if (document.getElementById('yes').checked) return document.getElementById('yes').value;
    return document.getElementById('no').value;
  }());
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);

  e.preventDefault();
  // Clearing the form input data after submit
  document.getElementById('form').reset();
  myLibrary.forEach(displayBook(book));
}

// Add book form display function
function showForm() {
  document.getElementById('form').style.display = 'block';
}


function hideForm() {
  document.getElementById('form').style.display = 'none';
}

document.getElementById('add-book').addEventListener('click', showForm);
document.getElementById('form').addEventListener('submit', addBookToLibrary);
// delete a book

function deleteBook(ele) {
  if (ele.classList.contains('delete')) {
    ele.parentElement.parentElement.remove();
  }
}

document.querySelector('#book-list').addEventListener('click', (e) => {
  deleteBook(e.target);
});

// Update status
function changeReadStatus(ele) {
  if (ele.textContent === 'Yes') {
    ele.textContent = 'No';
    return ele.textContent;
  }
  ele.textContent = 'Yes';
  return ele.textContent;
}

document.querySelector('#book-list').addEventListener('click', (e) => {
  changeReadStatus(e.target);
});
/* eslint-enable no-unused-vars */