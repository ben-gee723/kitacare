import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ManagerRegister() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    phoneNumber: "",
    email: "",
    address: "",
    street:"",
    number:"",
    city:"",
    postcode:"",
    kgName: "",
    groupName: "",
    password: "",
    role: "Admin",
  });

  const submitForm = e => {
    e.preventDefault();
  };

  const grabValue = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label>
          First Name :
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            onChange={grabValue}
          />
        </label>
        <br />

        <label>
          Last Name :
          <input
            type='text'
            name='lastName'
            required
            placeholder='Last Name'
            onChange={grabValue}
          />
        </label>
        <br />

        <label>
          Email :{" "}
          <input
            type='email'
            name='email'
            required
            placeholder='E-mail'
            onChange={grabValue}
          />
        </label>
        <br />

        <label>
          Password :
          <input
            type='password'
            name='password'
            required
            placeholder='Password'
            onChange={grabValue}
          />
        </label>
        <br />

        <label>
          Role :{" "}
          <select name='role' id='role' onChange={grabValue} required>
            <option value='User'>User</option>
            <option value='Admin'>Admin</option>
          </select>
        </label>
        <br />

        <label>
          Street :
          <input
            type='text'
            name='street'
            placeholder='Street'
            onChange={grabValue}
          />
        </label>
        <br />
        <label>
          City :
          <input
            type='text'
            name='city'
            placeholder='City'
            onChange={grabValue}
          />
        </label>
        <br />

        <input type='submit' value='Register' />
        <Link to="/"><input type='submit' value='Cancel' /></Link>
      </form>
    </div>
  );
}
