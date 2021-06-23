/** @format */

import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import styles from "./groups.module.scss";
import { MyContext } from "../../Container";

export default function SingleGroupEdit(props) {
  const { reset } = useContext(MyContext);
  const [editedGroup, setEditedGroup] = useState({});
  const [group, setGroup] = useState(
    props.location.state ? props.location.state.group : {}
  );
  const [message, setMessage] = useState({
    submitting: false,
    status: null,
  });
  let history = useHistory();

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

  const handleDelete = () => {
    axios(`${process.env.REACT_APP_BASE_URL}/groups/deleteGroup/${group._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    })
      .then((result) => {
        if (result.data.success) {
          console.log(result.data);
          history.push("/groups");
        } else {
          console.log(result);
        }
      })
      .catch((err) =>
        err.response.status == 401 ? reset() : console.log(err)
      );
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setMessage({ submitting: true });
    axios(`${process.env.REACT_APP_BASE_URL}/groups/updateGroup/${group._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      data: editedGroup,
    })
      .then((result) => {
        if (result.success) {
          setEditedGroup(result.group);
        } else {
          console.log(result);
        }
      })
      .catch((err) =>
        err.response.status == 401 ? reset() : console.log(err)
      );
  };

  const editedValue = (e) => {
    setEditedGroup({ ...editedGroup, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.regForm}>
      <form
        className={styles.addcontainer}
        onSubmit={handleEdit}
        name='managerForm'
        key='group._id'>
        <div className={styles.title}>
          <h3>Edit Group!</h3>
        </div>
        <div className={styles.addinfo}>
          <label>Group Name</label>
          <br />
          <input
            type='text'
            name='groupName'
            placeholder={group.groupName}
            onChange={editedValue}
          />
        </div>
        <div className={styles.addinfo}>
          <label>Room</label>
          <br />
          <input
            type='text'
            name='room'
            placeholder={group.room}
            onChange={editedValue}
          />
        </div>
        <div className={styles.addinfo}>
          <label className='details'>Age Group</label>
          <br />
          <input
            type='text'
            name='ageGroup'
            placeholder={group.ageGroup}
            onChange={editedValue}
          />
        </div>
        <div className={styles.addinfo}>
          <label>Description</label>
          <br />
          <input
            type='text'
            name='description'
            placeholder={group.description}
            onChange={editedValue}
          />
        </div>
        <br />
        <div className={styles.btn}>
          <Link to='/groups'>
            <button className='cancel'>Cancel</button>
          </Link>
          <button
            type='submit'
            value='Edit'
            className='att'
            onClick={() =>
              handleMessage(true, "Thank you! The group was updated.")
            }>
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
      <button
        type='submit'
        value='delete'
        className='next'
        style={{
          width: "5rem",
          margin: "0 auto",
        }}
        onClick={() => handleDelete(group._id)}>
        Delete
      </button>
    </div>
  );
}
