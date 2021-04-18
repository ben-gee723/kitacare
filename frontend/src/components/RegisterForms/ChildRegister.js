import React, { useState, useEffect, useContext } from "react";
import styles from "./registerForm.module.scss";
import { sendData, submitForm } from "../../logic/registerLogic";
import { MyContext } from "../../Container";

export default function ChildRegister() {
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
      sendData("child registration", { ...formData.child, kg: kg._id });
    } else {
      return;
    }
  }, [formData]);

  const submitChildForm = e => {
    e.preventDefault();
    let childObj = submitForm(e);

    setFormData({ child: childObj });
    handleMessage(true, "Thank you! Child added.");
    console.log(childObj);
  };


  const handleMessage = (ok, msg) => {
    setMessage({
      submitting: false,
      status: { ok, msg },
    });
  };

  //
  return (
    <div className={styles.regForm}>
      <form onSubmit={e => submitChildForm(e)} name='childForm'>
        <div className='reg'>
          <h1>Register Child</h1>
        </div>

        <div className='regInfo'>
          <h3>Child Information:</h3>
        </div>

        <div className='inputBox'>
          <label className='details'>First name</label> <br />
          <input otype='text' name='firstName' placeholder='First Name' />
        </div>

        <div className='inputBox'>
          <label className='details'>Last name</label> <br />
          <input type='text' name='lastName' placeholder='Last Name' />
        </div>

        <div className='inputBox'>
          <label className='details'>Birthday</label> <br />
          <input type='date' name='birthday' placeholder='Birthday' />
        </div>

        <div className='inputBox'>
          <label className='details'>Profile Image</label> <br />
          <input type='' name='img' placeholder='img' />
        </div>

        <div className={styles.address}>
          <h3>Address:</h3>
        </div>

        <div className='inputBox'>
          <label className='details'>Street</label>
          <br />
          <input type='text' name='street' placeholder='Street' />
        </div>

        <div className='inputBox'>
          <label className='details'>Number</label>
          <br />
          <input type='text' name='number' placeholder='Number' />
        </div>

        <div className='inputBox'>
          <label className='details'>City</label>
          <br />
          <input type='text' name='city' placeholder='City' />
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

        <div className='regInfo'>
          <h3>Allergies and Dietary Requirements:</h3>
        </div>

        <div className={styles.listUnstyled}>
          {categories.map((c, i) => (
            <li key={i}>
              <input type='checkbox' className='mr-2' name={c.name} />
              <label className='form-check-label'>{c.name}</label>
            </li>
          ))}
        </div>

        <div className='inputBox'>
          <label className='details'>Other Dietary Requirements</label> <br />
          <input
            type='text'
            name='dietaryNeeds'
            placeholder='Other allergies or dietary requirements'
          />
        </div>

        <div className={styles.address}>
          <h3>Emergency Contact 1:</h3>
        </div>

        <div className='inputBox'>
          <label className='details'>First name</label> <br />
          <input type='text' name='emerName1' placeholder='First Name' />
        </div>

        <div className='inputBox'>
          <label className='details'>Email</label>
          <br />
          <input type='email' name='emerEmail1' placeholder='E-mail' />
        </div>

        <div className='inputBox'>
          <label className='details'>Number</label>
          <br />
          <input type='text' name='emerNumber1' placeholder='Number' />
        </div>

        <div className={styles.address}>
          <h3>Emergency Contact 2:</h3>
        </div>

        <div className='inputBox'>
          <label className='details'>First name</label> <br />
          <input type='text' name='emerName2' placeholder='First Name' />
        </div>

        <div className='inputBox'>
          <label className='details'>Email</label>
          <br />
          <input type='email' name='emerEmail2' placeholder='E-mail' />
        </div>

        <div className='inputBox'>
          <label className='details'>Number</label>
          <br />
          <input type='text' name='emerNumber2' placeholder='Number' />
        </div>

        <div className={styles.submitButtons}>
          {/* <Link to='/'><button className="cancel">Cancel</button></Link>
                    <Link to='cregister_health'><button type='submit' value='Next' className='next'>Next</button></Link> */}
          <button type='submit' value='Register' className='att'>
            Submit
          </button>
          {message.status && (
            <p
              className={!message.status.ok ? "errorMsg" : ""}
              style={{ fontSize: "0.65rem" }}
            >
              {message.status.msg}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
