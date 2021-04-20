/** @format */

import React, { useContext } from "react";
import Calendar from "../Calendar/Calendar";
import styles from "./Tpage.module.scss";
import { Link } from "react-router-dom";
import ToDo from "../ToDo/ToDo";
import { MyContext } from "../../Container";
import managerImg from "../../images/manager.svg";

export default function Tpage(props) {
  const { user } = useContext(MyContext);

  const handleView = () => {
    props.history.push({
      pathname: ["/children"],
      state: { group: user.group },
    });
  };

  const handleEdit = () => {
    props.history.push({ pathname: "/editprofile" });
  };

  return (
    <>
      <div className={styles.tpContainer}>
        <div className={styles.tInfo}>
          <div className={styles.tImg}>
            <img src={managerImg} alt='' />
          </div>
          <div>
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{user.email}</p>
          <p>{user.phoneNumber}</p>
          {user.group && <p>{user.group.groupName}</p>}
          <button
          type='submit'
          value='edit'
          className='edit'
          onClick={() => handleEdit()}
          className="edit">Edit Info</button>
          </div>
        </div>

        <div className={styles.features}>
          {user.group && (
            <div className={styles.tGroup}>
              <div className={styles.gHead}>
                <h2>Group:</h2>
                <h3 className={styles.gHeader}>{user.group.groupName}</h3>
              </div>
              {user.group.description && <p>{user.group.description}</p>}
              {user.group.ageGroup && <li>Group age: {user.group.ageGroup}</li>}
              {user.group.room && <li>Room: {user.group.room}</li>}
              <br />

              <button onClick={() => handleView()} className='add'>
                View Group
              </button>

              <Link to='/attendance'>
                <button className='view'>Check Attendance</button>
              </Link>
            </div>
          )}

          <div className={styles.tTodo}>
            <ToDo />
          </div>

          <div className={styles.calendar}>
            <Calendar />
          </div>
        </div>
      </div>
    </>
  );
}
