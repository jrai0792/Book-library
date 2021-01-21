let myLibrary = [];

//Book constructor
function Book() {
  this.title = document.getElementById("title").value;
  this.author = document.getElementById("author").value;
  this.pages = document.getElementById("pages").value;
}

// Adding book
function addBookToLibrary(e) {
  const book = new Book();
  myLibrary.push(book);
  displayBook(book);
  e.preventDefault();
  //Clearing the form input data after submit
  document.getElementById("form").reset();
}

//Displaying book to the UI
function displayBook(book) {
  const list = document.querySelector('#book-list');
  const row = document.createElement('tr');

    row.innerHTML = `
    <td class="mx-4">${book.title}</td>
    <td class="mx-4">${book.author}</td>
    <td class="mx-4">${book.pages}</td>
    <td><a href="#" class="btn btn-danger mx-4">Remove</a></td>
    `
    list.appendChild(row);
}
function showForm(e) {
  document.getElementById('form').style.display = 'block';
}
function hideForm(e) {
  document.getElementById('form').style.display = 'none';
}
document.getElementById('add-book').addEventListener('click', showForm);
document.getElementById('form').addEventListener('submit', addBookToLibrary);
document.getElementById('submit-form').addEventListener('click', hideForm);