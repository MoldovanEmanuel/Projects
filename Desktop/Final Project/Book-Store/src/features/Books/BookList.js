import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Auth/Auth.context';
import { books } from '../../db.json'

import styles from './BookList.css'

export function BooksList() {
  const [ book, setBooks ] = useState(null);
  
  const { auth } = useAuth(); 

  useEffect(() => {
     function getBooks() {
      const book = fetch(`http://localhost:3001/books?userId=${auth?.user.id}`).then((res) =>
        res.json()
      );
    setBooks(book);}
    getBooks();

}, []);


  return (
    <>
      {!books && <h2>Loading ...</h2>}
      <div className="gridcontainer">
      {books?.map((book) => (
        <div className="booklist"> 
              <p key={book.id}>
                 <p><Link to={`/books/${book.id}`}>{book.title}</Link></p>
                 <img src={book.image} alt="" />
             </p>
        </div>
      ))}
      </div>
    </>
  );
}