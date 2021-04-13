import React, { useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./children.module.scss";

export default function ChildEdit(props) {
  const [deletedChild, setDeleteChild] = useState([]);
  const [editedChild, setEditedChild] = useState([]);
  const child = props.location.state.child;

  const handleDelete = props => {
    axios(
      `http://localhost:3001/groups/getSingleChild/${props.location.state.child}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    ).then(result => {
      if (result.success) {
        setDeleteChild(result.deletedChild);
      } else {
        console.log(result);
      }
    });
  };

  const handleEdit = (props, e) => {
    e.preventDefault();
    axios(`http://localhost:3001/child/${props.location.state.child}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    }).then(result => {
      if (result.success) {
        setEditedGroup(result.child);
      } else {
        console.log(result);
      }
    });
  };

  const editedValue = e => {
    setEditedChild({ ...child, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.regForm}>
      <form
        className={styles.formContainer}
        onSubmit={id => handleEdit(child._id)}
        name='managerForm'
        key='child._id'
      >
        <div className='reg'>
          <h1>Edit Child!</h1>
        </div>
        <div className={styles.addinfo}>
          <label>Group Name</label>
          <br />
          <input
            type='text'
            name='groupName'
            placeholder={child.firstName}
            onChange={editedValue}
          />
        </div>
        <div className={styles.addinfo}>
          <label>Room</label>
          <br />
          <input
            type='text'
            name='room'
            placeholder={child}
            onChange={editedValue}
          />
        </div>
        <div className={styles.addinfo}>
          <label className='details'>Age Group</label>
          <br />
          <input
            type='text'
            name='ageGroup'
            placeholder={child}
            onChange={editedValue}
          />
        </div>
        <div className={styles.addinfo}>
          <label>Description</label>
          <br />
          <input
            type='text'
            name='description'
            placeholder={child}
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
            placeholder={child.kg}
            onChange={editedValue}
          />
        </div>
        <br />
        <button
          type='submit'
          value='delete'
          className='next'
          onClick={() => handleDelete(child._id)}
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
