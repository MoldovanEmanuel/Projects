import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Home.css'

export function Home() {
    
  const  [home, setHome ] = useState(null);

  useEffect(() => {
     fetch('http://localhost:3000')
     .then((res) => res.json());
    setHome(home);
  }, [home]);

  return (
    <>
      <h1> Welcome to SpookStore </h1>
      <h3>
        This Bookstore Web-site started from my passion for reading as well as for the inability to find certain type of books (regarding a specific genre: Horror). 
        The main goal is to acquire (and then sell) books that are not so easy to find in every bookstore corner.  

        Currently, I managed to get together a beautiful collection of: 
        <ul className="main-collection">
          <li>Edgar Allan Poe</li>
          <li>H. P. Lovecraft</li>
          <li>Stephen King</li>
        </ul>

        If you would like to make any suggestion for a book, feel free to contact us. <br/>
        In order to the store, you need an account. 



      </h3>

      <p>If you already have an account  <Link className="redirect-to-login" to={`/login`}>Login</Link></p>
      <br/>
      <p>If you are new on this website  <Link className="redirect-to-register" to={`/register`}>Register</Link></p> 
      
    </>
  );
}

