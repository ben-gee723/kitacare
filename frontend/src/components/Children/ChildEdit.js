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
        setEditedChild(result.child);
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
        <div className={styles.reg}>
          <h1>Edit Child!</h1>
        </div>
        <div className={styles.addinfo}>
          <label>First Name</label>
          <br />
          <input
            type='text'
            name='firstName'
            placeholder={child.firstName}
            onChange={editedValue}
          />
        </div>
        <div className={styles.addinfo}>
          <label>Last Name</label>
          <br />
          <input
            type='text'
            name='lastName'
            placeholder={child.lastName}
            onChange={editedValue}
          />
        </div>
        <div className={styles.addinfo}>
          <label>Birthday</label>
          <br />
          <input
            type='text'
            name='birthday'
            placeholder={child.birthday}
            onChange={editedValue}
          />
        </div>
        <div className={styles.addinfo}>
          <label className='details'>Address:</label>
          <br />
          <input
            type='text'
            name='street'
            placeholder={child.address.street}
            onChange={editedValue}
          />
           <input
            type='text'
            name='number'
            placeholder={child.address.number}
            onChange={editedValue}
          />
           <input
            type='text'
            name='postcode'
            placeholder={child.address.postcode}
            onChange={editedValue}
          />
           <input
            type='text'
            name='city'
            placeholder={child.address.city}
            onChange={editedValue}
          />
        </div>
        
        <div className={styles.addinfo}>
          <label className='details'>Emergency Contact 1:</label>
          <br />
          <input
            type='text'
            name='emerName1'
            placeholder={child.emergencyContact[0].emerName1}
            onChange={editedValue}
          />
           <input
            type='text'
            name='emerEmail1'
            placeholder={child.emergencyContact[0].emerEmail1}
            onChange={editedValue}
          />
           <input
            type='text'
            name='emerNumber1'
            placeholder={child.emergencyContact[0].emerNumber1}
            onChange={editedValue}
          />
        </div>
        <div className={styles.addinfo}>
          <label className='details'>Emergency Contact 2:</label>
          <br />
          <input
            type='text'
            name='emerName2'
            placeholder={child.emergencyContact[1].emerName2}
            onChange={editedValue}
          />
           <input
            type='text'
            name='emerEmail2'
            placeholder={child.emergencyContact[1].emerEmail2}
            onChange={editedValue}
          />
           <input
            type='text'
            name='emerNumber2'
            placeholder={child.emergencyContact[1].emerNumber2}
            onChange={editedValue}
          />
        </div>
        <div className={styles.addinfo}>
          <label className='details'>Allergies:</label>
          <br />
          <input
            type='text'
            name='allergies'
            placeholder={child.allergies[0]}
            onChange={editedValue}
          />
          <input
            type='text'
            name='allergies'
            placeholder={child.allergies[1]}
            onChange={editedValue}
          />
            <input
            type='text'
            name='allergies'
            placeholder={child.allergies[2]}
            onChange={editedValue}
          />
           <input
            type='text'
            name='allergies'
            placeholder={child.allergies[3]}
            onChange={editedValue}
          />
           <input
            type='text'
            name='allergies'
            placeholder={child.allergies[4]}
            onChange={editedValue}
          />
           <input
            type='text'
            name='allergies'
            placeholder={child.allergies[5]}
            onChange={editedValue}
          />
        </div>
        <div className={styles.addinfo}>
          <label>Dietary Needs</label>
          <br />
          <input
            type='text'
            name='dietaryNeeds'
            placeholder={child.dietaryNeeds}
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
