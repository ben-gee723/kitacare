import React from "react";
import {Link} from "react-router-dom";

export default function Register() {
  return (
    <div>
      <h1>Choose your Account!</h1>
  <Link to="/kgregister"><p>Register a Kindergarten</p></Link> 
  <Link to="/tregister"><p>Register as a Teacher</p></Link>
  <Link to="/mregister"><p>Register as a Manager</p></Link>
    </div>
  );
}
