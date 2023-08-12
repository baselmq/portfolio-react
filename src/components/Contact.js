import React, { useRef, useState } from "react";
import location from "../assets/icon/location.svg";
import phone from "../assets/icon/phone.svg";
import emailjs from "@emailjs/browser";
import SocialMedia from "./SocialMedia";
import ListLinks from "../data/ListLinks";
const Contact = () => {
  const form = useRef();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [btnText, setBtnText] = useState("Send");
  const [isActive, setIsActive] = useState(false);
  // Full Name Validation
  const checkFullName = () => {
    const namePattern = /^[\p{L}]{3,}$/u;
    return formSubmitted && !fullName.match(namePattern);
  };

  // Email Validation
  const checkEmail = () => {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return formSubmitted && !email.match(emailPattern);
  };
  const checkMessage = () => {
    const messagePattern = /^(?!\s*$).+/;
    return formSubmitted && !message.match(messagePattern);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const allFieldsValid = !checkFullName() && !checkEmail() && !checkMessage();
    const allValue = fullName !== "" && email !== "" && message !== "";

    if (allFieldsValid && allValue) {
      console.log("allFieldsValid");
      emailjs
        .sendForm(
          "service_4bv3lg8",
          "template_el2qvva",
          form.current,
          "isGUEnyvZiGN1lb8p"
        )
        .then(
          (result) => {
            setBtnText("Thanks");
            setIsActive(true);
            setFullName("");
            setEmail("");
            setMessage("");
            setFormSubmitted(false);

            setTimeout(() => {
              setBtnText("Send");
              setIsActive(false);
            }, 5000);
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <div id="contact"></div>
      <section className="contact-me">
        <div className="title-contact">Contact Me</div>
        <div className="container-contact">
          <div>
            <div className="description">
              DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR
              ALL.
            </div>
            <div className="phone">
              <img src={phone} alt="phone" />
              <div>
                <a href="tel: +962787159816"> +962787159816</a>
              </div>
            </div>
            <div className="location">
              <img src={location} alt="location" />
              <div>Amman, Jordan</div>
            </div>

            {/* social media links */}
            <div className="social-media">
              {ListLinks.map((item, index) => (
                <span key={index}>
                  <SocialMedia
                    link={item.link}
                    image={item.image}
                    alt={item.alt}
                  />
                </span>
              ))}
            </div>
          </div>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <div
              className={`field email-field ${
                checkFullName() ? "invalid" : ""
              }`}
            >
              <div className="div-text">
                <label>Name:</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder=" Enter Name..."
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              {formSubmitted && checkFullName() && (
                <span className="error fullName-error">Please enter Name</span>
              )}
            </div>

            <div
              className={`field email-field ${checkEmail() ? "invalid" : ""}`}
            >
              <div className="div-text">
                <label>Email:</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder=" Enter Email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {formSubmitted && checkEmail() && (
                <span className="error email-error">
                  Please enter a valid email
                </span>
              )}
            </div>

            <div
              className={`field email-field ${checkMessage() ? "invalid" : ""}`}
            >
              <div className="div-textarea">
                <label>Message:</label>
                <textarea
                  name="message"
                  placeholder=" Write Message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              {formSubmitted && checkMessage() && (
                <span className="error email-error">
                  Please enter a message
                </span>
              )}
            </div>

            {/* <div className="btn-contact">
              <input type="submit" value="send" />
            </div> */}
            <div className="btn-contact">
              <button id="btn-send" className={isActive ? "active-send" : ""}>
                <p id="btnText-send">{btnText}</p>
                <div className="check-box-send">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                  </svg>
                </div>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
