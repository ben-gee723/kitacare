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
    <div className={styles.regForm}>
      <form onSubmit={submitForm}>

        <div className='reg'>
          <h1>Register as Teacher!</h1>
        </div> 
        
        <div className='regInfo'>
          <h3>Information we need:</h3>
        </div>

        <div className='inputBox'>
          <label className='details'>First name</label><br/>
          <input type='text' name='firstName' placeholder='First Name' onChange={grabValue}/>
        </div>

        <div className='inputBox'>
          <label className='details'>Last name</label><br/>
          <input type='text' name='lastName' placeholder='Last Name' onChange={grabValue}/>
        </div>

        <div className='inputBox'>
          <label className='details'>Birthday</label><br/>
          <input type='date' name='birthday' placeholder='Birthday' onChange={grabValue}/>
        </div>

        <div className='inputBox'>
          <label className='details'>Phone number</label><br/>
          <input type='text' name='phoneNumber' placeholder='Phone Number' onChange={grabValue}/>
        </div>

        <div className='inputBox'>
          <label className='details'>Email</label><br/>
          <input type='email' name='email' placeholder='E-mail' onChange={grabValue}/>
        </div>
        
        <div className={styles.address}><h3>Address:</h3></div>

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
          <label className='details'>Group name</label><br/>
          <input type='text' name='groupName' placeholder='Group Name' onChange={grabValue}/>
        </div>

        <div className='inputBox'>
          <label className='details'>Verification Code</label><br/>
          <input type='text' name='verificationCode' placeholder='Enter the verification code provided by your manager.' onChange={grabValue}/>
        </div>

        <div className='inputBox'>
          <label className='details'>Password</label><br/>
          <input type='password' name='password' placeholder='Password' onChange={grabValue}/>
        </div>

        <br/>
        
        <Link to='/'><button className="cancel">Cancel</button></Link>
        <button type='submit' value='Register' className='next'>Register</button>
        
      </form>
    </div>
  );
}
