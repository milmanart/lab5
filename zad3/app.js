const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

const homeRouter = require('./routes/home');
const authorsRouter = require('./routes/authors');
const booksRouter = require('./routes/books');
const addBookRouter = require('./routes/addBook');

app.use(homeRouter);
app.use(authorsRouter);
app.use(booksRouter);
app.use(addBookRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
