import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";

export default function Book() {
  const [book, setBook] = useState({});

  const params = useParams();

  useEffect(() => {
    getBook();
  }, []);

  async function getBook() {
    const API = `http://localhost:8080/books?_id=${params.id}`;
    const res = await axios.get(API);
    setBook(res.data[0]);
  }

  return (
    <>
      <div key={book._id}>
        <h2>{book.title}</h2>
        <img src={book.imgURL} />
        <p>{book.description}</p>
        {book.status ? <p>yes</p> : <p>no</p>}
        {book.title && <Form book={book} setBook={setBook} />}
      </div>
    </>
  );
}
