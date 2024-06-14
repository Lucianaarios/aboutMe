import React, { useState, useRef, useEffect } from 'react';
import styles from './Contact.module.css';
import { SlSocialLinkedin } from "react-icons/sl";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formRef.current;
    if (form) {
      fetch(form.action, {
        method: form.method,
        body: new FormData(form),
      }).then(() => {
        setSubmitted(true);
        form.reset(); 
      }).catch(error => console.error('Error:', error));
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div name="Contact" className={styles.contact}>
      <h2>Contact</h2>
      {!submitted ? (
        <form
          className={styles.form}
          method="POST"
          action="https://getform.io/f/pbgxenea"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <label htmlFor="Name">Name</label>
          <input id="Name" name="Name" className={styles.input} required />
          <label htmlFor="Email">Email</label>
          <input
            id="Email"
            name="Email"
            type="Email"
            className={styles.input}
            required
          />
          <label htmlFor="Message">Message</label>
          <textarea id="Message" name="Message" className={styles.input} required></textarea>
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <div className={styles.thankYouMessage}>
          <p>El mensaje se ha enviado con exito</p>
        </div>
      )}
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <SlSocialLinkedin /> Luciana Rios
        </div>
        <div className={styles.contactItem}>
          <CgMail /> lucianarios20.lr@gmail.com
        </div>
        <div className={styles.contactItem}>
          <FaGithub /> Lucianaarios
        </div>
      </div>
    </div>
  );
}

export default Contact;
