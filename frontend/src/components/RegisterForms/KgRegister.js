/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ManagerRegister from "./ManagerRegister";
import styles from "./registerForm.module.scss";
import { submitForm } from "../../logic/registerLogic";

export default function KgRegister() {
  const [data, setData] = useState({});

  const saveKgForm = (e) => {
    e.preventDefault();
    let kgObj = submitForm(e);
    setData({ kg: { ...kgObj, verificationCodes: [] } });
  };

  return (
    <div className={styles.regForm}>
      {!data.kg && (
        <form
          className={styles.formContainer}
          onSubmit={(e) => {
            saveKgForm(e);
          }}
          name='kgForm'>
          <div className='reg'>Register Kindergarten!</div>

          <div className='regBox'>
            <div>
              <div className='inputBox'>
                <label className='details'>Kindergarten name</label>
                <br />
                <input
                  type='text'
                  name='name'
                  placeholder='Kindergarten Name'
                  required
                />
              </div>

              <div className='inputBox'>
                <label className='details'>Phone number</label>
                <br />
                <input
                  type='text'
                  name='phoneNumber'
                  placeholder='Phone Number'
                  required
                />
              </div>

              <div className='inputBox'>
                <label className='details'>Email</label>
                <br />
                <input
                  type='email'
                  name='email'
                  placeholder='E-mail'
                  required
                />
              </div>

              <div className='inputBox'>
                <label className='details'>Street</label>
                <br />
                <input
                  type='text'
                  name='street'
                  placeholder='Street'
                  required
                />
              </div>
            </div>

            <div className='smallBox'>
              <div className='inputBox'>
                <label className='details'>Number</label>
                <br />
                <input
                  type='text'
                  name='number'
                  placeholder='Number'
                  required
                />
              </div>

              <div className='inputBox'>
                <label className='details'>City</label>
                <br />
                <input type='text' name='city' placeholder='City' required />
              </div>

              <div className='inputBox'>
                <label className='details'>Post code</label>
                <br />
                <input
                  type='number'
                  name='postcode'
                  required
                  placeholder='Postcode'
                />
              </div>

              <br />
              <div className={styles.btnContainer}>
                <button type='submit' value='Next' className='next'>
                  Next
                </button>
                <Link to='/'>
                  <button className='cancel'>Cancel</button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      )}
      {data.kg && <ManagerRegister kg={data.kg} />}
    </div>
  );
}
