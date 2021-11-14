import { useState, useEffect, useRef } from "react";
import { useAuth } from '../Auth/Auth.context'
import { useParams } from "react-router";
import cn from "classnames";
import useDynamicHeightField from "./useDynamicHeightField";

import style from './Comments.css'


export function CommentsForm(props) {

const {id} = useParams;
const [book, setBooks] = useState([]);

    useEffect(() => {
       fetch(`http://localhost:3001/books/${props.id}`)
        .then((res) => res.json())
        .then((book) => {setBooks(book); console.log(book)});
   }, [props.id]); 

  const INITIAL_HEIGHT = 46;


  const {auth} = useAuth(); 
  const [isExpanded, setIsExpanded] = useState(false);
  const [comment, setComment] = useState('');
  const [name, setName] = useState(''); 

  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  useDynamicHeightField(textRef, comment);

  const onExpand = () => {
    if (!isExpanded) {
      outerHeight.current = containerRef.current.scrollHeight;
      setIsExpanded(true);
    }
  };

  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  const OnChangeName = (e) => {
    setName(e.target.value)
  }


  const onClose = () => {
    setComment('');
    setName(''); 
    setIsExpanded(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

   fetch(`http://localhost:3001/books/${props.id}` , {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + auth.accessToken,
      },
      body: JSON.stringify({
        comments: [...book.comments, { username: name, text: comment}]
      }),
    }); 
  }

    return(
        <>
        <div className="container">
      <form
        onSubmit={onSubmit}
        ref={containerRef}
        className={cn("comment-box", {
          expanded: isExpanded,
          collapsed: !isExpanded,
          modified: comment.length > 0
        })}
        style={{
          minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT
        }}
      >
        <div className="header">
          <div className="user">
            <img
              src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
              alt="User avatar"
            />
            <span>
              <label className="label-comment" htmlFor="name"></label>
              <input
                className="input-form"
                type="text"
                name="name"
                value={name}
                onChange={OnChangeName}/>
            </span>
          </div>
        </div>
        <label htmlFor="comment" className="label-comment">What are your thoughts?</label>
        <textarea
          ref={textRef}
          onClick={onExpand}
          onFocus={onExpand}
          onChange={onChangeComment}
          className="comment-field comment-textarea"
          placeholder="What are your thoughts?"
          value={comment}
          name="comment"
          id="comment"
        />
        <div className="actions">
          <button type="button" className="cancel" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" disabled={comment.length < 1}>
            Post
          </button>
        </div>
      </form>
    </div>

    </>
    )
 };