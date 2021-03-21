import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ManagerRegister(props) {
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
      data: bodyObj,
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
    <div className='regForm'>
      <form onSubmit={(e)=>submitManagerForm(e)} name="managerForm">
      <div className="reg">
          <h1>Register a Menager!</h1>
        </div> 
        
        <div className='regInfo'>
          <h3>Information we need:</h3>
        </div>

        <div className='input-box'>
          <label className='details'>First name</label><br/>
          <input type='text' name='firstName' placeholder='First Name'/>
        </div>

        <div className='input-box'>
          <label className='details'>Last name</label><br/>
          <input type='text' name='lastName' placeholder='Last Name'/>
        </div>

        <div className='input-box'>
          <label className='details'>Birthday</label><br/>
          <input type='date' name='birthday' placeholder='Birthday'/>
        </div>

        <div className='input-box'>
          <label className='details'>Phone number</label><br/>
          <input type='text' name='phoneNumber' placeholder='Phone Number' />
        </div>

        <div className='input-box'>
          <label className='details'>Email</label><br/>
          <input type='email' name='email' placeholder='E-mail'/>
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
