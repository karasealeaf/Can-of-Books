const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
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

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
