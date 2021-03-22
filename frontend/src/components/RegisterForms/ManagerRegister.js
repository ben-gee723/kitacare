import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from './registerForm.module.scss';

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
    <div className={styles.regForm}>
      <form onSubmit={(e)=>submitManagerForm(e)} name="managerForm">
      <div className='reg'>
          <h1>Register a Menager!</h1>
        </div> 
        
        <div className='regInfo'>
          <h3>Information we need:</h3>
        </div>

        <div className='inputBox'>
          <label className='details'>First name</label><br/>
          <input type='text' name='firstName' placeholder='First Name'/>
        </div>

        <div className='inputBox'>
          <label className='details'>Last name</label><br/>
          <input type='text' name='lastName' placeholder='Last Name'/>
        </div>

        <div className='inputBox'>
          <label className='details'>Birthday</label><br/>
          <input type='date' name='birthday' placeholder='Birthday'/>
        </div>

        <div className='inputBox'>
          <label className='details'>Phone number</label><br/>
          <input type='text' name='phoneNumber' placeholder='Phone Number' />
        </div>

        <div className='inputBox'>
          <label className='details'>Email</label><br/>
          <input type='email' name='email' placeholder='E-mail'/>
        </div>
        
        <div className='address'><h3>Address:</h3></div>

        <div className='inputBox'>
          <label className='details'>Street</label><br/>
          <input type='text' name='street' placeholder='Street'/>
        </div>

        <div className='inputBox'>
          <label className='details'>Number</label><br/>
          <input type='text' name='number' placeholder='Number' />
        </div>

        <div className='inputBox'>
          <label className='details'>City</label><br/>
          <input type='text' name='city' placeholder='City' />
        </div>

        <div className='inputBox'>
          <label className='details'>Post code</label><br/>
          <input type='number' name='postcode' required placeholder='Postcode' />
        </div>

        <div className='inputBox'>
          <label className='details'>Password</label><br/>
          <input type='password' name='password' placeholder='Password'/>
        </div>

        <br/>

        <Link to='/'><button className="cancel">Cancel</button></Link>
        <button type='submit' value='Register' className='att'>Submit</button>
      </form>
    </div>
  );
}
