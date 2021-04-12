/** @format */

import React, { useState, useContext } from "react";
import SingleGroupEdit from "./SingleGroupEdit";
import axios from "axios";
import { MyContext } from "../../Container";

export default function SingleGroup(props) {
  const [deletedGroup, setDeleteGroup] = useState([]);
  console.log(props.location);

  const handleEdit = (id) => {
    <SingleGroupEdit />;
  };
  const handleDelete = (id) => {
    axios(
      `http://localhost:3001/groups/getSingleGroup/${props.location.state.group}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    ).then((result) => {
      if (result.success) {
        setDeleteGroup(result.deletedGroup);
      } else {
        console.log(result);
      }
    });
  };

  const group = props.location.state.group;

  return (
    <div>
      <h1>Groups</h1>
      <div>
        <div key={group._id}>
          <div>
            <h3>{group.groupName}</h3>
            <p>{group.description}</p>
          </div>
          <div>
            <button
              type='submit'
              value='delete'
              className='delete'
              onClick={() => handleDelete(group.id)}>
              Delete
            </button>
            <button
              type='submit'
              value='edit'
              className='edit'
              onClick={() => handleEdit(group.id)}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
