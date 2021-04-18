/** @format */

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styles from "./children.module.scss";
import { Link } from "react-router-dom";
import { MyContext } from "../../Container";
import kid from "../../images/kid_avatar.svg";

export default function AllChildren(props) {
  const [children, setChildren] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const { user } = useContext(MyContext);

  useEffect(() => {
    let url;
    url =
      user.role === "Manager"
        ? `http://localhost:3001/child/getAllChildren/${user.kg}`
        : `http://localhost:3001/child//getChildrenFromGroup/${user.group._id}`;
    axios({
      method: "GET",
      url: url,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        if (result.data.success) {
          setChildren(result.data.allChildren);
        } else {
          console.log(result);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const getAllGroups = () => {
    axios({
      method: "GET",
      url: `http://localhost:3001/groups/getAllGroups/${user.kg} `,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        if (result.data.success) {
          setGroups(result.data.allGroups);
        } else {
          console.log(result);
        }
      })
      .catch((err) => console.log(err));
  };
  const handleEdit = (child) => {
    props.history.push({ pathname: "/editchild", state: { child: child } });
  };
  const handleEditGroup = (child) => {
    getAllGroups();
  };
  const changeGroup = (id) => {
    //to assign none as group:
    let obj;
    if (selectedGroup == "empty") {
      obj = {
        method: "PUT",
        // withCredentials: true,
        url: `http://localhost:3001/child/deleteChildsGroup/${id}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
    } else {
      obj = {
        method: "PUT",
        // withCredentials: true,
        url: `http://localhost:3001/child/updateChild/${id}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: { group: selectedGroup },
      };
    }
    axios(obj)
      .then((result) => {
        if (result.data.success) {
          //reload the page:
          setGroups(null);
          // window.location.reload();
        } else {
          console.log(result.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <div key={children._id} className={styles.cContainer}>
        {children.map((child) => {
          return (
            <div className={styles.scontainer} key={child._id}>
              <img src={kid} className={styles.kid} />
              <div className={styles.col1}>
                <p className={styles.bold2}>
                  {child.firstName} {child.lastName}
                </p>
              </div>
              <div className={styles.col}>
                <p className={styles.info}>{child.birthday}</p>
              </div>
              <div className={styles.col}>
                <p className={styles.info}>
                  {child.address.street} {child.address.number},{" "}
                  {child.address.postcode} {child.address.city}
                </p>
              </div>
              <div className={styles.col}>
                <p className={styles.info}>Emergency Contact 1:</p>
                <p className={styles.info}>
                  {child.emergencyContact[0].emerName1}{" "}
                  {child.emergencyContact[0].emerEmail1}{" "}
                  {child.emergencyContact[0].emerNumber1}
                </p>
              </div>
              <div className={styles.col}>
                <p className={styles.info}>Emergency Contact 2:</p>
                <p className={styles.info}>
                  {child.emergencyContact[1].emerName2}{" "}
                  {child.emergencyContact[1].emerEmail2}{" "}
                  {child.emergencyContact[1].emerNumber2}
                </p>
              </div>
              <div className={styles.col2}>
                <p className={styles.info}>
                  Allergies: {child.allergies[0]} {child.allergies[1]}{" "}
                  {child.allergies[2]} {child.allergies[3]}
                  {child.allergies[4]} {child.allergies[5]}
                </p>
              </div>
              <div className={styles.col2}>
                <p className={styles.info}>
                  Dietary Needs: {child.dietaryNeeds}
                </p>
              </div>
              <div>
                {user.role == "Manager" && (
                  <button
                    type='submit'
                    value='edit'
                    className='fixedit'
                    onClick={() => handleEdit(child)}>
                    Edit
                  </button>
                )}
                {user.role == "Manager" && (
                  <button
                    type='submit'
                    value='edit'
                    className='add'
                    onClick={() => handleEditGroup(child)}>
                    Edit Group
                  </button>
                )}
                {groups && groups.length ? (
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
                    <label
                      key='none'
                      htmlFor='none'
                      style={{ flexDirection: "row" }}>
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
                    <button
                      onClick={() => changeGroup(child._id)}
                      disabled={selectedGroup ? false : true}>
                      save
                    </button>
                  </form>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
      {user.role == "Manager" && (
        <Link to='/cregister'>
          <button type='submit' value='add' className='add'>
            Add
          </button>
        </Link>
      )}
    </div>
  );
}
