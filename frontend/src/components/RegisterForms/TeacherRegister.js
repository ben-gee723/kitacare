import React, {useState} from "react";
import {Link} from "react-router-dom"

export default function TeacherRegister() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    phoneNumber: "",
    email: "",
    street: "",
    number: "",
    city: "",
    postcode: "",
    groupName: "",
    verificationCode: "",
    password: "",
    role: "Teacher",
  });

  const submitForm = e => {
    e.preventDefault();
  };

  const grabValue = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className='regForm'>
      <form onSubmit={submitForm}>

        <div className="reg">
          <h1>Register as Teacher!</h1>
        </div> 
        
        <div className='regInfo'>
          <h3>Information we need:</h3>
        </div>

        <div className='input-box'>
          <label className='details'>First name</label><br/>
          <input type='text' name='firstName' placeholder='First Name' onChange={grabValue}/>
        </div>

        <div className='input-box'>
          <label className='details'>Last name</label><br/>
          <input type='text' name='lastName' placeholder='Last Name' onChange={grabValue}/>
        </div>

        <div className='input-box'>
          <label className='details'>Birthday</label><br/>
          <input type='date' name='birthday' placeholder='Birthday' onChange={grabValue}/>
        </div>

        <div className='input-box'>
          <label className='details'>Phone number</label><br/>
          <input type='text' name='phoneNumber' placeholder='Phone Number' onChange={grabValue}/>
        </div>

        <div className='input-box'>
          <label className='details'>Email</label><br/>
          <input type='email' name='email' placeholder='E-mail' onChange={grabValue}/>
        </div>
        
        <div className='address'><h3>Address:</h3></div>

        <div className='input-box'>
          <label className='details'>Street</label><br/>
          <input type='text' name='street' placeholder='Street'/>
        </div>

        <div className='input-box'>
          <label className='details'>Number</label><br/>
          <input type='text' name='number' placeholder='Number' />
        </div>

        <div className='input-box'>
          <label className='details'>City</label><br/>
          <input type='text' name='city' placeholder='City' />
        </div>

        <div className='input-box'>
          <label className='details'>Post code</label><br/>
          <input type='number' name='postcode' required placeholder='Postcode' />
        </div>

        <div className='input-box'>
          <label className='details'>Group name</label><br/>
          <input type='text' name='groupName' placeholder='Group Name' onChange={grabValue}/>
        </div>

        <div className='input-box'>
          <label className='details'>Verification Code</label><br/>
          <input type='text' name='verificationCode' placeholder='Enter the verification code provided by your manager.' onChange={grabValue}/>
        </div>

        <div className='input-box'>
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
