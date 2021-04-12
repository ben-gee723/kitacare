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
            <p className={styles.info}>Teacher:{group.teachers}</p>
            <p className={styles.info}>
              teacher.firstName teacher.lastName{group.teachers}
            </p>
          </div>
          <div className={styles.col}>
            <p className={styles.info}>Room:</p>
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
      </>
    </div>
  );
}
