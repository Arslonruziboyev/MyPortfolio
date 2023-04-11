import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass(`text-animate-hover`);
    }, 4000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm( 'service_xx1oe06', 'template_8oujiqy', refForm.current, 'RSo8PdoPON7ZsCSLH')
      .then((result) => {
          console.log(result.text);
          alert('Message sent')
      }, (error) => {
          console.log(error.text);
          alert('Sorry Failed')
      });
  };
  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
            idx={15}
          />
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
          recusandae commodi dolore quibusdam animi? Maiores. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. At recusandae commodi dolore
          quibusdam animi? Maiores.
        </p>
        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="to_name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="from_name" placeholder="Email" required />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input
                  type="submit"
                  className="flat-button"
                  value="SEND MESSAGE"
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
