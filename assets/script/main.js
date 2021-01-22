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
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = (function () {
    if (document.getElementById('yes').checked) return document.getElementById('yes').value;
    return document.getElementById('no').value;
  }());
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBook(book);
  e.preventDefault();

  // Clearing the form input data after submit
  document.getElementById('form').reset();
}


// Add book form display function
function showForm() {
  document.getElementById('form').style.display = 'block';
}
let hideform = false;
function hideForm() {
  debugger
  hideform = !hideform;
  if(hideform){
    document.getElementById('formdiv').style.display = 'none';
  }else
  {
    document.getElementById('formdiv').style.display = 'display';
  }
}
document.getElementById('add-book').addEventListener('click', showForm);
document.getElementById('form').addEventListener('submit', addBookToLibrary);
document.getElementById('submit-form').addEventListener('submit', hideForm);

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
