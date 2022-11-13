import React, { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact2.png" alt="shake" />
      </div>
      <div className="right">
        <h2>Get in touch</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I will get back to you ASAP :)</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
