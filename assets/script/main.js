function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}
let library = [];
function addBook() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let book = new Book(title, author, pages);
  library.push(book);
  e.preventDefault();
}
console.log(library);
