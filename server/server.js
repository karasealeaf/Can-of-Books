const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;

const mongoose = require("mongoose");
const Book = require("./models/book");
mongoose.connect(process.env.MONGODB_STRING);

app.get("/", (_, response) => {
  response.json("You're looking at my root route. Roude.");
});

app.get("/books", async (request, response) => {
  const books = await Book.find(request.query);
  response.json(books);
});

app.post("/books", async (request, response) => {
  const newBook = await Book.create(request.body);
  response.json(newBook);
});

app.delete("/books/:id", async (request, response) => {
  const deletedBook = await Book.findByIdAndDelete(request.params.id);
  response.json(deletedBook);
});

app.put("/books/:id", async (request, response) => {
  const updatedBook = await Book.findByIdAndUpdate(request.params.id, request.body);
  response.json(updatedBook);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
