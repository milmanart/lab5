const Book = require('../models/book');
const Author = require('../models/author');

exports.addBook = (req, res) => {
    const { title, publishingYear, authorId } = req.body;

    const author = authors.find(author => author.id === authorId);

    if (!author) {
        return res.status(404).send('Author not found');
    }

    const id = generateBookId();

    const newBook = {
        id: id,
        title: title,
        publishingYear: publishingYear,
        authorId: authorId
    };

    books.push(newBook);

    res.redirect('/book/list');
};
