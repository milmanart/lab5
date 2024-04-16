const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home'); // assuming you have home.ejs view
});

module.exports = router;
