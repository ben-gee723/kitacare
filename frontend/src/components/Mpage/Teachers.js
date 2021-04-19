/** @format */

import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../../Container";
import axios from "axios";
import UserCard from "./UserCard";
import styles from "./Teachers.module.scss"

export default function Teachers() {
  const { kg } = useContext(MyContext);
  const [teachers, setTeachers] = useState([]);
  const [managers, setManagers] = useState([]);
  const [verificationCode, setVerificationCode] = useState("");

  //getting all teachers and managers working at this kg:
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
          setVerificationCode(response.data.code);
        } else {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className={styles.btn}>
       <button className='next' onClick={generateCodeHandler}>
        Generate Code
      </button>
      {verificationCode && <p>VerificationCode: {verificationCode}</p>}
      </div>
      <div className={styles.header}>
        <h4>Managers</h4>
        </div>
        <div className={styles.container}>
          {managers &&
            managers.map((manager, i) => {
              return (
                <UserCard
                  user={manager}
                  imageNum={i > 3 ? i % 4 : i}
                  key={manager.email}
                />
              );
            })}
        </div>
      <div className={styles.header}>
        <h4>Teachers</h4>
        </div>
        <div className={styles.container}>
          {teachers &&
            teachers.map((teacher, i) => {
              return (
                <UserCard
                  user={teacher}
                  imageNum={i > 3 ? i % 4 : i}
                  key={teacher.email}
                />
              );
            })}
        </div>
     
    </div>
  );
}
