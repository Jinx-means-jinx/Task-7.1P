import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Email.css'

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5qwldga', 'template_75gjs3f', form.current, 'PBm9ErYdTrTXZDqAy')
      .then((result) => {
          alert('Message sent successfully')
      }, (error) => {
          alert(error.message);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>SIGN UP FOR OUR DAILY INSIDER</label>
      <input className='box' type="email" name="user_email" placeholder="Enter your email" />
      <input className='button' type="submit" value="Subscribe" />
    </form>
  );
};

export default Email