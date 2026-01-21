import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../../utils/Auth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// serviceID: gmail, templateID: template_id11uyr, publicKey: aBs3fCS1E1dfeDTvT
// template from https://www.emailjs.com/docs/examples/reactjs/
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formMessage, setFormMessage] = useState("");

  // adds error messages to the form
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setFormMessage("Your email is invalid.");
      } else {
        setFormMessage("");
      }
    } else {
      if (!e.target.value.length) {
        const name = e.target.name;
        setFormMessage(
          `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`
        );
      } else {
        setFormMessage("");
      }
    }

    if (!formMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  // sends the email or surfaces an error on submission
  function sendEmail(e) {
    e.preventDefault();

    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //   };
    // serviceID: gmail, templateID: template_id11uyr, publicKey: aBs3fCS1E1dfeDTvT
    emailjs
      .sendForm(
        "gmail",
        "template_id11uyr",
        "#contactForm",
        "aBs3fCS1E1dfeDTvT"
      )
      .then(
        function (response) {
          console.log(response.text);
          setFormMessage("Message sent!");
        },
        function (error) {
          console.log(error.text);
          setFormMessage("Your message couldn't be sent.");
        }
      );
  }

  return (
    // name section
    <Form onSubmit={sendEmail} id="contactForm" className="floating-box-bg">
      <Form.Group controlId="name">
        <Form.Label className="contact-title">Your Name</Form.Label>
        <Form.Control
          required
          name="name"
          placeholder="Jane Doe"
          onBlur={handleChange}
        />
      </Form.Group>

      {/* email section */}
      <Form.Group controlId="email">
        <Form.Label className="contact-title">Your Email</Form.Label>
        <Form.Control
          required
          name="email"
          type="email"
          placeholder="jdoe@gmail.com"
          onBlur={handleChange}
        />
      </Form.Group>

      {/* subject section */}
      <Form.Group controlId="subject">
        <Form.Label className="contact-title">Subject</Form.Label>
        <Form.Control
          required
          name="subject"
          placeholder="Subject"
          onBlur={handleChange}
        />
      </Form.Group>

      {/* message section */}
      <Form.Group controlId="message">
        <Form.Label className="contact-title">Message</Form.Label>
        <Form.Control
          required
          name="message"
          as="textarea"
          rows="5"
          placeholder="Message"
          onBlur={handleChange}
        />
      </Form.Group>

      {formMessage && <p className="form-message">{formMessage}</p>}
      <br></br>
      <Button type="submit" className="all-btns p-2 rounded">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
