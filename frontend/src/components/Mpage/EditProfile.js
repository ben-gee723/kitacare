/** @format */

import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../RegisterForms/registerForm.module.css";
import { MyContext } from "../../Container";
import { submitForm } from "../../logic/registerLogic";

export default function EditProfile(props) {
  const { setUser, user } = useContext(MyContext);
  const [nextUser, setNextUser] = useState(user);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  let timer = null;

  useEffect(() => {
    if (showSuccess) {
      timer = setTimeout(() => {
        props.history.push(
          user.role == "Manager"
            ? { pathname: "/mpage" }
            : { pathname: "/tpage" }
        );
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showSuccess]);

  const changePasswordHandler = (e) => {
    e.preventDefault();
    let formObj = submitForm(e);
    axios(`http://localhost:3001/users/updatePassword/${user._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: {
        currentPassword: formObj.currentPassword,
        newPassword: formObj.newPassword,
      },
    }).then((result) => {
      if (result.data.success) {
        setShowSuccess(true);
      } else {
        console.log(result); //work on error cases!!!!!
      }
    });
  };

  const editHandler = (e) => {
    e.preventDefault();
    let formObj = submitForm(e);
    console.log(formObj);
    axios(`http://localhost:3001/users/users/${user._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: formObj,
    }).then((result) => {
      if (result.data.success) {
        console.log(result.data);
        setShowSuccess(true);
      } else {
        console.log(result); //prepare an error box!
      }
    });
  };

  return (
    <div className={styles.regForm} style={{ marginTop: "30px" }}>
      {showSuccess && ( //style this one!!!!
        <div>
          <p>Your profile has been succeessfully updated </p>
        </div>
      )}
      {/* form for changing password: */}
      {showPasswordForm && ( //style this one!!!!
        <form
          className={styles.formContainer}
          onSubmit={(e) => changePasswordHandler(e)}
          name='managerForm'>
          <div className='inputBox'>
            <label className='details'>Your current password: </label>
            <input
              type='password'
              name='currentPassword'
              placeholder='current password'
            />
          </div>
          <div className='inputBox'>
            <label className='details'>Your new password: </label>
            <input
              type='password'
              name='newPassword'
              placeholder='new password'
            />
          </div>
          <br />
          <div className={styles.btnContainer}>
            <button
              className='cancel'
              onClick={() => setShowPasswordForm(false)}>
              Cancel
            </button>
            <button type='submit' value='Register' className='att'>
              Submit
            </button>
          </div>
        </form>
      )}
      {!showPasswordForm && (
        <button
          type='submit'
          value='Register'
          className='att'
          onClick={() => setShowPasswordForm(true)}>
          Change Password
        </button>
      )}
      {/* edit form without password: */}
      {!showSuccess && !showPasswordForm && (
        <form
          className={styles.formContainer}
          onSubmit={(e) => editHandler(e)}
          name='managerForm'>
          <div className='reg'>
            <h1>Edit Your Profile!</h1>
          </div>
          <div className='inputBox'>
            <label className='details'>First name</label>
            <br />
            <input
              type='text'
              name='firstName'
              defaultValue={nextUser.firstName}
            />
          </div>

          <div className='inputBox'>
            <label className='details'>Last name</label>
            <br />
            <input
              type='text'
              name='lastName'
              defaultValue={nextUser.lastName}
            />
          </div>

          <div className='inputBox'>
            <label className='details'>Birthday</label>
            <br />
            <input
              type='date'
              name='birthday'
              defaultValue={nextUser.birthday}
            />
          </div>

          <div className='inputBox'>
            <label className='details'>Phone number</label>
            <br />
            <input
              type='text'
              name='phoneNumber'
              defaultValue={nextUser.phoneNumber}
            />
          </div>

          <div className='inputBox'>
            <label className='details'>Email</label>
            <br />
            <input type='email' name='email' defaultValue={nextUser.email} />
          </div>

          <div className={styles.address}>
            <h3>Address:</h3>
          </div>

          <div className='inputBox'>
            <label className='details'>Street</label>
            <br />
            <input
              type='text'
              name='street'
              defaultValue={nextUser.address.street}
            />
          </div>

          <div className='inputBox'>
            <label className='details'>Number</label>
            <br />
            <input
              type='text'
              name='number'
              defaultValue={nextUser.address.number}
            />
          </div>

          <div className='inputBox'>
            <label className='details'>City</label>
            <br />
            <input
              type='text'
              name='city'
              defaultValue={nextUser.address.city}
            />
          </div>

          <div className='inputBox'>
            <label className='details'>Post code</label>
            <br />
            <input
              type='number'
              name='postcode'
              defaultValue={nextUser.address.postcode}
            />
          </div>
          <br />
          <div className={styles.btnContainer}>
            <Link to={user.role == "Manager" ? "/mpage" : "/tpage"}>
              <button className='cancel'>Cancel</button>
            </Link>
            <button type='submit' value='Register' className='att'>
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
