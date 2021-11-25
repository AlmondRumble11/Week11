var express = require('express');
var router = express.Router();
const Books = require("../models/Books");
const mongoose = require("mongoose");


router.get('/:bookname', (req, res, next) => {
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