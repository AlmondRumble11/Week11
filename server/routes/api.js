var express = require('express');
var router = express.Router();
const Books = require("../models/Books");
const mongoose = require("mongoose");

router.post('/book/', (req, res, next) => {
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

module.exports = router;