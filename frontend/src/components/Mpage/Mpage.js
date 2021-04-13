/** @format */

import React, { useState, useEffect, useContext } from "react";
import styles from "./Mpage.module.scss";
import { Link } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import ToDo from "../ToDo/ToDo";
import axios from "axios";
import { MyContext } from "../../Container";
import managerImg from "../../images/manager.svg";

export default function Mpage(props) {
  const [groups, setGroups] = useState([]);
  const { kg, user } = useContext(MyContext);

  const handleEdit = () => {
    props.history.push({ pathname: "/editUserProfile" });
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3001/groups/getAllGroups/${user.kg} `,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        if (result.data.success) {
          setGroups(result.data.allGroups);
        } else {
          console.log(result);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className={styles.welcome}>
        <h2>Welcome {user.firstName}!</h2>
      </div>
      <div className={styles.mpContainer}>
        <div className={styles.mInfo}>
          <div className={styles.mImg}>
            <img src={managerImg} alt='manager' />
          </div>
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{user.email}</p>
          <button
            type='submit'
            value='edit'
            className='edit'
            onClick={() => handleEdit()}>
            Edit info
          </button>
        </div>

        <div className={styles.features}>
          <div className={styles.mGroup}>
            <h3>Groups</h3>
            <p>Find all the groups information:</p>
            <p>how many children per group, ages, weekely plans and more!</p>
            <p>Total: {groups.length}</p>
            <Link to='/groups'>
              <button type='submit' value='view' className='view'>
                View
              </button>
            </Link>
          </div>
          <div className={styles.mTeachers}>
            <h3>Teachers</h3>
            <p>Find all the teacher information:</p>
            <p>
              how many children in that teachers group and all the teachers
              necessary information!
            </p>
            <p>Total: {groups.length}</p>
            <Link to='/teachers'>
              <button type='submit' value='view' className='view'>
                View
              </button>
            </Link>
          </div>
          <div className={styles.mTodo}>
            <ToDo />
          </div>
          <div className={styles.calendar}>
            <Calendar />
          </div>
        </div>
      </div>
    </>
  );
}
