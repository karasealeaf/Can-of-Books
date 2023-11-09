const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("./models/book");

mongoose.connect(process.env.MONGODB_STRING);

async function seed() {
  await Book.create([
    {
      title: "Lord of the Rings",
      description: "Funny little monsters",
      imgURL: "https://is1-ssl.mzstatic.com/image/thumb/Publication116/v4/9c/54/5f/9c545feb-10e0-ecbe-a689-0c8645431182/9780547951942.jpg/600x600bb.jpg",
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
      imgURL: "https://is1-ssl.mzstatic.com/image/thumb/Publication7/v4/e3/c7/5f/e3c75f8f-b16b-cb76-4776-a0f17756aac3/coverArt.96ac89.jpg/600x600bb.jpg",
      status: true,
    },
  ]);
  console.log("book created");

  mongoose.disconnect();
}
seed();
// On mongodb - click database - browse colletions - delete "drop the collection books" - the word books is a pluralised version on book.js. The word test comes from our .env file.
