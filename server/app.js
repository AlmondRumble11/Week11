var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");

//var indexRouter = require('./routes/index');
var bookRouter = require('./routes/book');
var apiRouter = require('./routes/api');



var app = express();


const mongoDB = "mongodb://localhost:27017/testdb";
mongoose.connect(mongoDB);
mongoose.Promise = Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));
console.log("opened db:" + mongoDB);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', apiRouter);
app.use('/books', bookRouter);


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve("..", "client", "build")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve("..", "client", "build", "index.html"));
    });
} else if (process.env.NODE_ENV === "development") {
    var corsOptions = {
        origin: "http://localhost:3000",
        optionsSuccessStatus: 200,
    };
    app.use(cors(corsOptions));
}


module.exports = app;