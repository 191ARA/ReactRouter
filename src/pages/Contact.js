import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <input type="text" placeholder="Name" className="form-input" />
        <input type="email" placeholder="Email" className="form-input" />
        <textarea placeholder="Message" className="form-textarea"></textarea>
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;