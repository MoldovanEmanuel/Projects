import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../Auth/Auth.context';

import './EditBooks.css'

export function EditBooks() {
  const { id } = useParams();
  const [books, setBooks] = useState(null);
  const { auth } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:3001/books/${id}`)
      .then((res) => res.json())
      .then((books) => setBooks(books));
  }, [id]);

  function handleChange(e) {
    setBooks({ ...books, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const updated = { ...books };
    delete updated.id;

    await fetch('http://localhost:3001/books/' + id, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + auth.accessToken,
      },
      body: JSON.stringify(updated),
    }); 
  }

  // const toBase64 = (file) =>
  //   new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = (error) => reject(error);
  //   });

  // async function fileChange(e) {
  //   console.log(await toBase64(e.target.files[0]));
  // }
  if (!books) {
    return <h2>Loading ...</h2>;
  }
  return (
    <>
      <div className="edit-container">

      <form onSubmit={handleSubmit}>

        <label htmlFor="title" className="edit-label-form">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={books.title}
          onChange={handleChange}
          required
          className="edit-input-form"
        />
        <label htmlFor="writer" className="edit-label-form">Author</label>
        <input
          type="text"
          id="writer"
          name="writer"
          value={books.author}
          onChange={handleChange}
          required
          className="edit-input-form"
        />
        <label htmlFor="year" className="edit-label-form">Year</label>
          <input
          type="number"
          id="year"
          name="year"
          value={books.year}
          onChange={handleChange}
          required
           className="edit-input-form"
        />
        <label htmlFor="genre" className="edit-label-form">Genre</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={books.genre}
          onChange={handleChange}
          required
           className="edit-input-form"
        />
        <label htmlFor="language" className="edit-label-form">Lnguage</label>
          <input
          type="text"
          id="language"
          name="language"
          value={books.language}
          onChange={handleChange}
          required
           className="edit-input-form"
        />
        <label htmlFor="pages" className="edit-label-form">Pages</label>
          <input
          type="number"
          id="pages"
          name="pages"
          value={books.pages}
          onChange={handleChange}
          required
           className="edit-input-form"
        />
        <label htmlFor="ISBN" className="edit-label-form">ISBN</label>
          <input
          type="number"
          id="ISBN"
          name="ISBN"
          value={books.ISBN}
          onChange={handleChange}
          required
           className="edit-input-form"
        />
        <label htmlFor="price" className="edit-label-form">Price</label>
          <input
          type="number"
          id="price"
          name="price"
          value={books.price}
          onChange={handleChange}
          required
           className="edit-input-form"
        />
        <label htmlFor="description" className="edit-label-form">Description</label>
          <textarea
          type="text"
          id="description"
          name="description"
          value={books.description}
          onChange={handleChange}
          required
           className="edit-input-form edit-textarea"
        />
        {/* <label htmlFor="image" className="edit-form">Image</label> */}
        {/* <input type="file" onChange={fileChange} /> */}

        <button className="edit-btn">Save</button>
      </form>
      </div>
    </>
  );
}
