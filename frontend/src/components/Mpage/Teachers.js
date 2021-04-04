/** @format */

import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../../Container";
import axios from "axios";

export default function Teachers() {
  const { kg } = useContext(MyContext);
  const [teachers, setTeachers] = useState([]);
  const [managers, setManagers] = useState([]);
  const [verificationCode, setVerificationCode] = useState("");

  //get all teachers and managers working at this kg!
  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: `http://localhost:3001/users/teachers/${kg._id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.teachers);
          setTeachers(response.data.teachers);
        } else {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));

    axios({
      method: "GET",
      withCredentials: true,
      url: `http://localhost:3001/users/managers/${kg._id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.managers);
          setManagers(response.data.managers);
        } else {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const generateCodeHandler = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: `http://localhost:3001/kg/getVerificationCode/${kg._id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.code);
          setVerificationCode(response.data.code);
        } else {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <h4>Managers</h4>
        {managers &&
          managers.map((manager) => {
            return (
              <ul>
                <li key={manager._id}>
                  {manager.firstName} {manager.lastName}
                </li>
              </ul>
            );
          })}
      </div>
      <div>
        <h4>Teachers</h4>
        {teachers &&
          teachers.map((teacher) => {
            return (
              <ul>
                <li key={teacher._id}>
                  {teacher.firstName} {teacher.lastName}
                </li>
              </ul>
            );
          })}
      </div>
      <button className='next'>Create Teacher</button>
      <button className='next' onClick={generateCodeHandler}>
        Generate Code
      </button>
      {verificationCode && <p>VerificationCode: {verificationCode}</p>}
    </div>
  );
}
