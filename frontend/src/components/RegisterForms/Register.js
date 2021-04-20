import React from "react";
import { Link } from "react-router-dom";
import styles from './registerForm.module.scss';


export default function Register() {
  return (
    <div className={styles.regContainer}>
      <div className='reg'>
        Choose your Account!
      </div>
      <br/>
      <div className="btnform">
      <Link to='/kgregister'>
        <button className="att">Register a Kindergarten</button>
      </Link>
      <Link to='/tregister'>
        <button className="att">Register as Teacher</button>
      </Link>
      </div>
    </div>
  );
}
