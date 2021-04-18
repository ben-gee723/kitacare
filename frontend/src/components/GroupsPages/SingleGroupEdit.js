import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import styles from "./groups.module.scss";

export default function SingleGroupEdit(props) {
  const [editedGroup, setEditedGroup] = useState({});
  const [group, setGroup] = useState(
    props.location.state ? props.location.state.group : {}
  );
  //const group = props.location.state.group;
  //console.log(group)
  let history = useHistory();

  const handleDelete = () => {
    axios(`http://localhost:3001/groups/deleteGroup/${group._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(result => {
      if (result.data.success) {
        console.log(result.data);
        history.push("/groups");
      } else {
        console.log(result);
      }
    });
  };

  const handleEdit = e => {
    e.preventDefault();
    axios(`http://localhost:3001/groups/${group._id}`, editedGroup, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    }).then(result => {
      if (result.success) {
        setEditedGroup(result.group);
      } else {
        console.log(result);
      }
    });
  };

  const editedValue = e => {
    setEditedGroup({ ...group, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.regForm}>
      <form
        className={styles.formContainer}
        onSubmit={handleEdit}
        name='managerForm'
        key='group._id'
      >
        <div className='reg'>
          <h1>Edit Group!</h1>
        </div>
        <div className={styles.addinfo}>
          <label>Group Name</label>
          <br />
          <input
            type='text'
            name='groupName'
            placeholder={group.groupName}
            onChange={editedValue}
          />
        </div>
        <div className={styles.addinfo}>
          <label>Room</label>
          <br />
          <input
            type='text'
            name='room'
            placeholder={group.room}
            onChange={editedValue}
          />
        </div>
        <div className={styles.addinfo}>
          <label className='details'>Age Group</label>
          <br />
          <input
            type='text'
            name='ageGroup'
            placeholder={group.ageGroup}
            onChange={editedValue}
          />
        </div>
        <div className={styles.addinfo}>
          <label>Description</label>
          <br />
          <input
            type='text'
            name='description'
            placeholder={group.description}
            onChange={editedValue}
          />
        </div>
        <div className={styles.addinfo}>
          <label>Children</label>
          <br />
          <input
            type='text'
            name='children'
            placeholder='please enter the child id'
            onChange={editedValue}
          />
        </div>
        <div className={styles.addinfo}>
          <label>Teachers</label>
          <br />
          <input
            type='text'
            name='teachers'
            placeholder='please enter the teacher id'
            onChange={editedValue}
          />
        </div>
        <div className={styles.addinfo}>
          <label>Kindergarten</label>
          <br />
          <input
            type='text'
            name='kg'
            placeholder={group.kg}
            onChange={editedValue}
          />
        </div>
        <br />
        <div className={styles.btnContainer}>
          <Link to='/groups'>
            <button className='cancel'>Cancel</button>
          </Link>
          <button type='submit' value='Edit' className='att'>
            Submit
          </button>
        </div>
      </form>
      <button
        type='submit'
        value='delete'
        className='next'
        style={{width: "15%"}}
        onClick={() => handleDelete(group._id)}
      >
        Delete
      </button>
    </div>
  );
}
