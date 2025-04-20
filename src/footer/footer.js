import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './footer.css';

export const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_956y2xb', 'template_okk6ne9', form.current, {
        publicKey: '1YBPNRcUXnj0TAC4o',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="footer">
      <h1 id="contact">Contact me</h1>
      <p>Feel free to contact me for any questions or feedback on my working and 
      potential Projects</p>
      <form ref={form} className='form' onSubmit={sendEmail}>
        <label>Name</label>
       <input type="text" name="user_name" />
       <br />
       <label>Email</label>
       <input type="email" name="user_email" />
        <br />
       <label>Message</label>
       <textarea name="message" />
       <br />
       <input className='btn' type="submit" value="Send" />
      </form>
      <div className="cv-download">
        <a href="/Anthony_Charles2025-6.pdf" download="Anthony_charles_CV.pdf" className="cv-link" target="_blank">
          Download My CV
        </a>
      </div>
    </div>
  );
};