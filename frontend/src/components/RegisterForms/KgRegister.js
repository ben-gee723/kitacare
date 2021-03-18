import React, { useState } from "react";
import { Link } from "react-router-dom";
import ManagerRegister from "./ManagerRegister";

export default function KgRegister2() {
  const [data, setData] = useState({});

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let obj = { address: {} };
    for (let pair of formData) {
      if (
        pair[0] === "city"   ||
        pair[0] === "street" ||
        pair[0] === "number" ||
        pair[0] === "postcode"
      ) {
        obj.address[pair[0]] = pair[1];
      } else {
        obj[pair[0]] = pair[1];
      }
    }
    return obj
  }

  const submitKgForm=(e)=>{
    e.preventDefault();
    let kgObj=submitForm(e)
    console.log(kgObj)
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
        <input type='submit' value='Next' className='next' />
      </form>}
      {data.kg && <ManagerRegister kg={data.kg} submitForm={submitForm}/> }
      <Link to='/'>Cancel</Link>
    </div>
  );
}
