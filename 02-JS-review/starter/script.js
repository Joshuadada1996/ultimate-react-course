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

// Destructuring
//allows you to take values from arrays or objects and set them to individual variables

//Rest Operator
//allows you to get the rest of the values of the array or objects and applies that into an array or object

//Spread Operator
//Same syntax (...) as the Rest Operator, and can be used in both arrays and objects
//Allows you to create a new array with all values and adds a new one to the end
//Takes all the values out of the array and puts them into a brand new array and the new value without having a seperated array
//With objects, allows you to add new properties and update existing ones
//Spreads out properties from object to a new object
// can also use it to update/override properties from an object
// will only work if applied after a property is declared so at the end of the updated object
const book = getBook(3);
book;
// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = [...genres, "epic fantasy"];
newGenres;

const updatedBook = {
  ...book,
  //Adding a new property
  moviePublicationDate: "2001-12-19",
  // Overwriting an existing property
  pages: 1210,
};
updatedBook;

//Template Literals
//Template Literals is an ES6 Javascript feature that allows you to create strings that contains javascript variables or javascript expression inside of a string
// Template literals use back ticks `` instead of normal speech marks ''
//Anything that can produce a value can be placed in the block ${}

//Arrow function
//a new way to write a function, made in ES6
//Better for one liner functions

//old way of writing function, better for longer functions
// function getYear(str) {
//   return str.split("-")[0];
// }
//multiple liners will need the return keyword and wirly braces
//important for call back functions
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));
const summary = `${title}, a ${pages}--page long book was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

//Ternary Operator
//To define values based on a condition
// Can be used in situations when you cant use an if/else statement
//Has three operands/three parts in order to work
// has a condition, then a result of the operation if the condition is true then the results of if the operation is false
// similar to a function, it will always return a value
//to simplify, if pages is greater 1000, then value is a thousand if not then value is less than 1000
// if else statement is a statement so it doesn't return a value so it's not possible to use in certain scenarios
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

//Short Circuiting on &&
//e.g. and and or can short circuit
//in certain conditions, the operator will return the first value and not look at the second one.
//and operator short circuits when the first value is false then immediately returns that first value
// if value is false, immediately returns false
console.log(true && "string");
console.log(false && "string");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy: 0, '', null, undefined
// truthy is anything that isn't falsy
console.log("jonas" && "Some string");
console.log(0 && "Some String");

//Short Circuiting on ||
//This is the opposite of the and where it short circuits whenever the first operand is true, then returns it
//Will only short circuit if the first value is true and doesn't look at the second value
console.log(true || "Some String");
console.log(false || "Some String");

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

//This can go wrong, because it works for falsy values
//because one of the values had 0 review counts, it instead reads no data instead of 0, which is incorrect information, so sometimes short circuiting may not be good
// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

//Nullish coalescing operator
// //New JS operator, which works similar to \\ but also short circuit for falsy valuees
// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

//Optional Chaining
// add value from two different objects together - for example two different review count with different key names from the parent object
// very easy
//it's good to use optional chaining as much as possible
//it is a ? before the end of the object, if a value is undefined, it javascript will no longer try to read, the lower value, e.g. reviewsCount
// the ?? e.g. the Nullish coalescing operator operator helps with situations like this, so if there is no value it can display another value, in this case 0
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book));
