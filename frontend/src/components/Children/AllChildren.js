/** @format */

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styles from "./children.module.scss";
import { MyContext } from "../../Container";
import Child from "./Child";

export default function AllChildren(props) {
  const [children, setChildren] = useState([]);
  const { user } = useContext(MyContext);

  useEffect(() => {
    let url;
    if (
      user.role === "Manager" &&
      props.location.state &&
      props.location.state.group
    ) {
      url = `http://localhost:3001/child//getChildrenFromGroup/${props.location.state.group}`;
    } else if (user.role === "Teacher") {
      url = `http://localhost:3001/child//getChildrenFromGroup/${user.group._id}`;
    } else {
      url = `http://localhost:3001/child/getAllChildren/${user.kg}`;
    }
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
          setChildren(result.data.allChildren);
        } else {
          console.log(result);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (child) => {
    props.history.push({ pathname: "/editchild", state: { child: child } });
  };

  return (
    <div className={styles.container}>
      <div className={styles.cContainer}>
        {children.length
          ? children.map((child, i) => {
              return (
                <Child
                  key={i}
                  child={child}
                  imageNum={i > 3 ? i % 4 : i}
                  handleEdit={handleEdit}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
