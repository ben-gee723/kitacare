/** @format */

import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import styles from "./ChildEdit/ChildEdit.module.scss";
import { MyContext } from "../../Container";

export default function ChildEdit(props) {
  const { reset } = useContext(MyContext);
  const [editedChild, setEditedChild] = useState([]);
  const child = props.location.state.child;
  const history = useHistory();

  const handleDelete = (e) => {
    e.preventDefault();
    axios(
      `http://localhost:3001/child/deleteChild/${props.location.state.child._id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    )
      .then((result) => {
        if (result.data.success) {
          alert("Child has been deleted successfully");
          history.push("/children");
        } else {
          console.log(result);
          alert("Child hasn't been deleted successfully");
        }
      })
      .catch((err) => reset());
  };

  const handleEdit = (e) => {
    e.preventDefault();
    axios(
      `http://localhost:3001/child/updateChild/${props.location.state.child._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        data: editedChild,
      }
    )
      .then((result) => {
        if (result.data.success) {
          history.push({
            pathname: "/success",
            state: { child: "child" },
          });
          alert("Child has been edited successfully");
        } else {
          console.log(result);
          alert("Child hasn't been edited successfully");
        }
      })
      .catch((err) => reset());
  };

  const editedValue = (e) => {
    setEditedChild({ ...child, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.regForm}>
      <form
        className={styles.formContainer}
        onSubmit={(e) => handleEdit(e)}
        name='managerForm'
        key='child._id'>
        <div className={styles.formContColumn}>
          <div className={styles.addinfo}>
            <label>First Name</label>
            <br />
            <input
              type='text'
              name='firstName'
              defaultValue={child.firstName}
              onChange={editedValue}
            />
          </div>
          <div className={styles.addinfo}>
            <label>Last Name</label>
            <br />
            <input
              type='text'
              name='lastName'
              defaultValue={child.lastName}
              onChange={editedValue}
            />
          </div>
          <div className={styles.addinfo}>
            <label>Birthday</label>
            <br />
            <input
              type='text'
              name='birthday'
              defaultValue={child.birthday.split("T")[0]}
              onChange={editedValue}
            />
          </div>
          <div className={styles.addinfo}>
            <label className='details'>Address:</label>
            <br />
            <input
              type='text'
              name='street'
              defaultValue={child.address.street}
              onChange={editedValue}
            />
            <input
              type='text'
              name='number'
              defaultValue={child.address.number}
              onChange={editedValue}
            />
            <input
              type='text'
              name='postcode'
              defaultValue={child.address.postcode}
              onChange={editedValue}
            />
            <input
              type='text'
              name='city'
              defaultValue={child.address.city}
              onChange={editedValue}
            />
          </div>
        </div>

        <div className={styles.formContColumn}>
          <div className={styles.addinfo}>
            <label className='details'>Allergies:</label>
            <br />
            <input
              type='text'
              name='allergies'
              defaultValue={child.allergies[0]}
              onChange={editedValue}
            />
            <input
              type='text'
              name='allergies'
              defaultValue={child.allergies[1]}
              onChange={editedValue}
            />
            <input
              type='text'
              name='allergies'
              defaultValue={child.allergies[2]}
              onChange={editedValue}
            />
            <input
              type='text'
              name='allergies'
              defaultValue={child.allergies[3]}
              onChange={editedValue}
            />
            <input
              type='text'
              name='allergies'
              defaultValue={child.allergies[4]}
              onChange={editedValue}
            />
            <input
              type='text'
              name='allergies'
              defaultValue={child.allergies[5]}
              onChange={editedValue}
            />
          </div>
          <div className={styles.addinfo}>
            <label>Dietary Needs</label>
            <br />
            <input
              type='text'
              name='dietaryNeeds'
              defaultValue={child.dietaryNeeds}
              onChange={editedValue}
            />
          </div>
        </div>

        <div className={styles.formContColumn}>
          <div className={styles.addinfo}>
            <label className='details'>Emergency Contact 1:</label>
            <br />
            <input
              type='text'
              name='emerName1'
              defaultValue={child.emergencyContact[0].emerName1}
              onChange={editedValue}
            />
            <input
              type='text'
              name='emerEmail1'
              defaultValue={child.emergencyContact[0].emerEmail1}
              onChange={editedValue}
            />
            <input
              type='text'
              name='emerNumber1'
              defaultValue={child.emergencyContact[0].emerNumber1}
              onChange={editedValue}
            />
          </div>
          <div className={styles.addinfo}>
            <label className='details'>Emergency Contact 2:</label>
            <br />
            <input
              type='text'
              name='emerName2'
              defaultValue={child.emergencyContact[1].emerName2}
              onChange={editedValue}
            />
            <input
              type='text'
              name='emerEmail2'
              defaultValue={child.emergencyContact[1].emerEmail2}
              onChange={editedValue}
            />
            <input
              type='text'
              name='emerNumber2'
              defaultValue={child.emergencyContact[1].emerNumber2}
              onChange={editedValue}
            />
          </div>

          <div className={styles.btnContainer}>
            <button type='submit' value='Edit' className={styles.submitBtn}>
              Submit
            </button>
          </div>

          <div className={styles.btnContainer}>
            <button
              className={styles.deleteBtn}
              value='delete'
              onClick={(e) => handleDelete(e)}>
              Delete
            </button>
            <Link to='/children'>
              <button
                className={styles.cancelBtn}
                onClick={() => alert("Edit cancelled")}>
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
