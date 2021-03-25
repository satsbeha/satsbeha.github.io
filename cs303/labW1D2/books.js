"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { findTitles, findAuthors, addBook }; //add all of your function names here that you need for the node mocha tests
let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];
/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {
    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */
    const titles = findTitles();
    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");
    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}
/**
 * @returns {undefined}
 */
function addBrowserBook() {
    const authorTxtbox = document.getElementById("title");
    const author = authorTxtbox.value;
    const newBrowserBook = { author: author, title: "foo", id: "123" };
    const titleTxtbox = document.getElementById("title");
    const title = titleTxtbox.value;
    const newBrowserBook = { author: "sam", title: title, id: "123" };
    addBook(newBrowserBook);
    return;
}
/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
    for (const book of library){
        titles.push(book.title);
    }
    titles.sort();
    const sorted = titles.sort();
   // titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];  //FIX THIS!!
    // implement this and other functions
    return titles;
    return sorted;
}

/**
 * @returns {Array} of all the authors in library
 */
function findAuthors() {
    const authors = [];
    for (const book of library) {
        authors.push(book.author);
    }
    return authors;
}
/**{
 * 
 * @param {Object} book with author title and id
 * @returns {Object} the same book that added
 */
function addBook(book) {
    library.push(book);
    return book;
}
/**
 * 
 * @param {string} author is book author
 * @param {string} title is book title
 * @param {string} bookId  is book title
 * @returns {Object} the new book
 */
function makeBook(author, title, bookId) {
    const newBook = {
        author: author,
        title: title,
        bookId: bookId
    };
    return newBook;
} 


showTitles(); 
  