const Author = require('../models/author');

exports.listAuthors = (req, res) => {
    const authors = [
        { id: 1, name: 'O. Henry' },
        { id: 2, name: 'Mark Twain' },
        { id: 3, name: 'Ernest Hemingway' }
    ];

    res.render('authors', { authors: authors });
};
