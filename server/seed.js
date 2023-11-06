const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("./models/book");

// connect to our database
mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Book.create(
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
    }
  );
  console.log("book created");

  mongoose.disconnect();
}
seed();

// On mongodb - click database - browse colletions - delete "drop the collection books" - the word books is a pluralised version on book.js. The word test comes from our .env file.
