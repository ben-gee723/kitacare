import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { sendData, submitForm } from "../../logic/registerLogic";


export default function ManagerRegister(props) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if(props.kg){
      setFormData({ kg: props.kg });
    }else{return}
  }, []);

  useEffect(() => {
    if(formData.manager){
      if(formData.kg){sendData("kg registration",formData)}
      else{sendData("manager registration",formData);}
    }
  }, [formData])

  const submitManagerForm=(e)=>{
    let managerObj=submitForm(e);
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
        <Link to='/'><button className="cancel">Cancel</button></Link>
        <input type='submit' value='Register' />
      </form>
    </div>
  );
}
