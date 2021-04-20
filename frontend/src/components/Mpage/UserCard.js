/** @format */

import React, { useState, useContext } from "react";
import axios from "axios";
import user1 from "../../images/user1.png";
import user2 from "../../images/user2.png";
import user3 from "../../images/user3.png";
import user4 from "../../images/user4.png";
import { MyContext } from "../../Container";
import styles from "./Teachers.module.scss";

const images = [user1, user2, user3, user4];

export default function UserCard(props) {
  const user = props.user;
  const randImg = images[props.imageNum];
  const [groups, setGroups] = useState();
  const [showRoles, setShowRoles] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const { kg } = useContext(MyContext);

  const getAllGroups = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: `http://localhost:3001/groups/getAllGroups/${kg._id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        if (result.data.success) {
          setGroups(result.data.allGroups);
        } else {
          console.log(result.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const changeGroup = (id) => {
    //to assign none as group:
    let obj;
    if (selectedGroup == "empty") {
      obj = {
        method: "PUT",
        url: `http://localhost:3001/users/userGroup/${id}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
    } else {
      obj = {
        method: "PUT",
        url: `http://localhost:3001/users/users/${id}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
        data: { group: selectedGroup },
      };
    }
    axios(obj)
      .then((result) => {
        if (result.data.success) {
          setGroups(null);
          window.location.reload();
        } else {
          console.log(result.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const changeRole = (id) => {
    axios({
      method: "PUT",
      withCredentials: true,
      url: `http://localhost:3001/users/users/${id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: { role: selectedRole },
    })
      .then((result) => {
        if (result.data.success) {
          setShowRoles(false);
          window.location.reload();
        } else {
          console.log(result.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div key={user._id}>
      <div className={styles.scontainer} bg='success'>
        <div className={styles.imgContainer}>
          <img variant='top' src={randImg} />
        </div>
        <div className={styles.card}>
          <p className={styles.cardtitle}>
            {user.firstName} {user.lastName}
          </p>
        </div>
        <div className={styles.listgroup}>
          <div className={styles.listgroupitem}>
            {user.group
              ? `Group: ${user.group.groupName}`
              : "Please assign a group"}
          </div>
        </div>
        <div className={styles.btn}>
          <button
            className='edit2'
            onClick={!groups ? () => getAllGroups() : () => setGroups(null)}>
            edit group
          </button>
          <button className='edit3' onClick={() => setShowRoles(!showRoles)}>
            edit role
          </button>
        </div>
        {/* Role buttons */}
        {showRoles && (
          <div className={styles.listgroupitem}>
            <div className={styles.listgroupitem}>
              <form>
                <label htmlFor='Teacher' style={{ flexDirection: "row" }}>
                  <input
                    style={{ display: "inline", width: "20px", height: "20px" }}
                    type='radio'
                    id='Teacher'
                    name='role'
                    value='Teacher'
                    onClick={() => setSelectedRole("Teacher")}
                  />
                  Teacher
                </label>

                <label htmlFor='Manager'>
                  <input
                    style={{ display: "inline", width: "20px", height: "20px" }}
                    type='radio'
                    id='Manager'
                    name='role'
                    value='Manager'
                    onClick={() => setSelectedRole("Manager")}
                  />
                  Manager
                </label>
              </form>
            </div>
            <button
              type='submit'
              className='add'
              style={{ display: "inline", margin: "0 auto" }}
              onClick={() => changeRole(user._id)}
              disabled={selectedRole ? false : true}>
              save
            </button>
          </div>
        )}
        {/* Group name buttons */}
        {groups && (
          <div className={styles.listgroup}>
            <div className={styles.listgroupitem}>
              <form>
                {groups.map((group) => {
                  return (
                    <label
                      key={group.groupName}
                      htmlFor={group.groupName}
                      style={{ flexDirection: "row" }}>
                      <input
                        style={{
                          display: "inline",
                          width: "20px",
                          height: "20px",
                        }}
                        type='radio'
                        id={group.groupName}
                        name='group'
                        value={group.groupName}
                        onClick={() => setSelectedGroup(group._id)}
                      />
                      {group.groupName}
                    </label>
                  );
                })}
                <label key='none' htmlFor='none'>
                  <input
                    style={{
                      display: "inline",
                      width: "20px",
                      height: "20px",
                    }}
                    type='radio'
                    id='none'
                    name='group'
                    value='none'
                    onClick={() => setSelectedGroup("empty")}
                  />
                  none
                </label>
              </form>
            </div>
            <button
              type='submit'
              className='add'
              style={{ display: "block", margin: "0 auto" }}
              onClick={() => changeGroup(user._id)}
              disabled={selectedGroup ? false : true}>
              save
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
