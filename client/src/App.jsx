import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const API = `http://localhost:8080/books`;
    const res = await axios.get(API);
    setBooks(res.data);
  }

  return (
    <>
      <h2>Books</h2>
      <p>The ultimate book database</p>
      <button onClick={getBooks}>Get Books</button>
      {books.map((book) => {
        return (
          <div key={book._id}>
            <h2>{book.title}</h2>
            <img src={book.imgURL} />
          </div>
        );
      })}
    </>
  );
}

export default App;
