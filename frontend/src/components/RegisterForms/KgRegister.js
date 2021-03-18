import React, { useState } from "react";
import { Link } from "react-router-dom";
import ManagerRegister from "./ManagerRegister";
import {submitForm } from "../../logic/registerLogic";

export default function KgRegister() {
  const [data, setData] = useState({});

  const submitKgForm=(e)=>{
    e.preventDefault();
    let kgObj=submitForm(e)
    setData({kg:kgObj})
  }

  return (
    <div>
      {!data.kg && 
      <form onSubmit={submitKgForm} name="kgForm">
        <label>
          Kindergarten Name
          <input type='text' name='name' placeholder='Kindergarten Name' />
        </label>
        <br/><br/><br/>
        <label>
          Phone Number <br/>
          <input type='text' name='phoneNumber' placeholder='Phone Number' />
        </label>
        <br/>
        <label>
          Email <br/>
          <input type='email' name='email' required placeholder='E-mail' />
        </label>
        <br/>
        <label>
          Address <br/>
          <input type='text' name='street' placeholder='Street' />
          <br/>
          <input type='text' name='number' placeholder='Number' />
          <br/>
          <input type='text' name='city' placeholder='City' />
          <input type='number' name='postcode' required placeholder='postcode' />
        </label>
        <br/>
        <Link to='/'><button className="cancel">Cancel</button></Link>
        <input type='submit' value='Next' className='next' />
      </form>}
      {data.kg && <ManagerRegister kg={data.kg}/> }
    </div>
  );
}
