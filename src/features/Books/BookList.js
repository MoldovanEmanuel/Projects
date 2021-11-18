import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Auth/Auth.context';
import { Modal } from '../../components/Modal/Modal';

import './BookList.css';


export function BooksList() {
  const [ book, setBooks ] = useState(null);
  const [ showModal, setShowModal ] = useState(false); 
  
  const { auth } = useAuth(); 
  
  useEffect(() => {
      fetch(`http://localhost:3001/books`).then((res) =>
        res.json().then((res) => setBooks(res))
      );
}, []);

function DeleteBook(id) {
   fetch('http://localhost:3001/books/' + id, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${auth?.accessToken}`,
      },
    }, []);
  setBooks(book.filter((book) => book.id !== id));
  setShowModal(true); 
}

  return (
    <>
      {!book && <h2>Loading ...</h2>}
      <div className="gridcontainer">
      {book?.map((book) => (
        <div className="booklist"> 
              <p key={book.id}>
                 <p><Link to={`/books/${book.id}`}>{book.title}</Link></p>
                 <img src={book.image} alt="" />
                 <button type="button" className="delete-book" onClick={() => setShowModal(true)}> Delete This Book</button>
             </p>

      <Modal show={showModal} onClose={() => setShowModal(true)}>

        <form onSubmit={() => DeleteBook} onClick={() => setShowModal(false)}>
          <p>Are you sure you want to delete this book?</p>
          <button type="button" className="delete-book" onClick={() => DeleteBook(book.id)}>Yes</button>
          <button type="button" className="delete-book" onClick={() => setShowModal(false)}>Noo</button>
        </form>

      </Modal>
        </div>
      ))}
      </div>
    </>
  );
}