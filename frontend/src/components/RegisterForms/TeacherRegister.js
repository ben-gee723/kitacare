import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom"
import { sendData, submitForm } from "../../logic/registerLogic";

export default function TeacherRegister() {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if(formData.teacher){
        sendData("teacher registation",formData);
    }
  }, [formData])

  const submitTeacherForm=(e)=>{
    let teacherObj=submitForm(e);
    setFormData({teacher:teacherObj})
  }

  return (
    <div>
          <form onSubmit={submitTeacherForm}>
        <label>
          First Name
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
          />
        </label>
        <label>
          Last Name
          <input
            type='text'
            name='lastName'
            required
            placeholder='Last Name'
          />
        </label>
        <label>
          Birthday
          <input
            type='date'
            name='birthday'
            placeholder='Birthday'
          />
        </label>
        <label>
          Phone Number
          <input
            type='text'
            name='phoneNumber'
            placeholder='Phone Number'
          />
        </label>
        <label>
          Email
          <input
            type='email'
            name='email'
            required
            placeholder='E-mail'
          />
        </label>
        <label>
          Address
          <input
            type='text'
            name='street'
            placeholder='Street'
          />
          <input
            type='text'
            name='number'
            placeholder='Number'
          />
          <input
            type='text'
            name='city'
            placeholder='City'
          />
        </label>
        <label>
          Group Name
          <input
            type='text'
            name='groupName'
            placeholder='Group Name'
          />
        </label>
        <label>
          Verification Code
          <input
            type='text'
            name='verificationCode'
            placeholder='Enter the verification code provided by your manager.'
          />
        </label>
        <label>
          Password
          <input
            type='password'
            name='password'
            placeholder='Password'
          />
        </label>
        <input type='submit' value='Register' />
        <Link to='/'>
          <input type='submit' value='Cancel' />
        </Link>
      </form>
    </div>
  );
}
