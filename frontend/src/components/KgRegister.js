import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function KgRegister() {
  const [user, setUser] = useState({
    kgName: "",
    phoneNumber: "",
    email: "",
    street: "",
    number: "",
    city: "",
    postcode: "",
  });

  const submitForm = e => {
    e.preventDefault();
    //   const formData = new FormData(e.target);
    //   let user={address:{}};
    //   for(let pair of formData){
    //     if(pair[0]==="city"||pair[0]==="street" || pair[0]==="number"|| pair[0]==="postcode"){
    //       user.address[pair[0]]=pair[1]
    //     }else{ user[pair[0]]=pair[1]};
    // };
  /*  axios({
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
          console.log(response.user);
          // props.history.push("/mregister")
        } else {
          console.log(response);
        }
      })
      .catch(err => console.log(err)); */
  };

  const grabValue = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label>
          Kindergarten Name
          <input
            type='text'
            name='kgName'
            placeholder='Kindergarten Name'
            onChange={grabValue}
          />
        </label>
        <label>
          Phone Number
          <input
            type='text'
            name='phoneNumber'
            placeholder='Phone Number'
            onChange={grabValue}
          />
        </label>
        <label>
          Email
          <input
            type='email'
            name='email'
            required
            placeholder='E-mail'
            onChange={grabValue}
          />
        </label>
        <label>
          Address
          <input
            type='text'
            name='street'
            placeholder='Street'
            onChange={grabValue}
          />
          <input
            type='text'
            name='number'
            placeholder='Number'
            onChange={grabValue}
          />
          <input
            type='text'
            name='city'
            placeholder='City'
            onChange={grabValue}
          />
        </label>
        <input type='submit' value='Next' />
        <Link to='/mregister'>
          <input type='submit' value='Cancel' />
        </Link>
      </form>
    </div>
  );
}
