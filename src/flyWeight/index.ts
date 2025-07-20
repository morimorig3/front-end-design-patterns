class Book {
  title: string;
  author: string;
  isbn: string;
  constructor(title: string, author: string, isbn: string) {
    console.log("instance生成");
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

const isbnNumbers = new Map<string, Book>();
const bookList = [];

const badCreateBook = (title: string, author: string, isbn: string): Book => {
  const newBook = new Book(title, author, isbn);
  isbnNumbers.set(isbn, newBook);
  return newBook;
};

const createBook = (title: string, author: string, isbn: string) => {
  const book = isbnNumbers.has(isbn);
  if (book) {
    return isbnNumbers.get(isbn) as Book;
  } else {
    const book = new Book(title, author, isbn);
    isbnNumbers.set(isbn, book);
    return book;
  }
};
const addBook = (
  title: string,
  author: string,
  isbn: string,
  availability: boolean,
  sales: number
) => {
  const book = {
    ...badCreateBook(title, author, isbn),
    sales,
    availability,
    isbn,
  };

  bookList.push(book);
  return book;
};

addBook("Harry Potter", "JK Rowling", "AB123", false, 100);
addBook("Harry Potter", "JK Rowling", "AB123", true, 50);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);

console.log("Total amount of copies: ", bookList.length);
console.log("Total amount of books: ", isbnNumbers.size);

// 1
const elements = document.querySelectorAll("button");
function listener(this: HTMLButtonElement, ev: MouseEvent) {
  console.log("something function");
}
void elements.forEach((element) => {
  element.addEventListener("click", listener);
});

// 2
const elements = document.querySelectorAll("button");
void elements.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("something function");
  });
});
