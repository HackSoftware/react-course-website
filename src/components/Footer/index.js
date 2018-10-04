import React from 'react'

import styles from './styles.module.css'

export default () => {
  return (
    <div className={styles.Footer}>
      <p>
        Made with{' '}
        <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>{' '}
        by{' '}
        <a href="https://hacksoft.io" target="_blank" rel="noopener noreferrer">
          HackSoft
        </a>
      </p>
    </div>
  )
}
