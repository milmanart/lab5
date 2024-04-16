const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

router.get('/book/list', booksController.listBooks);
router.delete('/book/delete/:id', booksController.deleteBook);

module.exports = router;
