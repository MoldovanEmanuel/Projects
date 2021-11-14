import { useEffect, useState } from 'react';

import './Contact.css'

export function Contact() {
    
  const  [contact, setContact ] = useState(null);

  useEffect(() => {
    async function getContact() {
      const contactNav = await fetch('http://localhost:3000/contact').then((res) =>
        res.json()
      );
    setContact(contactNav);}
    getContact();
  }, []);

  return (
    <>
    <div className="contact-container">
      <h4>If you don't find the book you're looking for, you can always send us an Email and ask if we have it in stock: </h4>
      <h4> Email: zbookstore@yahoo.com </h4>
      <h4> Our Customer Support Service is as following:</h4>
      <h4> Monday - Friday: 09.00 AM - 20.00 PM</h4>
      <h4> Saturday - Sunday: 10.00 AM - 18.00 PM</h4>
      </div>
    </>
  );
}
