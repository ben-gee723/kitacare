import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import Dashboard from "./Dashboard";
import styles from "./manager.module.scss";
import { Link } from "react-router-dom";

export default function Manager() {
  return (
    <>
      <div className={styles.mpContainer}>
        <div className={styles.mInfo}>
          <div className={styles.mImg}>
            <img src='' alt='' />
          </div>
          <p>Name Surname</p>
          <p>E-mail: 123</p>
          <p>Phone number: 123</p>
          <p>Group: 123</p>
          <br />
          <button type='submit' value='Next' className='next'>
            Edit
          </button>
        </div>
        <div className={styles.features}>
          <div className={styles.mGroup}>
            <h3>Groups</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              doloribus voluptatibus odio perspiciatis asperiores repellendus
              illo et facere veritatis sint laborum.
            </p>
            <li>total number: 9</li>
            <br />
            <button type='submit' value='view' className='view'>
              View
            </button>
            <button type='submit' value='add' className='add'>
              Add
            </button>
          </div>
          <div className={styles.mTeachers}>
            <h3>Teachers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              doloribus voluptatibus odio perspiciatis asperiores repellendus
              illo et facere veritatis sint laborum.
            </p>
            <li>Number of teachers: 8</li>
            <br />
            <Link to='/teachers'>
              <button type='submit' value='view' className='view'>
                View
              </button>
            </Link>
          </div>
          <div className={styles.mTodo}>
            <Dashboard />
          </div>
          <div className={styles.calendar}>
            <Calendar />
          </div>
        </div>
      </div>
    </>
  );
}
