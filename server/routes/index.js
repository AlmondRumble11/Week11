var express = require('express');
var router = express.Router();
const Books = require("../models/Books");
const mongoose = require("mongoose");

router.post('/api/book/', (req, res, next) => {
    console.log(req.body);
    //return res.send("ok");
    Books.create({
        name: req.body.name,
        author: req.body.author,
        pages: req.body.pages
    }, (err, ok) => {
        if (err) throw err;
        return res.send('ok');
    });


});

router.get('/book/:bookname', (req, res, next) => {
    console.log(req.params);
    console.log("in here");
    Books.find({ name: req.params.bookname }, (err, book) => {
        if (err) {
            return next(err);
        }
        console.log(book);
        if (book.length == 0) {
            console.log("no book found");
            return res.status(404).json({ err: "404", msg: "This is not the webpage you are looking for" });
        } else {
            console.log("book found");
            return res.json(book[0]);
        }
    });
    //return res.send("ok");



});

module.exports = router;