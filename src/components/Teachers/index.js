import React from 'react'

import styles from './styles.module.css'
import radoslav from './radoslav.png'
import ivaylo from './ivaylo.png'

export default () => {
  return (
    <div className={styles.Container}>
      <div className={styles.TeacherContainer}>
        <img className={styles.TeacherImage} src={radoslav} alt="Radoslav" />
        <div className={styles.TeacherInfo}>
          <p className={styles.TeacherName}>Radoslav Georgiev</p>
          <ul>
            <li>CEO at HackSoft.</li>
            <li>Using React everday in a big single page project.</li>
            <li>
              8 years of experience with JavaScript and frontend technologies
            </li>
            <li>
              6 years of experience teaching different courses, including
              Python, JavaScript and Haskell
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.TeacherContainer}>
        <img className={styles.TeacherImage} src={ivaylo} alt="Ivaylo" />
        <div className={styles.TeacherInfo}>
          <p className={styles.TeacherName}>Ivaylo Bachvarov</p>
          <ul>
            <li>CTO at HackSoft.</li>
            <li>Using React everday in a big single page project.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
