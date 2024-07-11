import React, { useState } from 'react';
import './Career.css';
import emailjs from '@emailjs/browser';

// this was made using emailjs , it allows to send 200 free email/month


function ContactUs() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_SERVICE_ID;

  const handleSubmit = (e) => {
    e.preventDefault();

    const Eparams = {
      form_name: name,
      form_email: email,
      form_message: message,
      to_name: 'vivek', // Replace with the actual recipient's name
    };

    emailjs.send(serviceId, templateId, Eparams, publicKey)
      .then((response) => {
        console.log('Email sent:', response);
        // Reset form fields after successful submission if needed
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  return (
    <div className='ContactUs'>
      <h1>Career@GigaLegoConstruction</h1>
      <form className='emailForm' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Your Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type='email'
          placeholder='Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

          <input
          type='text'
          placeholder='Position Applying'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />

        <textarea
          cols='30'
          rows='10' // Adjusted rows for better visibility
          placeholder='Your Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type='submit' className='button'>Send Email</button>
      </form>
    </div>
  );
}

export default ContactUs;
