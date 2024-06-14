import React from 'react';
import styles from './Contact.module.css';
import { SlSocialLinkedin } from "react-icons/sl";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div name="Contact" className={styles.contact}>
      <h2>Contact</h2>
      <form className={styles.form}>
        <label for="Name">Name</label>
        <input id="Name" name="Name" className={styles.input}></input>
        <label for="Email">Email</label>
        <input id="Email" name="Email" className={styles.input}></input>
        <label>Message</label>
        <textarea></textarea>
        <button type="submit">Enviar</button>
      </form>
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}><SlSocialLinkedin /> Luciana Rios</div>
        <div className={styles.contactItem}><CgMail /> lucianarios20.lr@gmail.com</div>
        <div className={styles.contactItem}><FaGithub /> Lucianaarios</div>
      </div>
    </div>
  )
}

export default Contact