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
      .then(result => {
        console.log(result);
        if (result.data.success) {
          setGroups(result.data.allGroups);
        } else {
          console.log(result.data.allGroups);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const handleEdit = group => {
    props.history.push({ pathname: "/editgroup", state: { group: group } });
  };
  return (
    <div className={styles.container}>
      <div key={groups._id} className={styles.cContainer}>
        {groups.map(group => {
          return (
            <div className={styles.acontainer} key={group._id}>
              <div className={styles.col1}>
                <p className={styles.bold}>Group:</p>
                <p className={styles.bold2}>{group.groupName}</p>
              </div>
              <div className={styles.col}>
                <p className={styles.info}>
                  Teacher:{group.teachers[0]}
                </p>
                <p className={styles.info}>{group.teachers.lastName}</p>
              </div>
              <div className={styles.col}>
                <p className={styles.info1}>Room:</p>
                <p className={styles.info}>{group.room}</p>
              </div>
              <div className={styles.col}>
                <p className={styles.info}>Group size:</p>
                <p className={styles.info}>{group.children.length}</p>
              </div>
              <div className={styles.col2}>
                <p className={styles.info}>Group age:</p>
                <p className={styles.info}>{group.ageGroup}</p>
              </div>
              <div>
              <button
                type='submit'
                value='edit'
                className='fixedit'
                onClick={() => handleEdit(group)}
              >
                Edit
              </button>
              <Link to='/children'>
                {" "}
                <button type='submit' value='view' className='view'>
                  view children
                </button>
              </Link>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
