import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ManagerRegister2(props) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
      if(props.kg){
        setFormData({ kg: props.kg });
      }
  }, []);

  const sendData=()=>{
    let url = "";
    if(props.kg){
        url = "/kg/register"
    }else {
        url = "/users/managers"
    }
    axios({
      method: "post",
      url: url,
      headers: {
        "Accept" : "application/json",
        "Content-Type": "application/json",
      },
      body: formData,
    })
      .then(response => {
        if (response.success) {
          console.log(response.user);
          // props.history.push("/mregister")
        } else {
          console.log(response);
        }
      })
      .catch(err => console.log(err)); 
  }

  const submitManagerForm=async(e)=>{
    let managerObj=props.submitForm(e);
    await setFormData({...formData,manager:managerObj})
    sendData()
  }

  return (
    <div>
      <form onSubmit={(e)=>submitManagerForm(e)} name="managerForm">
        <label>
          First Name
          <input type='text' name='firstName' placeholder='First Name' />
        </label>
        <br/>
        <label>
          Last Name
          <input type='text' name='lastName' required placeholder='Last Name' />
        </label>
        <br/>
        <label>
          Birthday
          <input type='date' name='birthday' placeholder='Birthday' />
        </label>
        <br/>
        <label>
          Phone Number
          <input type='text' name='phoneNumber' placeholder='Phone Number' />
        </label>
        <br/>
        <label>
          Email
          <input type='email' name='email' required placeholder='E-mail' />
        </label>
        <br/>
        <label>
          Address
          <input type='text' name='street' placeholder='Street' />
          <br/>
          <input type='text' name='number' placeholder='Number' />
          <br/>
          <input type='text' name='city' placeholder='City' />
        </label>
        <br/>
        <label>
          Password
          <input type='password' name='password' placeholder='Password' />
        </label>
        <br/>
        <input type='submit' value='Register' />
      </form>
      <Link to='/'>Back</Link>
    </div>
  );
}
