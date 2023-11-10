import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Header from "./components/Header";
import LoginButton from "./components/LoginButton";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const API = `https://can-of-books-nq10.onrender.com/books`;
    const res = await axios.get(API);
    setBooks(res.data);
  }

  async function deleteBook(id) {
    const check = confirm("You sure about that?");
    if (check) {
      const API = `https://can-of-books-nq10.onrender.com/books/${id}`;
      await axios.delete(API);
      getBooks();
    } else {
      alert("Phew, that was a close one!");
    }
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home books={books} deleteBook={deleteBook} setBooks={setBooks} />
          }
        />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
