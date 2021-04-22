/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { sendData, submitForm } from "../../logic/registerLogic";
import styles from "./registerForm.module.scss";

export default function TeacherRegister(props) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (formData.teacher) {
      sendData("teacher registation", formData.teacher);
      props.history.push({
        pathname: "/login",
        state: {
          email: formData.teacher.email,
          password: formData.teacher.password,
        },
      });
    }
  }, [formData]);

  const submitTeacherForm = (e) => {
    e.preventDefault();
    let teacherObj = submitForm(e);
    setFormData({ teacher: teacherObj });
  };

  return (
    <div className={styles.regForm}>
      <form
        className={styles.formContainer}
        onSubmit={(e) => submitTeacherForm(e)}>
        <div className='reg'>Register as Teacher!</div>

        <div className='regBox'>
          <div>
            <div className='inputBox'>
              <label className='details'>First name</label>
              <br />
              <input
                type='text'
                name='firstName'
                placeholder='First Name'
                required
              />
            </div>

            <div className='inputBox'>
              <label className='details'>Last name</label>
              <br />
              <input
                type='text'
                name='lastName'
                placeholder='Last Name'
                required
              />
            </div>

            <div className='inputBox'>
              <label className='details'>Birthday</label>
              <br />
              <input
                type='date'
                name='birthday'
                placeholder='Birthday'
                required
              />
            </div>

            <div className='inputBox'>
              <label className='details'>Phone number</label>
              <br />
              <input
                type='text'
                name='phoneNumber'
                placeholder='Phone Number'
                required
              />
            </div>
          </div>

          <div className='smallBox'>
            <div className='inputBox'>
              <label className='details'>Email</label>
              <br />
              <input type='email' name='email' placeholder='E-mail' required />
            </div>

            <div className='inputBox'>
              <label className='details'>Street</label>
              <br />
              <input type='text' name='street' placeholder='Street' required />
            </div>

            <div className='inputBox'>
              <label className='details'>Number</label>
              <br />
              <input type='text' name='number' placeholder='Number' required />
            </div>

            <div className='inputBox'>
              <label className='details'>City</label>
              <br />
              <input type='text' name='city' placeholder='City' required />
            </div>
          </div>

          <div className='smallBox'>
            <div className='inputBox'>
              <label className='details'>Post code</label>
              <br />
              <input
                type='number'
                name='postcode'
                required
                placeholder='Postcode'
              />
            </div>

            <div className='inputBox'>
              <label className='details'>Group name</label>
              <br />
              <input type='text' name='groupName' placeholder='Group Name' />
            </div>

            <div className='inputBox'>
              <label className='details'>Verification Code</label>
              <br />
              <input
                type='text'
                name='verificationCode'
                placeholder='Enter the verification code provided by your manager.'
                required
              />
            </div>

            <div className='inputBox'>
              <label className='details'>Password</label>
              <br />
              <input
                type='password'
                name='password'
                placeholder='Password'
                required
              />
            </div>

            <br />
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button type='submit' value='Register' className='next'>
            Register
          </button>
          <Link to='/'>
            <button className='cancel'>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
