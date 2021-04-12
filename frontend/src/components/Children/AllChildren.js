import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./children.module.scss";

export default function AllChildren() {
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
        console.log(result);
        if (result.data.success) {
          setChildren(result.data.allChildren);
        } else {
          console.log(result);
        }
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={StyleSheet.container}>
      {children.map(child => {
        return (
          <div key={child.id}>
            <h2>Children!</h2>
            <div className={styles.btn}>
              <p>Total number of children: </p>
              <h1>{child.length}</h1>
              <button type='submit' value='add' className='add'>
                Add
              </button>
            </div>
            <div className={styles.gContainer}>
              <h3>{child.firstName}</h3>
              <p>{child.lastName}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
