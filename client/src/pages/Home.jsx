import { Link } from "react-router-dom";
import Form from "../components/Form";

export default function Home({ books, setBooks, deleteBook }) {
  return (
    <>
      <section id="carousel">
        {books.map((book) => {
          return (
            <div className="booksection" key={book._id}>
              <Link to={`/book/${book._id}`}>
                <h2>{book.title}</h2>
                <img src={book.imgURL} />
              </Link>
              {book.status ? <p>Read</p> : <p>Unread</p>}
              <button onClick={() => deleteBook(book._id)}>Delete Book</button>
            </div>
          );
        })}
      </section>
      <Form books={books} setBooks={setBooks} />
    </>
  );
}
