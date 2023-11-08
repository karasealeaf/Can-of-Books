import { Link } from "react-router-dom";
import Form from "../components/Form";

export default function Home({ books, setBooks, deleteBook }) {
  return (
    <>
      {books.map((book) => {
        return (
          <div key={book._id}>
            <Link to={`/book/${book._id}`}>
              <h2>{book.title}</h2>
              <img src={book.imgURL} />
            </Link>
            {book.status ? <p>yes</p> : <p>no</p>}
            <button onClick={() => deleteBook(book._id)}>Delete Book</button>
          </div>
        );
      })}
      <Form books={books} setBooks={setBooks} />
    </>
  );
}
