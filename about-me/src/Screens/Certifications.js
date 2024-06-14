import React from 'react';
import styles from './Certifications.module.css';

const Certifications = () => {
  return (
    <div name="Certifications" className={styles.certifications}>
      <h2 className={styles.certificationsTitle}>
        Full Stack Developer Javascript
        <p>
          <img  className={styles.henryImage} src={require('../assets/henry.jpeg')}/>
        </p>
      </h2>
    </div>
  )
}

export default Certifications