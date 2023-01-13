import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">How can you contact me?</h2>
      <div className="contact__container paper-box">
        <div className="contact__info">
          <h3 className="contact__title">
            Do you hate the difficulty in communicating? Try this form! 👇
          </h3>
          <p className="contact__details">It is free and always will be.</p>
        </div>
        <form
          className="contact__form"
          action="https://formsubmit.co/omarrisha1r@hotmail.com"
          method="POST"
        >
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                name="name"
                type="text"
                className="contact__form-input "
                placeholder="Your name..."
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                name="email"
                type="email"
                className="contact__form-input"
                placeholder="Your email..."
                required
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              name="subject"
              type="text"
              className="contact__form-input"
              placeholder="Your subject..."
              required
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="text"
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
