import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ManagerRegister2(props) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if(props.kg){
      console.log("useEff")
      setFormData({ kg: props.kg });
    }
  }, []);

  useEffect(() => {
    if(formData.manager){
      console.log("manager saved in state")
        sendData();
    }
  }, [formData])

  const sendData=()=>{
    console.log("send data running")
    let url = "";
    let bodyObj={};
    if(props.kg){
        url = "http://localhost:3000/kg/register"
        bodyObj={kg:props.kg,manager:formData.manager}
    }else {
        url = "/users/managers"
        bodyObj={manager:formData.manager}
    }
    axios({
      method: "POST",
      url: url,
      headers: {
        "Accept" : "application/json",
        "Content-Type": "application/json",
      },
      data: formData,
    })
      .then(response => {
        if (response.data.success) {
          console.log(response.data.user);
          // props.history.push("/mprofile ???")
        } else {
          console.log(response);
        }
      })
      .catch(err => console.log(err)); 
  }

  const submitManagerForm=(e)=>{
    let managerObj=props.submitForm(e);
    console.log(managerObj)
    setFormData({...formData,manager:managerObj})
  }

  return (
    <div>
      <form onSubmit={(e)=>submitManagerForm(e)} name="managerForm">
        <label>
          First Name
          <input type='text' name='firstName' placeholder='First Name' required/>
        </label>
        <br/>
        <label>
          Last Name
          <input type='text' name='lastName' required placeholder='Last Name' required/>
        </label>
        <br/>
        <label>
          Birthday
          <input type='date' name='birthday' placeholder='Birthday' required/>
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
          <input type='text' name='street' placeholder='Street' required />
          <input type='text' name='number' placeholder='Number' required />
          <br/>
          <input type='text' name='city' placeholder='City' required/>
          <input type='number' name='postcode' required placeholder='postcode' />
        </label>
        <br/>
        <label>Password
          <input type='password' name='password' placeholder='Password' required />
        </label>
        <br/>
        <input type='submit' value='Register' />
      </form>
      <Link to='/'>Back</Link>
    </div>
  );
}
