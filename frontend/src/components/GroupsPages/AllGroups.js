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

  const handleView = group => {
    props.history.push({
      pathname: ["/group"],
      state: { group: group },
    });
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
