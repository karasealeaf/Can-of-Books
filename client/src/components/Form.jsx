import { useState } from "react";
import axios from "axios";

export default function Form({ books, setBooks }) {
  const [formData, setFormData] = useState({
    title: "",
    descriptiion: "",
    status: "",
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function submitForm(event) {
    event.preventDefault();
    const API = "http://localhost:8080/books";
    const res = await axios.post(API, formData);
    setBooks([...books, res.data]);
  }

  return (
    <form onSubmit={submitForm}>
      <input name="title" placeholder="title" onChange={handleChange} />
      <input
        name="description"
        placeholder="description"
        onChange={handleChange}
      />
      <select name="status" placeholder="status" onChange={handleChange}>
        <option value={true}>Read</option>
        <option value={false}>Unread</option>
      </select>
      <button>Add Book</button>
    </form>
  );
}
