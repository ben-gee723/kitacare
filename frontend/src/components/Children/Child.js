/** @format */

import React, { useContext, useState } from "react";
import { MyContext } from "../../Container";
import kid from "../../images/kid_avatar.svg";
import kid2 from "../../images/kid_avatar2.svg";
import kid3 from "../../images/kid_avatar3.svg";
import kid4 from "../../images/kid_avatar4.svg";
import styles from "./children.module.scss";
import axios from "axios";
const images = [kid, kid2, kid3, kid4];

export default function Child(props) {
  const { user } = useContext(MyContext);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const child = props.child;
  const randImg = images[props.imageNum];

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
    <div className={styles.scontainer} key={child._id}>
      <img src={randImg} className={styles.kid} />
      <div className={styles.col1}>
        <p className={styles.bold2}>
          {child.firstName} {child.lastName}
        </p>
      </div>
      <div className={styles.maininfo}>
        <div className={styles.col}>
          <p className={styles.info}>{child.birthday.split("T")[0]}</p>
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
          <p className={styles.info}>Dietary Needs: {child.dietaryNeeds}</p>
        </div>
        <div className={styles.col2}>
          <p className={styles.info}>
            Group: {child.group ? child.group.groupName : "none"}
          </p>
        </div>
      </div>
      <div className={styles.btn2}>
        {user.role == "Manager" && (
          <button
            type='submit'
            value='edit'
            className='fixedit'
            onClick={() => props.handleEdit(child)}>
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
            <div
              className={styles.groups}
              style={{
                padding: "5%",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "space-between",
                color: "black",
              }}>
              {groups.map((group) => {
                return (
                  <label key={group.groupName} htmlFor={group.groupName}>
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
              <label key='none' htmlFor='none' style={{ flexDirection: "row" }}>
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
                disabled={selectedGroup ? false : true}
                className='add'>
                save
              </button>
            </div>
          </form>
        ) : null}
      </div>
    </div>
  );
}
