import React from 'react'
import Step from '../Components/Step'
import styles from './Skills.module.css'

const Skills = () => {
  const steps = [
    {
      text: "JavaScript, Typescript, React.js, Redux, Next.js, CSS, HTML",
      id: 1,
    },
    {
      text: "Node.js, Express.js, SQL, PostgreSQL, Sequelize",
      id: 2,
    },
    {
      text: "GitHub, GitFlow",
      id: 3,
    },
    {
      text: "Conocimientos en Wordpress",
      id: 4,
    },
   
  ]
  return (
    <div name="Skills" className={styles.skills}>
      <h2 className={styles.title}>Skills</h2>
      {steps.map((x) => (
       <Step text={x.text} />
      ))}
    </div>
  )
}

export default Skills