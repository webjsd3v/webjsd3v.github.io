import React from 'react';
import styles from './app.module.scss'

function App({title}) {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

export default App;
