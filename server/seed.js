const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("./models/book");

mongoose.connect(process.env.MONGODB_STRING);

async function seed() {
  await Book.create([
    {
      title: "Lord of the Rings",
      description: "Funny little monsters",
      imgURL:
        "https://miro.medium.com/v2/resize:fit:1400/1*9rk5NGrZE7cPNTOPs3YxKg.jpeg",
      status: true,
    },
    {
      title: "The Bible",
      description: "God stuff",
      imgURL:
        "https://miro.medium.com/v2/resize:fit:1400/1*9rk5NGrZE7cPNTOPs3YxKg.jpeg",
      status: false,
    },
    {
      title: "The Dictionary",
      description: "A lot of words",
      imgURL:
        "https://miro.medium.com/v2/resize:fit:1400/1*9rk5NGrZE7cPNTOPs3YxKg.jpeg",
      status: true,
    },
  ]);
  console.log("book created");

  mongoose.disconnect();
}
seed();
// On mongodb - click database - browse colletions - delete "drop the collection books" - the word books is a pluralised version on book.js. The word test comes from our .env file.
