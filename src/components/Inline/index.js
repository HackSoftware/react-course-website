import React from 'react';

import styles from './styles.module.css';

export default ({children}) => {
  return <span className={styles.Inline}>{children}</span>;
};
