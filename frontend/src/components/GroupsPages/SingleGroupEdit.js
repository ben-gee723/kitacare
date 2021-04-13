import React, { useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./groups.module.scss";

export default function SingleGroupEdit(props) {
  const [deleteGroup, setDeleteGroup] = useState([]);
  const [editedGroup, setEditedGroup] = useState([]);
  const group = props.location.state.group;
  console.log(group)

  const handleDelete = () => {
    axios(
      `http://localhost:3001/groups/deleteGroup/${group._id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    ).then(result => {
      if (result.success) {
        deleteGroup = group.filter((group) => group._id !== result.deleteGroup._id)
        setDeleteGroup(deleteGroup);
      } else {
        console.log(result);
      }
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    axios(`http://localhost:3001/groups/${group._id}`, {
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
        onSubmit={id => handleEdit(group._id)}
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
        <button
          type='submit'
          value='delete'
          className='next'
          onClick={() => handleDelete(group._id)}
        >
          Delete
        </button>
        <div className={styles.btnContainer}>
          <Link to='/groups'>
            <button className='cancel'>Cancel</button>
          </Link>
          <button type='submit' value='Edit' className='att'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
