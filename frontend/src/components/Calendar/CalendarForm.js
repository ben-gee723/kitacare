import React, { useState } from "react";

export default function CalendarForm(props) {
  const [data, setData] = useState({
    startDate: "",
    endDate: "",
    name: "",
  });

  const submitForm = e => {
    e.preventDefault();
    axios({
      method: "POST",
      url: url,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: bodyObj,
    })
      .then(response => {
        if (response.data.success) {
          console.log(response.data.user);
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
        <label for="start"> Start Date</label>
        <input
          type='date'
          id='start'
          name='startDate'
          value='2018-07-22'
          min='2018-01-01'
          max='2018-12-31'
          onChange={grabValue}
        />

        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}
