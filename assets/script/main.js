let myLibrary = [];

//Book constructor
function Book() {
  this.title = document.getElementById("title").value;
  this.author = document.getElementById("author").value;
  this.pages = document.getElementById("pages").value;
  this.read = (function() {
    if(document.getElementById('yes').checked)
      return document.getElementById('yes').value;
    else
      return document.getElementById('no').value;
  }) ();
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
    <td class="mx-4">${book.read}</td>
    <td><a href="#" class="btn btn-danger mx-4" id="statusYes">Yes</a></td>
    <td><a href="#" class="btn btn-danger" id="statusNo">No</a></td>
    <td><a href="#" class="btn btn-danger mx-4 delete">Remove</a></td>
    `
    list.appendChild(row);
}

//Add book form display function
function showForm(e) {
  document.getElementById('form').style.display = 'block';
}
function hideForm(e) {
  document.getElementById('form').style.display = 'none';
}
document.getElementById('add-book').addEventListener('click', showForm);
document.getElementById('form').addEventListener('submit', addBookToLibrary);
document.getElementById('submit-form').addEventListener('submit', hideForm);

//delete a book

function deleteBook(ele) {
  if(ele.classList.contains("delete")) {
    ele.parentElement.parentElement.remove();
  }
}

document.querySelector('#book-list').addEventListener('click', (e) => {
  deleteBook(e.target);
});

//Update read status
function updateReadBtn(ele) {
  if(){
    
  }
}

