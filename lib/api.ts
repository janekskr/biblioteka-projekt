export class Book {
  static lastId = 0;

  title: string;
  author: string;
  year: number;
  count: number;
  available: boolean;
  id: number;
  tag: string;

  constructor(title: string, author: string, year: number, count: number, tag: string) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.count = count = 1;
    this.available = count > 0;
    this.id = ++Book.lastId;
    this.tag = tag
  }

  displayInfo(): void {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Available Copies: ${this.count}`
    );
  }
}

export class Reader {
  static lastId = 0;

  firstName: string;
  lastName: string;
  age: number;
  borrowedBooks: Book[];
  id: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.borrowedBooks = [];
    this.id = ++Book.lastId;
  }

  borrowBook(book: Book): void {
    if (book.available) {
      book.count--; // Reduce available copies count
      if (book.count === 0) {
        book.available = false; // Set book as unavailable if no copies left
      }
      this.borrowedBooks.push(book);
      // console.log(`${this.firstName} ${this.lastName} borrowed "${book.title}"`);
    } else {
      console.log(`${book.title} jest nie dostępna.`);
    }
  }
}

export class Library {
  private static instance: Library | null = null;
  books: Book[];
  readers: Reader[];

  private constructor() {
    this.books = [];
    this.readers = [];
  }

  static getInstance(): Library {
    if (!Library.instance) {
      Library.instance = new Library();
    }
    return Library.instance;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  addReader(reader: Reader): void {
    this.readers.push(reader);
  }

  loanBook(readerId: number, book: Book): void {
    const reader = this.findUserById(readerId)
    if(!reader) return

    if (!reader.borrowedBooks.includes(book)) {
      reader.borrowBook(book);
    } else {
      alert(
        `${reader.firstName} ${reader.lastName} już wypożyczył ${book.title}`
      );
    }
  }

  hasBorrowedBook(readerId: number, bookId: number): boolean {
    const reader = this.findUserById(readerId)
    if (reader) {
      return reader.borrowedBooks.some((book) => book.id === bookId);
    }
    return false;
  }

  findUserById(id: number): Reader | undefined {
    return this.readers.find(reader => reader.id === id);
  }
}

const book1 = new Book("Harry Potter", "J.K. Rowling", 1997, 3, "Fantasy");
const book2 = new Book("Lord of the Rings", "J.R.R. Tolkien", 1954, 2, "Fantasy");
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, 1, "Fantasy");

const reader1 = new Reader("John", "Doe", 25);
const reader2 = new Reader("Jane", "Smith", 30);

export const libraryInstance = Library.getInstance();

libraryInstance.addBook(book1);
libraryInstance.addBook(book2);
libraryInstance.addBook(book3);
libraryInstance.addReader(reader1);
libraryInstance.addReader(reader2);

libraryInstance.loanBook(reader1.id, book1)
libraryInstance.loanBook(reader1.id, book2)
libraryInstance.loanBook(reader2.id, book3)
