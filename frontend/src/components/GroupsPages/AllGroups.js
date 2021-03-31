import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AllGroups() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/groups/getAllGroups",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(result => {
        if (result.success) {
          setGroups(result.groups);
        } else {
          console.log(result);
        }
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <h1>Groups</h1>
      <div>
        {groups.map(group => {
          return (
            <div key={group.id}>
              <div>
                <h3>{group.groupeName}</h3>
                <p>{group.description}</p>
              </div>
              <div>
                <button type='submit' value='add' className='add'>Add</button>
               <button type='submit' value='view' className='view'>View</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
