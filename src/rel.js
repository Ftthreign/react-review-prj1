const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// // destructuring Object

// const books = getBook(3);

// // const title = books.title;
// // const author = books.author;

// const { title, author, hasMovieAdaptation, genres, pages, publicationDate } =
//   books;

// // Arrow Function

// const getYear = (str) => str.split("-")[0];
// console.log(getYear(publicationDate));

// console.log(author, title, hasMovieAdaptation, genres);

// // REST OPERATOR
// const [primaryGenre, ...otherGenres] = genres;

// console.log(primaryGenre, otherGenres);

// // SPREAD OPERATOR
// const newGen = [...genres, "NTR"];
// newGen;
// const updatedBook = {
//   ...books,
//   moviePublicationDate: "2001-12-19",
//   //   pages: 6969,
// };
// updatedBook;

// // Template Literals and ternary Operator
// const summary = `${title} is a book with ${pages} pages with date of publication is ${getYear(
//   publicationDate
// )} the book has ${
//   hasMovieAdaptation ? "already" : "not"
// } been adapted as movie`;
// summary;

// const isPage = pages > 1000 ? "Over 1000" : "under 1000";
// isPage;

// // Logical Operator (||, &&, ??)

// console.log(hasMovieAdaptation && "This movie has a movie");

// // falsy : 0, '', null, undefined
// console.log("Fadhil" && "Some string");
// console.log(0 && "Some string");

// console.log(true || "Some string");
// console.log(false || "Some string");
// console.log(books.translations.spanish || "NOT TRANSLATED");

// console.log(books.reviews.librarything?.reviewsCount || "no data");

// const count = books.reviews.librarything?.reviewsCount ?? "no Data";
// count;

// function getTotalReviewCount(book) {
//   const goodreads = book.reviews.goodreads.reviewsCount;
//   const librarything = book.reviews.librarything?.reviewsCount ?? 0;
//   return goodreads + librarything;
// }
// // console.log(getTotalReviewCount(books));

// // Array Method map
// const books = getBooks();

// const x = [1, 2, 3, 4].map((el) => el * 2);
// console.log(x);

// const title = books.map((e) => e.title);
// title;

// const essentialData = books.map((booke) => ({
//   title: booke.title,
//   author: booke.author,
//   reviewsCount: getTotalReviewCount(booke),
// }));
// essentialData;

// // Array method Filter
// const longBooks = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);
// longBooks;

// const fiction = books
//   .filter((book) => book.genres.includes("adventure"))
//   .map((book) => book.title);
// fiction;

// // Array method Reduce
// const pagesAllBooks = books.reduce((acc, e) => acc + e.pages, 0);
// pagesAllBooks;

// // Array method Sort()

// const xenon = [3, 6, 7, 8, 9, 5];
// const sorted = xenon
//   .slice()
//   .sort((a, b) => a - b)
//   .sort((a, b) => b - a);
// sorted;
// xenon;

// const sortedPages = books.slice().sort((a, b) => b.pages - a.pages);
// sortedPages;

// const newBook = {
//   id: 6,
//   title: "Filosofi Teras",
//   author: "Hanry Manampiring",
// };
// const booksAfterAdd = [...books, newBook];
// booksAfterAdd;

// const booksAfterDelete = booksAfterAdd.filter((books) => books.id !== 3);
// booksAfterDelete;

// const booksAfterUpdate = booksAfterDelete.map((books) =>
//   books.id === 1 ? { ...books, pages: 5959 } : books
// );
// booksAfterUpdate;

// Asynchronous Javascript

// .then((res) => res.json())
// .then((data) => console.log(data));

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();
