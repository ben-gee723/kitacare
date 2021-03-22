import React, { useState } from "react";
import axios from "axios"

export default function CalendarForm(props) {
  const [data, setData] = useState({
    startDate: "",
    endDate: "",
    name: "",
  });

  console.log(data)
  const date = props.day;

  const submitForm = e => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:4000/calendar",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then(response => {
        if (response.data.success) {
          console.log(response.data.event);
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
      <h1>Add Event</h1>
      <form onSubmit={submitForm}>
        <label for='start'> Start Date</label>
        <input
          type='date'
          name='startDate'
          defaultValue={date}
          min='2018-01-01'
          max='2022-12-31'
          onChange={grabValue}
        />
        <label for='start'> End Date</label>
        <input
          type='date'
          name='endDate'
          defaultValue={date}
          min='2018-01-01'
          max='2022-12-31'
          onChange={grabValue}
        />
         <input
          type='text'
          name='name'
          placeholder="enter event"
          onChange={grabValue}
        />
        <button type='submit' value='Submit'>Submit</button>
      </form>
    </div>
  );
}
