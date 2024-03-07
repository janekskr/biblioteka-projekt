class Book {
  constructor(title, author, year, count) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.count = count; // Number of copies available
    this.available = count > 0; // Availability based on count
  }

  displayInfo() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Available Copies: ${this.count}`);
  }
}

class Reader {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.borrowedBooks = [];
  }

  borrowBook(book) {
    if (book.available) {
      book.count--; // Reduce available copies count
      if (book.count === 0) {
        book.available = false; // Set book as unavailable if no copies left
      }
      this.borrowedBooks.push(book);
      // console.log(`${this.firstName} ${this.lastName} borrowed "${book.title}"`);
    } else {
      console.log(`${book.title} is not available.`);
    }
  }
}

class Library {
  constructor() {
    this.books = [];
    this.readers = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  addReader(reader) {
    this.readers.push(reader);
  }

  loanBook(reader, book) {
    if (!reader.borrowedBooks.includes(book)) {
      reader.borrowBook(book);
    } else {
      console.log(`${reader.firstName} ${reader.lastName} already borrowed "${book.title}"`);
    }
  }
}

const book1 = new Book("Harry Potter", "J.K. Rowling", 1997, 3);
const book2 = new Book("Lord of the Rings", "J.R.R. Tolkien", 1954, 2);
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, 1);

const reader1 = new Reader("John", "Doe", 25);
const reader2 = new Reader("Jane", "Smith", 30);

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addReader(reader1);
library.addReader(reader2);

console.table(library.books)

library.loanBook(reader1, book1);
library.loanBook(reader2, book2);
library.loanBook(reader1, book2);

console.table(library.books)

// book1.displayIfno();
// book2.displayInfo();
// book3.displayInfo();
