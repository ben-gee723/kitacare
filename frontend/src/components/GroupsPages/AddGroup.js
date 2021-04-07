import React, {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function AddGroup() {
const [data, setData] = useState({});
  const submitForm = e => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3001/groups/addGroup",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then(response => {
        if (response.data.success) {
          console.log(response.data.group);
        } else {
          console.log(response);
        }
      })
      .catch(err => console.log(err));
  };

  const grabValue = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <div className='regInfo'>
          <h3>Information we need:</h3>
        </div>

        <div className='inputBox'>
          <label className='details'>Group Name</label>
          <br />
          <input
            type='text'
            name='groupName'
            placeholder='groupName'
            onChange={grabValue}
          />
        </div>
        <button type='submit' value='Submit' className='submit event'>
          Submit
        </button>
      </form>
    </div>
  );
}
