import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Home() {
    
  const  [home, setHome ] = useState(null);

  useEffect(() => {
    async function getHome() {
      const home= await fetch('http://localhost:3000').then((res) =>
        res.json()
      );
    setHome(home);}
    getHome();
  }, []);

  return (
    <>
      <h1> Welcome to ZBookStore </h1>
      <p>If you already have an account  <Link to={`/login`}>Login</Link></p>
      <p>If you are new to this website  <Link to={`/register`}>Register</Link></p> 
      
    </>
  );
}

