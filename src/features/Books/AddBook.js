import { useState } from "react"; 
import { useAuth } from "../Auth/Auth.context";

export function AddBook() {

    const { auth } = useAuth(); 

    const [ newBook, setNewBook ] = useState({
        id: '',
        title: '', 
        author: '',
        year: '', 
        genre: '', 
        language: '', 
        pages: '', 
        ISBN: '', 
        price: '', 
        description: '',
      })        

function handleAddBook(e) {
   fetch('http://localhost:3001/books', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${auth?.accessToken}`,
      },
      body: JSON.stringify({
        id: newBook.id,
        title: newBook.title, 
        author: newBook.author,
        year: newBook.year, 
        genre: newBook.genre, 
        language: newBook.language, 
        pages: newBook.pages, 
        ISBN: newBook.ISBN, 
        price: newBook.price, 
        description: newBook.description
      }),
    }).then((res) => res.json());
  };


  function handleChange(e) {
    const newValues = { ...newBook };
    newValues[e.target.name] = e.target.value;
    setNewBook(newValues)
} 

 return (
    <>
      <div className="edit-container">

      <form>

        <label htmlFor="title" className="edit-label-form">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={newBook.title}
          onChange={handleChange}
          required
          className="edit-input-form"
          autoComplete="off"
        />
        <label htmlFor="author" className="edit-label-form">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={newBook.author}
          onChange={handleChange}
          required
          className="edit-input-form"
          autoComplete="off"
        />
        <label htmlFor="year" className="edit-label-form">Year</label>
          <input
          type="number"
          id="year"
          name="year"
          value={newBook.year}
          onChange={handleChange}
          required
           className="edit-input-form"
           autoComplete="off"
        />
        <label htmlFor="genre" className="edit-label-form">Genre</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={newBook.genre}
          onChange={handleChange}
          required
           className="edit-input-form"
           autoComplete="off"
        />
        <label htmlFor="language" className="edit-label-form">Lnguage</label>
          <input
          type="text"
          id="language"
          name="language"
          value={newBook.language}
          onChange={handleChange}
          required
          className="edit-input-form"
          autoComplete="off"
        />
        <label htmlFor="pages" className="edit-label-form">Pages</label>
          <input
          type="number"
          id="pages"
          name="pages"
          value={newBook.pages}
          onChange={handleChange}
          required
          className="edit-input-form"
          autoComplete="off"
        />
        <label htmlFor="ISBN" className="edit-label-form">ISBN</label>
          <input
          type="number"
          id="ISBN"
          name="ISBN"
          value={newBook.isbn}
          onChange={handleChange}
          required
          className="edit-input-form"
          autoComplete="off"
        />
        <label htmlFor="price" className="edit-label-form">Price</label>
          <input
          type="number"
          id="price"
          name="price"
          value={newBook.price}
          onChange={handleChange}
          required
          className="edit-input-form"
          autoComplete="off"
        />
        <label htmlFor="description" className="edit-label-form">Description</label>
          <textarea
          type="text"
          id="description"
          name="description"
          value={newBook.description}
          onChange={handleChange}
          required
          className="edit-input-form edit-textarea"
          autoComplete="off"
        />

        <button className="edit-btn" onClick={() => handleAddBook()}>Save</button>
      </form>
      </div>
    </>
  );
}

