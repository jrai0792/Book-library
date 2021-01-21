let myLibrary = [];

//Book constructor
function Book() {
  this.title = document.getElementById("title").value;
  this.author = document.getElementById("author").value;
  this.pages = document.getElementById("pages").value;
}

// Adding book
function addBookToLibrary(e) {
  e.preventDefault();
  const book = new Book(title, author, pages);
  myLibrary.push(book);
  console.log(myLibrary);
  displayBook(book);
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

document.getElementById("form").addEventListener('submit', addBookToLibrary);
