import React from 'react';

import styles from './styles.module.css';

export default () => {
  return (
    <div className={styles.Container}>
      <div className={styles.TeacherContainer}>
        <img
          src="https://placeimg.com/300/300/people"
          alt="placeholder"
        />
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
        <img
          src="https://placeimg.com/300/300/people"
          alt="placeholder"
        />
        <div className={styles.TeacherInfo}>
          <p className={styles.TeacherName}>Ivaylo Bachvarov</p>
          <ul>
            <li>CTO at HackSoft.</li>
            <li>Using React everday in a big single page project.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
