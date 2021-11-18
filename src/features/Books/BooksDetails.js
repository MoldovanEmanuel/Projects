import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CommentsForm } from '../Comments/CommentsForm'
import { Comment } from '../Comments/Comments';

import './BooksDetails.css'

export function BooksDetails() {

  const { id } = useParams(); 
  
  const [book, setBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/books/${id}`)
    .then((res) => res.json())
    .then((book) => setBooks(book));
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
        <p className="resume"> <span> Description: </span> <h4 className="resume-text">{book.description}</h4></p>
        <button className="buy-btn">Buy</button>

        <Link to={`/books/edit/${id}`} className="edit-book">Edit This Book</Link>
        </div>
        
        <CommentsForm id={id} />
        <Comment comments={book.comments}/>
        
    </>
  )};