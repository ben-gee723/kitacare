import React from "react";
import Calendar from "../Calendar/Calendar";
import Dashboard from "./Dashboard";
import styles from "./manager.module.scss";
import { Link } from "react-router-dom";

export default function Manager() {
  let today = new Date();
  let curHr = today.getHours();

  const greet = () => {
    if (curHr < 12) {
      console.log("good morning");
    } else if (curHr < 18) {
      console.log("good afternoon");
    } else {
      console.log("good evening");
    }
  };
  return (
    <div className={styles.container}>
      <h1>{greet(curHr)}</h1>
      <div className={styles.card}>
        <h1>Groups</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit hic
          nihil perferendis debitis soluta sunt quos. Commodi, accusantium!
          Nobis magnam deserunt voluptatum officiis dicta nostrum hic autem est
          perferendis. Hic.
        </p>
        <Link to='/gpregister'>
          <button className='add'>Add New</button>
        </Link>
        <Link to='/groups'>
          <button className='view'>View All</button>
        </Link>
      </div>
      <div className={styles.card}>
        <h1>Teacher</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit hic
          nihil perferendis debitis soluta sunt quos. Commodi, accusantium!
          Nobis magnam deserunt voluptatum officiis dicta nostrum hic autem est
          perferendis. Hic.
        </p>
        <Link to='/tregister'>
          <button className='add'>Add New</button>
        </Link>
        <Link to='teachers'>
          <button className='view'>View All</button>
        </Link>
      </div>
      <div>
        <Dashboard />
      </div>
      <div>
        <Calendar />
      </div>
    </div>
  );
}
