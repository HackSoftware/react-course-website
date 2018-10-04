import React from 'react'

import reactImage from './react-icon.svg'
import styles from './styles.module.css'

export default () => {
  return (
    <img
      src={reactImage}
      width="120"
      className={styles.ReactLogo}
      alt="react logo"
    />
  )
}
