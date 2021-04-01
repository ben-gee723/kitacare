import React from "react";
import styles from "./manager.module.scss";
export default function Dashboard() {
  return (
    <div className={styles.card}>
      <h1>Daily Notes!</h1>
      <textarea
        name='message'
        id='message'
        rows='7'
        cols='40'
        placeholder='Enter your notes here.'
        className={styles.text}
      ></textarea>
    </div>
  );
}
