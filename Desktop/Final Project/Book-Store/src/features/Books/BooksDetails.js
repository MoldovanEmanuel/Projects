import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CommentsForm } from '../Comments/CommentsForm'

import styles from './BooksDetails.css'

export function BooksDetails() {

  const { id } = useParams(); // { id: 14 }
  
  const [book, setBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/books/${id}`)
    .then((res) => res.json())
    .then((book) => {setBooks(book); console.log(book)});
  }, [id]); 

  return (
    <>
        <div className="bookdetails">
        <p key={book.id}></p>
        <p className="title"> <span> Title: </span>{book.title} </p>
        <img src={book.image} className="img" alt={book.title}/>
        <p className="author"> <span> Author: </span> {book.author} </p>
        <p className="year"> <span> Written in: </span> {book.year} </p>
        <p className="language"> <span> Language: </span>{book.language} </p>
        <p className="genre"> <span> Genre: </span>{book.genre} </p>
        <p className="pages"> <span> Pages: </span>{book.pages} </p>
        <p className="isbn"> <span> ISBN: </span>{book.ISBN} </p>
        <p className="price"> <span> Price: </span>{book.price} $ </p>
        <p className="description"> <span> Description: </span>{book.description}</p>
        <button className="buy-btn-des">Buy</button>

        <Link to={`/books/edit/${id}`} className="edit-book">Edit this book</Link>
        </div>
        
        <CommentsForm id={id} />
    </>
  )}; 

























