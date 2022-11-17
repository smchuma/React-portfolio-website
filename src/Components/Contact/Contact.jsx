import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
          toast(`${result.text}, I will get back to you ASAP!`);
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
          <input type="text" name="user_name" placeholder="Name" required />

          <input type="email" name="user_email" placeholder="Email" required />

          <textarea name="message" placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
};

export default Contact;
