
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
  if (myLibrary.length === 1) {
    const tbl = document.getElementById('table');
    const thead = document.createElement('thead');
    const trow = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.textContent = 'Title';
    const th2 = document.createElement('th');
    th2.textContent = 'Author';
    const th3 = document.createElement('th');
    th3.textContent = 'No. of pages';
    const th4 = document.createElement('th');
    th4.textContent = 'Update read status';
    const th5 = document.createElement('th');
    th5.textContent = 'Remove Book';
    trow.appendChild(th1);
    trow.appendChild(th2);
    trow.appendChild(th3);
    trow.appendChild(th4);
    trow.appendChild(th5);
    thead.appendChild(trow);
    tbl.appendChild(thead);
  }

  const list = document.querySelector('#book-list');
  const row = document.createElement('tr');
  for (let i = 0; i < myLibrary.length; i = +1) {
    row.innerHTML = `
      <td class="mx-4">${book.title}</td>
      <td class="mx-4">${book.author}</td>
      <td class="mx-4">${book.pages}</td>
      <td><a href="#" class="btn btn-primary mx-4" id="statusYes">${book.read}</a></td>
      <td><a href="#" class="btn btn-danger mx-4 delete">Remove</a></td>
      `;
  }
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
  // myLibrary.forEach(displayBook(book));
  displayBook(book);
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