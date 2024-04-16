const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

const homeRoute = require('./routes/home');
const authorsRoute = require('./routes/authors');
const booksRoute = require('./routes/books');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRoute);
app.use('/', authorsRoute);
app.use('/', booksRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
