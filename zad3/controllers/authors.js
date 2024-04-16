const Author = require('../models/author');

let authors = [
    new Author(1, 'O. Henry'),
    new Author(2, 'Mark Twain'),
    new Author(3, 'Ernest Hemingway')
];

exports.listAuthors = (req, res) => {
    res.render('authors', { authors: authors });
};
