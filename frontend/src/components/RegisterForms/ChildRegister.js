/** @format */

import React, { useState, useEffect, useContext } from "react";
import styles from "./ChildStyle/ChildRegister.module.scss";
import { sendData, submitForm } from "../../logic/registerLogic";
import { MyContext } from "../../Container";

export default function ChildRegister(props) {
  const { kg, user } = useContext(MyContext);
  const [formData, setFormData] = useState("");
  const [categories, setCategories] = useState([
    { _id: "0", name: "Eggs" },
    { _id: "1", name: "Milk" },
    { _id: "2", name: "Peanuts" },
    { _id: "3", name: "Soy" },
    { _id: "4", name: "Wheat" },
    { _id: "5", name: "Tree Nuts" },
    { _id: "6", name: "Seefood" },
    { _id: "7", name: "Fish" },
    { _id: "8", name: "Raw Fruit" },
    { _id: "9", name: "Raw Veggies" },
  ]);
  const [message, setMessage] = useState({
    submitting: false,
    status: null,
  });

  useEffect(() => {
    if (formData.child) {
      sendData("child registration", {
        ...formData.child,
        kg: kg._id,
        attendance: [{ attendanceStatus: "notHere", date: "2021-04-21" }],
      });
    } else {
      return;
    }
  }, [formData]);

  const submitChildForm = (e) => {
    e.preventDefault();
    let childObj = submitForm(e);
    setFormData({ child: childObj });
    handleMessage(true, "Thank you! Child added.");
    console.log(childObj);
  };

  let timer;
  const handleMessage = (ok, msg) => {
    setMessage({
      submitting: false,
      status: { ok, msg },
    });
    timer = setTimeout(() => {
      props.history.push({ pathname: "/children" });
    }, 2000);
    return () => clearTimeout(timer);
  };

  //
  return (
    <div className={styles.formContainter}>
      <form
        onSubmit={(e) => submitChildForm(e)}
        name='childForm'
        className={styles.childForm}>
        <div className={styles.childFormContainerInner}>
          <div className={styles.childFormInner}>
            <div className={styles.regInfo}>
              <h3>Child Information:</h3>
            </div>

            <div className={styles.inputBox}>
              <label className={styles.details}>First name</label> <br />
              <input
                type='text'
                name='firstName'
                placeholder='First Name'
                required
              />
            </div>

            <div className={styles.inputBox}>
              <label className={styles.details}>Last name</label> <br />
              <input
                type='text'
                name='lastName'
                placeholder='Last Name'
                required
              />
            </div>

            <div className={styles.inputBox}>
              <label className={styles.details}>Birthday</label> <br />
              <input
                type='date'
                name='birthday'
                placeholder='Birthday'
                required
              />
            </div>

            <div className={styles.inputBox}>
              <label className={styles.details}>Profile Image</label> <br />
              <input type='' name='img' placeholder='img' />
            </div>

            <div className={styles.regInfo}>
              <h3>Address:</h3>
            </div>

            <div className={styles.inputBox}>
              <label className={styles.details}>Street</label>
              <br />
              <input type='text' name='street' placeholder='Street' required />
            </div>

            <div className={styles.inputBox}>
              <label className={styles.details}>Number</label>
              <br />
              <input type='text' name='number' placeholder='Number' required />
            </div>

            <div className={styles.inputBox}>
              <label className={styles.details}>City</label>
              <br />
              <input type='text' name='city' placeholder='City' required />
            </div>

            <div className={styles.inputBox}>
              <label className={styles.details}>Post code</label>
              <br />
              <input
                type='number'
                name='postcode'
                required
                placeholder='Postcode'
              />
            </div>
          </div>

          <div className={styles.childFormInner}>
            <div className={styles.regInfo}>
              <h3>Allergies and Dietary Requirements:</h3>
            </div>
            <div className={styles.listUnstyled}>
              {categories.map((c, i) => (
                <li key={i}>
                  <input
                    type='checkbox'
                    className={styles.checkBox}
                    name={c.name}
                  />
                  <label className={styles.formCheckLabel}>{c.name}</label>
                </li>
              ))}
            </div>

            <div className={styles.inputBox}>
              <label className={styles.details}>
                Other Dietary Requirements
              </label>{" "}
              <br />
              <input
                type='text'
                name='dietaryNeeds'
                placeholder='Other allergies or dietary requirements'
              />
            </div>
          </div>

          <div className={styles.childFormInner}>
            <div className={styles.regInfo}>
              <h3>Emergency Contact 1:</h3>
            </div>

            <div className={styles.emerInput}>
              <label className={styles.details}>Full Name</label> <br />
              <input
                type='text'
                name='emerName1'
                placeholder='Full Name'
                required
              />
            </div>

            <div className={styles.emerInput}>
              <label className={styles.details}>Email</label>
              <br />
              <input
                type='email'
                name='emerEmail1'
                placeholder='E-mail'
                required
              />
            </div>

            <div className={styles.emerInput}>
              <label className={styles.details}>Number</label>
              <br />
              <input
                type='text'
                name='emerNumber1'
                placeholder='Number'
                required
              />
            </div>

            <div className={styles.regInfo}>
              <h3>Emergency Contact 2:</h3>
            </div>

            <div className={styles.emerInput}>
              <label className={styles.details}>Full Name</label> <br />
              <input
                type='text'
                name='emerName2'
                placeholder='Full Name'
                required
              />
            </div>

            <div className={styles.emerInput}>
              <label className={styles.details}>Email</label>
              <br />
              <input
                type='email'
                name='emerEmail2'
                placeholder='E-mail'
                required
              />
            </div>

            <div className={styles.emerInput}>
              <label className={styles.details}>Number</label>
              <br />
              <input
                type='text'
                name='emerNumber2'
                placeholder='Number'
                required
              />
            </div>

            <div className={styles.submitButtons}>
              {/* <Link to='/'><button className="cancel">Cancel</button></Link>
                    <Link to='cregister_health'><button type='submit' value='Next' className='next'>Next</button></Link> */}
              <button type='submit' value='Register' className={styles.att}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
