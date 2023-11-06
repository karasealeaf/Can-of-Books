const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("./models/book");

mongoose.connect(process.env.MONGODB_STRING);

async function seed() {
  await Book.create([
    {
      title: "Lord of the rings",
      description: "Funny little monsters",
      status: "Read",
    },
    {
      title: "The bible",
      description: "God stuff",
      status: "Unread",
    },
    {
      title: "The Dictionary",
      description: "A lot of words",
      status: "Unread",
    },
  ]);
  console.log("book created");

  mongoose.disconnect();
}

// On mongodb - click database - browse colletions - delete "drop the collection books" - the word books is a pluralised version on book.js. The word test comes from our .env file.
