const Book = require('../models/book');
const Author = require('../models/author');

let books = [
    new Book(1, 'The Gift of the Magi', 1),
    new Book(2, 'The Adventures of Huckleberry Finn', 2),
    new Book(3, 'The Old Man and the Sea', 3)
];

exports.listBooks = (req, res) => {
    // Prepare data to pass to the view
    const booksWithAuthors = books.map(book => {
        const author = authors.find(author => author.id === book.authorId);
        return { ...book, author: author.name };
    });

    res.render('books', { books: booksWithAuthors });
};

exports.deleteBook = (req, res) => {
    const bookId = req.params.id;
    books = books.filter(book => book.id !== parseInt(bookId));
    res.redirect('/book/list');
};
