/** @format */

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MyContext } from "../../Container";
import styles from "./groups.module.scss";
import { Link } from "react-router-dom";

export default function AllGroups(props) {
  const [groups, setGroups] = useState([]);
  const { user } = useContext(MyContext);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3001/groups/getAllGroups/${user.kg}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        console.log(result);
        if (result.data.success) {
          setGroups(result.data.allGroups);
        } else {
          console.log(result.data.allGroups);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  
  const handleEdit = (group) => {
    props.history.push({ pathname: "/editgroup", state: { group: group } });
  };
  return (
    <div className={styles.container}>
      <h2>Groups!</h2>
      <div key={groups._id} className={styles.cContainer}>
        <div className={styles.btn}>
          <p>Total number of groups: </p>
          <h1>{groups.length}</h1>
          <Link to='/addgroup'>
            <button type='submit' value='add' className='add'>
              Add
            </button>
          </Link>
        </div>
        {groups.map(group => {
          return (
            <div className={styles.scontainer} key={group._id}>
            <div className={styles.col1}>
              <p className={styles.bold}>Group:</p>
              <p className={styles.bold2}>{group.groupName}</p>
            </div>
            <div className={styles.col}>
              <p className={styles.info}>Teacher:{group.teachers.firstName}</p>
              <p className={styles.info}>
                {group.teachers.lastName}
              </p>
            </div>
            <div className={styles.col}>
              <p className={styles.info1}>Room:</p>
              <p className={styles.info}>{group.room}</p>
            </div>
            <div className={styles.col}>
              <p className={styles.info}>Group size:</p>
              <p className={styles.info}>{group.children.length}</p>
              <Link to='/children'>
                {" "}
                <button type='submit' value='view' className='view'>
                  view children
                </button>
              </Link>
            </div>
            <div className={styles.col}>
              <p className={styles.info}>Group age:</p>
              <p className={styles.info}>{group.ageGroup}</p>
            </div>
            <button
              type='submit'
              value='edit'
              className='edit'
              onClick={() => handleEdit(group)}>
              Edit
            </button>
          </div>
          );
        })}
        <Link to='/mpage'>
          <button type='submit' value='back' className='back'>
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
}
