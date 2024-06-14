import React from 'react';
import styles from './AboutMe.module.css'

const AboutMe = () => {
  return (
    <div name="About me" className={styles.background}>
      <div className={styles.container}>
        <h2>Sobre mi</h2>
        <p>
        Soy una persona altamente proactiva con una sólida experiencia en el desarrollo web.
           Disfruto trabajando en equipo y colaborando en la creación de soluciones innovadoras 
         y eficientes en entornos dinámicos.
        Además de mi experiencia técnica, considero que la comunicación efectiva y
        la colaboración interdisciplinaria son aspectos fundamentales para el éxito de cualquier proyecto.
          Me apasiona trabajar con personas diversas y fomentar un ambiente de trabajo productivo y armonioso.
        </p>
      </div>
    </div>
  )
}

export default AboutMe