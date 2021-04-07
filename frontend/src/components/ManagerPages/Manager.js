import React, { useState, useEffect, useContext } from "react";
import Calendar from "../Calendar/Calendar";
import Dashboard from "./Dashboard";
import styles from "./manager.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { MyContext } from "../../Container";
import managerImg from "../../images/manager.svg";

export default function Manager() {
  const [groups, setGroups] = useState([]);
  const { kg, user } = useContext(MyContext);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3001/groups/getAllGroups/${kg_id} `,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(result => {
        console.log(result);
        if (result.data.success) {
          setGroups(result.data.allGroups);
          //  console.log(kg._id);
        } else {
          console.log(result.data.allGroups);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={styles.mpContainer}>
      <div className={styles.mInfo}>
        <div className={styles.mImg}>
          <img src={managerImg} alt='manager' />
        </div>
        <p>
          {user.firstName} {user.lastName}
        </p>
        <p>{user.email}</p>
        <br />
        <button type='submit' value='Next' className='next'>
          Edit
        </button>
      </div>

      {groups.map(groups => {
        console.log(groups._id.length);
        return (
          <div className={styles.features}>
            <div className={styles.mGroup}>
              <h3>Groups</h3>
              <p>Find all the groups information:</p>
              <p>how many children per group, ages, weekely plans and more! </p>
              <br />
              <p>Total: {groups._id.length}</p>
              <br />
              <Link to='/groups'>
                <button type='submit' value='view' className='view'>
                  View
                </button>
              </Link>
              <button type='submit' value='add' className='add'>
                Add
              </button>
            </div>
            <div className={styles.mTeachers}>
              <h3>Teachers</h3>
              <p>Find all the teacher information:</p>
              <p>
                how many children in that teachers group and all the teachers
                necessary information!
              </p>
              <br />
              <p>Total: {groups.teachers.length}</p>
              <br />
              <Link to='/teachers'>
                <button type='submit' value='view' className='view'>
                  View
                </button>
              </Link>
            </div>
          </div>
        );
      })}
      <div className={styles.mTodo}>
        <Dashboard />
      </div>
      <div className={styles.calendar}>
        <Calendar />
      </div>
    </div>
  );
}
