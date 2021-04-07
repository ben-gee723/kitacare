import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MyContext } from "../../Container";
import styles from "./groups.module.scss";

export default function AllGroups(props) {
  const [groups, setGroups] = useState([]);
  const { kg } = useContext(MyContext);

  useEffect(() => {
    if (kg !== null) {
      axios({
        method: "GET",
        url: `http://localhost:3001/groups/getAllGroups/${kg}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then(result => {
          console.log(result);
          if (result.data.success) {
            setGroups(result.data.allGroups);

            console.log(kg._id);
          } else {
            console.log(result.data.allGroups);
          }
        })
        .catch(err => console.log(err));
    } else {
      console.log(kg);
    }
  }, []);

  const handleView = group => {
    props.history.push({
      pathname: ["/group"],
      state: { group: group },
    });
  };

  return (
    <div className={styles.container}>
      {groups.map(group => {
        return (
          <div key={group._id}>
            <h2>Groups!</h2>
            <div className={styles.btn}>
              <p>Total number of groups: </p>
              <h1>{groups.length}</h1>
              <button type='submit' value='add' className='add'>
                Add
              </button>
            </div>
            <div className={styles.gContainer}>
              <h3>{group.groupName}</h3>
              <p>{group.description}some text about the group</p>
              <div>
                <button
                  type='submit'
                  value='view'
                  className='view'
                  onClick={() => handleView(group)}
                >
                  View
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
