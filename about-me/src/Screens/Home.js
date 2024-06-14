import React from 'react';
import styles from './Home.module.css'

const Home = () => {
  return (
    <div name="Home" className={styles.home}>
      <div className={styles.titleContainer}>
        <p>
          Luciana Rios <br />
        </p>
        <div>
        <img className={styles.miImage} src={require('../assets/miFoto.jpeg')}/>
        </div>
        <p>
          Full Stack developer <br />
          <b>JavaScript</b>
        </p>
      </div>
    </div>
  )
}

export default Home