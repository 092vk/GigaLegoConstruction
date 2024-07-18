import React, { useState } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';

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
      <div className='container'>
        <div className='left-section'>
          <h1>CONTACT US @ GIGA LEGO</h1>
          <div className='heading2'>We'd Love to Hear from You!</div>
          <div className='heading3'>
            Whether you have a question about our services, pricing, need a consultation, or anything else, our team is ready to answer all your questions. Reach out to us and we'll respond as soon as we can.
          </div>
        </div>
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
          <textarea
            cols='30'
            rows='7'
            placeholder='Your Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type='submit' className='button'>Send Email</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
