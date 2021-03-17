import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ManagerRegister2 from "../ManagerRegister";

export default function KgRegister2() {
  const [data, setData] = useState({});

  const submitForm = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let kg = { address: {} };
    for (let pair of formData) {
      if (
        pair[0] === "city" ||
        pair[0] === "street" ||
        pair[0] === "number" ||
        pair[0] === "postcode"
      ) {
        kg.address[pair[0]] = pair[1];
      } else {
        kg[pair[0]] = pair[1];
      }
    }
    setData({ kg: kg });
     axios({
      method: "post",
      url: "",
      headers: {
        "Accept" : "application/json",
        "Content-Type": "application/json",
      },
      data: {
        kgName: e.target.elements.kgName,
        phoneNumber: e.target.elements.phoneNumber,
        email: e.target.elements.email,
        street: e.target.elements.street,
        number: e.target.elements.number,
        city: e.target.elements.city,
        postcode: e.target.elements.postcode,
      },
    })
      .then(response => {
        if (response.success) {
          console.log(response.data);
          // props.history.push("/mregister")
        } else {
          console.log(response);
        }
      })
      .catch(err => console.log(err)); 
  };

  return (
    <div>
      <form onSubmit={submitForm} className="fcontainer">
        <h1>Register a Kindergarten!</h1>
        <label>
          Kindergarten Name <br/>
          <input type='text' name='kgName' placeholder='Kindergarten Name' />
        </label>
        <label>
          Phone Number <br/>
          <input type='text' name='phoneNumber' placeholder='Phone Number' />
        </label>
        <label>
          Email <br/>
          <input type='email' name='email' required placeholder='E-mail' />
        </label>
        <label>
          Address <br/>
          <input type='text' name='street' placeholder='Street' />
          <input type='text' name='number' placeholder='Number' />
          <input type='text' name='city' placeholder='City' />
        </label>
        <div>
        <Link to='/'>
          <input type='submit' value='Cancel' className='cancel' />
        </Link>
        <input type='submit' value='Next' className='next' />
        </div>
      </form>
      {data.kg && <ManagerRegister2 kg={data.kg}/> }
    </div>
  );
}
