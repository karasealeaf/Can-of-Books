const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  imgURL: String,
  author: String,
  year: Number,
  summary: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
