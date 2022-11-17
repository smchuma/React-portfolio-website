import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wenwent",
        "template_r4n7lw6",
        form.current,
        "y6eomlyE_s3p8eJs8"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact2.png" alt="shake" />
      </div>
      <div className="right">
        <h2>Get in touch</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Name" />

          <input type="email" name="user_email" placeholder="Email" />

          <textarea name="message" placeholder="Message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
