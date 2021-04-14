/** @format */

import React, { useState, useContext } from "react";
import SingleGroupEdit from "./SingleGroupEdit";
import styles from "./groups.module.scss";
import { Link } from "react-router-dom";

export default function SingleGroup(props) {
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (group) => {
    setShowForm(!showForm);
    props.history.push({ pathname: "/editgroup", state: { group: group } });
  };

  const group = props.location.state.group;
  return (
    <div>
      <div className={styles.scontainer} key={group._id}>
        {showForm && (
          <div>
            <SingleGroupEdit />
          </div>
        )}
        <>
          <div>
            <div className={styles.col1}>
              <p className={styles.bold}>Group:</p>
              <p className={styles.bold2}>{group.groupName}</p>
            </div>
            <div className={styles.col}>
              <p className={styles.info}>Teacher:{group.teachers.firstName}</p>
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
            <div className={styles.col}>
              <p className={styles.info}>Group age:</p>
              <p className={styles.info}>{group.ageGroup}</p>
            </div>
            
          </div>
        </>
      </div>
      
    </div>
  );
}
