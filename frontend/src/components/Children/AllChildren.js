import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./children.module.scss";
import {Link} from "react-router-dom"

export default function AllChildren(props) {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3001/child/getAllChildren`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(result => {
        if (result.data.success) {
          setChildren(result.data.allChildren);
        } else {
          console.log(result);
        }
      })
      .catch(err => console.log(err));
  }, []);
  const handleEdit = child => {
    props.history.push({ pathname: "/editchild", state: { child: child } });
  };

  return (
    <div className={styles.container}>
    <h2>Groups!</h2>
    <Link to='/addgroup'>
          <button type='submit' value='add' className='add'>
            Add
          </button>
        </Link>
    <div key={children._id} className={styles.cContainer}>
      {children.map(child => {
        return (
          <div className={styles.scontainer} key={child._id}>
            <div className={styles.col1}>
              <p className={styles.bold2}>{child.firstName} {child.lastName}</p>
            </div>
            <div className={styles.col}>
              <p className={styles.info}>
                {child.birthday}
              </p>
            </div>
            <div className={styles.col}>
              <p className={styles.info}>{child.address.street} {child.address.number}, {child.address.postcode} {child.address.city}</p>
            </div>
            <div className={styles.col}>
              <p className={styles.info}>Group size:</p>
              <p className={styles.info}>{children.length}</p>
            </div>
            <div className={styles.col2}>
              <p className={styles.info}>Age:</p>
              <p className={styles.info}>{child.age}</p>
            </div>
            <div>
            <button
              type='submit'
              value='edit'
              className='fixedit'
              onClick={() => handleEdit(child)}
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
