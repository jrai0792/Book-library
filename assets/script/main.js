let library = [];
function Book() {
  this.title = document.getElementById('title').value;
  this.author = document.getElementById('author').value;
  this.pages = document.getElementById('pages').value;
}
form = document.getElementById('form');
form.addEventListener('submit', function addBook(event) {
  let book = new Book();
  library.push(book);
  event.preventDefault();
  document.getElementById("form").reset();
});