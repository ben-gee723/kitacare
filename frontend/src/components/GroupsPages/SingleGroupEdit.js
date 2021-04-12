import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./groups.module.scss";

export default function SingleGroupEdit(props) {
  const [deletedGroup, setDeleteGroup] = useState([]);
  const [editedGroup, setEditedGroup] = useState([]);
  const group = props.location.state.group;

  const handleDelete = (props) => {
    axios(
      `http://localhost:3001/groups/getSingleGroup/${props.location.state.group}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    ).then(result => {
      if (result.success) {
        setDeleteGroup(result.deletedGroup);
      } else {
        console.log(result);
      }
    });
  };

  const handleEdit = (props, e) => {
    e.preventDefault();
    axios(`http://localhost:3001/groups/${props.location.state.group}`, {
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

        <div className='inputBox'>
          <label className='details'>First name</label>
          <br />
          <input type='text' name='firstName' placeholder='First Name' onChange={editedValue}/>
        </div>

        <div className='inputBox'>
          <label className='details'>Last name</label>
          <br />
          <input type='text' name='lastName' placeholder='Last Name' onChange={editedValue} />
        </div>
        <div className='inputBox'>
          <label className='details'>Phone number</label>
          <br />
          <input type='text' name='phoneNumber' placeholder='Phone Number' onChange={editedValue}/>
        </div>
        <br />
        <div className={styles.btnContainer}>
          <Link to='/groups'>
            <button className='cancel'>Cancel</button>
          </Link>
          <button type='submit' value='Edit' className='att'>
            Submit
          </button>
          <button
            type='submit'
            value='delete'
            className='delete'
            onClick={() => handleDelete(group.id)}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
