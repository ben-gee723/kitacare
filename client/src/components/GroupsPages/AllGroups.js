/** @format */

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MyContext } from "../../Container";
import styles from "./groups.module.scss";
import { Link } from "react-router-dom";

export default function AllGroups(props) {
  const [groups, setGroups] = useState([]);
  const { user, reset } = useContext(MyContext);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_BASE_URL}/groups/getAllGroups/${user.kg}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then((result) => {
        if (result.data.success) {
          setGroups(result.data.allGroups);
        } else {
          console.log(result.data.allGroups);
        }
      })
      .catch((err) =>
        err.response.status == 401 ? reset() : console.log(err)
      );
  }, []);

  const handleEdit = (group) => {
    props.history.push({ pathname: "/editgroup", state: { group: group } });
  };

  const viewChildrenHandler = (groupId) => {
    props.history.push({ pathname: "/children", state: { group: groupId } });
  };
  return (
    <div className={styles.container}>
      <div key={groups._id} className={styles.cContainer}>
        {groups.map((group) => {
          return (
            <div className={styles.acontainer} key={group._id}>
              <div className={styles.col1}>
                <p className={styles.bold}>Group:</p>
                <p className={styles.bold2}>{group.groupName}</p>
              </div>
              <div className={styles.col}>
                <p className={styles.info}>Teachers:</p>
                {group.teachers.map((teacher) => (
                  <p className={styles.info}>
                    {teacher.firstName} {teacher.lastName}
                  </p>
                ))}
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
                  onClick={() => handleEdit(group)}>
                  Edit
                </button>
                <button
                  type='submit'
                  value='view'
                  className='view'
                  onClick={() => viewChildrenHandler(group._id)}>
                  view children
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
