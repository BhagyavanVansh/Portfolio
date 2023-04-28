import React from "react";
import "./contact.css";
import Image from "../../images/avatar-1.svg";
import { useForm } from "@formspree/react";


const Contact = () => {
  const [state, handleSubmit] = useForm("mrgvrnov");
  if (state.succeeded) {
       window.location.reload(true);
  }
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!💙</h3>
          <p className="contact__details">
            Don't like forms? Send me an email 👋.{" "}
          </p>
          <div className="image">
            <img src={Image} alt="" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                id="text"
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="contact__form-div">
              <input
                id="email"
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              name="Subject"
              className="contact__form-input"
              placeholder="Enter your subject"
              required
            />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea
               id="message"
               name="message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button className="btn" type="submit" disabled={state.submitting}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
