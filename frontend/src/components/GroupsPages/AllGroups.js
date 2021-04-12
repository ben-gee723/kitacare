/** @format */

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MyContext } from "../../Container";

export default function AllGroups(props) {
  const [groups, setGroups] = useState([]);
  const { kg } = useContext(MyContext);

  useEffect(() => {
    axios({
      method: "GET",
      // withCredentials: true,
      url: `http://localhost:3001/groups/getAllGroups/${kg._id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        console.log(result);
        if (result.data.success) {
          setGroups(result.data.allGroups);
          //  console.log(result.data.groups);
          console.log(kg._id);
        } else {
          console.log(result.data.allGroups);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleView = (group) => {
    props.history.push({ pathname: "/group", state: { group: group } });
  };

  return (
    <div>
      <h1>Groups</h1>
      <div>
        {groups.map((group) => {
          return (
            <div key={group._id}>
              <div
                style={{
                  width: "42em",
                  margin: "0 auto",
                  border: "0.1rem solid black",
                  padding: "1.5rem",
                  display: "flex",
                }}>
                <h1>{group._id}</h1>
                <h3>{group.groupName}</h3>
                <p>{group.description}</p>
                <p>{group.ageGroup}</p>
              </div>
              <div>
                <button type='submit' value='add' className='add'>
                  Add
                </button>
                <button
                  type='submit'
                  value='view'
                  className='view'
                  onClick={() => handleView(group)}>
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
