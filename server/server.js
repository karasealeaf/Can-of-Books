const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
const PORT = 8080;
const mongoose = require("mongoose");

const Book = require("./models/books");

mongoose.connect(process.env.DATABASE_URL);

/*const books = [
  {
    title: "Paddington 2",
    author: "Nick Cage",
    year: 1990,
    imgURL: "",
    summary: "",
  },
  {
    title: "How to kill a mocking bird",
    author: "Kara Sealeaf",
    year: 1990,
    imgURL: "",
  },
  {
    title: "",
    author: "",
    year: 1990,
    imgURL: "",
  },
];*/

app.get("/", (_, response) => {
  response.json("You're looking at my root route. Roude.");
});

app.get("/books", async (request, response) => {
  //request.query is an object, empty by default, but has properties if we add them to the URL
  //find() accepts an obeject and filters by any properties it has in it
  const books = await Book.find(request.query);
  response.json(books);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
