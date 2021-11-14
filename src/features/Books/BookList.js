import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Auth/Auth.context';
import { useParams } from 'react-router';

import styles from './BookList.css'
import { AddBook } from './AddBook';

export function BooksList() {
  const [ book, setBooks ] = useState(null);
  
  const { auth } = useAuth(); 
  
  useEffect(() => {
      const book = fetch(`http://localhost:3001/books?userId=${auth?.user.id}`).then((res) =>
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
  console.log(id)
  setBooks(book.filter((book) => book.id !== id));
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
                 <button type="button" onClick={() => DeleteBook(book.id)}>Del</button>
                 <button type="button" onClick={() => AddBook}>Add New Book</button>
             </p>
        </div>
      ))}
      </div>
    </>
  );
}