import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ManagerRegister() {
  const [formData, setFormData] = useState({});

  useEffect(() => {
      if(props.kg){
        setFormData({ kg: props.kg });
      }
  }, []);


  const submitForm = async(e) =>  {
    e.preventDefault();
    const formData = new FormData(e.target);
    let manager = { address: {} };
    for (let pair of formData) {
      if (
        pair[0] === "city" ||
        pair[0] === "street" ||
        pair[0] === "number" ||
        pair[0] === "postcode"
      ) {
        manager.address[pair[0]] = pair[1];
      } else {
        manager[pair[0]] = pair[1];
      }
    }
    await setFormData({ ...formData, manager: manager });
    let url = "";
    if(props.kg){
        url = "/kg/register"
    }else {
        url = "/users/managers"
    }
    axios({
        method: "post",
        url: url,
        headers: {
          "Accept" : "application/json",
          "Content-Type": "application/json",
        },
        body:formData
      })
        .then(response => {
          if (response.success) {
            console.log(response.manager); // if success redirect to the manager profile.
          } else {
            console.log(response); // deal with the error
          }
        })
        .catch(err => console.log(err)); // show the error to the user
    };
  return (
    <div>
      <form onSubmit={submitForm}>
        <label>
          First Name
          <input type='text' name='firstName' placeholder='First Name' />
        </label>
        <label>
          Last Name
          <input type='text' name='lastName' required placeholder='Last Name' />
        </label>
        <label>
          Birthday
          <input type='date' name='birthday' placeholder='Birthday' />
        </label>
        <label>
          Phone Number
          <input type='text' name='phoneNumber' placeholder='Phone Number' />
        </label>
        <label>
          Email
          <input type='email' name='email' required placeholder='E-mail' />
        </label>
        <label>
          Address
          <input type='text' name='street' placeholder='Street' />
          <input type='text' name='number' placeholder='Number' />
          <input type='text' name='city' placeholder='City' />
        </label>
     
        <label>
          Password
          <input type='password' name='password' placeholder='Password' />
        </label>
        <input type='submit' value='Register' />

      </form>
      <Link to='/'>
          <input type='submit' value='Cancel' />
        </Link>
    </div>
  );
}
