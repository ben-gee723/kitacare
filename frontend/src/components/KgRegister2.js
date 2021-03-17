import React, { useState } from "react";
import { Link } from "react-router-dom";
import ManagerRegister2 from "./ManagerRegister";

export default function KgRegister2() {
  const [data, setData] = useState({});

  const submitForm = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let obj = { address: {} };
    for (let pair of formData) {
      if (
        pair[0] === "city" ||
        pair[0] === "street" ||
        pair[0] === "number" ||
        pair[0] === "postcode"
      ) {
        obj.address[pair[0]] = pair[1];
      } else {
        obj[pair[0]] = pair[1];
      }
    }
    console.log(e.target)
    if(e.target.name==="kgForm"){
      let kg={...obj};
      return { kg };
    }else{
      let manager={...obj}
      return { manager };
    }
  }
  const submitKgForm=(e)=>{
    let kgObj=submitForm(e)
    console.log(kgObj)
    setData({kg:kgObj})
  }
  return (
    <div>
      <form onSubmit={(e)=>submitKgForm(e)} name="kgForm">
        <label>
          Kindergarten Name
          <input type='text' name='kgName' placeholder='Kindergarten Name' />
        </label>
        <br/><br/><br/>
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
        <input type='submit' value='Next' className='next' />
      </form>
      {data.kg && <ManagerRegister2 kg={data.kg} submitForm={submitForm}/> }
      <Link to='/home'>Back</Link>
    </div>
  );
}
