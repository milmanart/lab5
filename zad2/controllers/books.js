const Book = require('../models/book');

exports.listBooks = (req, res) => {
    const books = [
        { id: 1, title: 'The Gift of the Magi', author: 'O. Henry' },
        { id: 2, title: 'The Adventures of Huckleberry Finn', author: 'Mark Twain' },
        { id: 3, title: 'The Old Man and the Sea', author: 'Ernest Hemingway' }
    ];

    res.render('books', { books: books });
};
