/** @format */

import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./groups.module.scss";
import { MyContext } from "../../Container";

export default function AddGroup(props) {
  const { user, reset } = useContext(MyContext);
  const [data, setData] = useState({});
  const [message, setMessage] = useState({
    submitting: false,
    status: null,
  });

  let timer;
  const handleMessage = (ok, msg) => {
    setMessage({
      submitting: false,
      status: { ok, msg },
    });
    timer = setTimeout(() => {
      props.history.push({ pathname: "/groups" });
    }, 2000);
    return () => clearTimeout(timer);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setMessage({ submitting: true });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/groups/addGroup`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
      data: { ...data, kg: user.kg },
    })
      .then((response) => {
        if (response.data.success) {
          handleMessage(true, "Thank you! We received your information.");
          console.log(response.data.group);
        } else {
          console.log(response);
        }
      })
      .catch((err) =>
        err.response.status == 401 ? reset() : console.log(err)
      );
  };

  const grabValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.maincontainer}>
      <div className={styles.title}>
        <h3>Information we need:</h3>
      </div>
      <form onSubmit={submitForm}>
        <div className={styles.addcontainer}>
          <div className={styles.addinfo}>
            <label>Group Name</label>
            <br />
            <input
              type='text'
              name='groupName'
              placeholder='groupName'
              onChange={grabValue}
            />
          </div>
          <div className={styles.addinfo}>
            <label>Room</label>
            <br />
            <input
              type='text'
              name='room'
              placeholder='room'
              onChange={grabValue}
            />
          </div>
          <div className={styles.addinfo}>
            <label className='details'>Age Group</label>
            <br />
            <input
              type='text'
              name='ageGroup'
              placeholder='ex: children between 1 and 2 years old'
              onChange={grabValue}
            />
          </div>
          <div className={styles.addinfo}>
            <label>Description</label>
            <br />
            <input
              type='text'
              name='description'
              placeholder='group description'
              onChange={grabValue}
            />
          </div>
        </div>
        <div className={styles.btn}>
          <Link to='/groups'>
            <button type='submit' value='Cancel' className='cancel'>
              Cancel
            </button>
          </Link>
          <button type='submit' value='Submit' className='submit'>
            Submit
          </button>
          {message.status && (
            <p
              className={!message.status.ok ? "errorMsg" : ""}
              style={{ fontSize: "0.65rem" }}>
              {message.status.msg}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
