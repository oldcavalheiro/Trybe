const books = {
  collection: "The Lord of the Rings",
  book1: "The Fellowship",
  book2: "Two Towers",
  book3: "Return of the King",
};

const bookAuthor = {
  authorName: "J. R. R. Tolkien",
};

console.log("--------- antes --------- ");
console.log("books: ", books);
console.log("bookAuthor: ", bookAuthor);

const result = Object.assign({}, books, bookAuthor);

console.log("--------- depois --------- ");
console.log("books: ", books);
console.log("bookAuthor: ", bookAuthor);
console.log("result: ", result);

console.log(`result === book: ${result === books}`);
