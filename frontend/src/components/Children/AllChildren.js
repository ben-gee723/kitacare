/** @format */

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styles from "./children.module.scss";
import { Link } from "react-router-dom";
import { MyContext } from "../../Container";
import Child from "./Child";

export default function AllChildren() {
  const [children, setChildren] = useState([]);
  const { user } = useContext(MyContext);

  useEffect(() => {
    let url;
    url =
      user.role === "Manager"
        ? `http://localhost:3001/child/getAllChildren/${user.kg}`
        : `http://localhost:3001/child//getChildrenFromGroup/${user.group._id}`;
    axios({
      method: "GET",
      url: url,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        if (result.data.success) {
          console.log(result.data.allChildren);
          setChildren(result.data.allChildren);
        } else {
          console.log(result);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.container}>
      <h2>Children!</h2>
      <div className={styles.cContainer}>
        {children.length
          ? children.map((child, i) => {
              console.log(child);
              return <Child key={i} child={child} />;
            })
          : null}
      </div>
      {user.role == "Manager" && (
        <Link to='/cregister'>
          <button type='submit' value='add' className='add'>
            Add
          </button>
        </Link>
      )}
    </div>
  );
}
