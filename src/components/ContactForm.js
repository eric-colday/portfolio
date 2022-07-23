import React from 'react'
import { useState } from "react";
import emailjs from 'emailjs-com';
import { useRef } from 'react';

const ContactForm = () => {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      'service_ey10kdh', 
      'template_kfrrmrj', 
      form.current, 
      'dxrha_OOuhjt2tjQX'
    )
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    setMessage(true);
  };
  return (
    <div className="contact">
      <div className="left">
        <img src="media/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nom"/>
          <br/>
          <input type="email" name="user_email" placeholder="Email" />
          <br/>
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Envoi</button>
          {message && <span>Merci, je vous répondrai d'ici peu :)</span>}
        </form>
      </div>
    </div>
  )
}

export default ContactForm
