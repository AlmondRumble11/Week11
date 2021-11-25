//get mongoose
const mongoose = require("mongoose");

//get schema
const Schema = mongoose.Schema;

//tells what is inside the db collection
let bookShema = new Schema({
    name: String,
    author: String,
    pages: Number
});

module.exports = mongoose.model("Books", bookShema);