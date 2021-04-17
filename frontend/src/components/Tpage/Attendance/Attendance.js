/** @format */

import React, { useState, useEffect, useContext } from "react";
import styles from "../Tpage.module.scss";
import axios from "axios";
import { MyContext } from "../../../Container";
import Here from "./Here";
import NotHere from "./NotHere";

export default function Attendance() {
  const { kg, user } = useContext(MyContext);
  // [{child:..., attendanceStatus: "here/notHere", date: ""}]
  const [here, setHere] = useState();
  const [notHere, setNotHere] = useState();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3001/child/getAttendanceOfChild/${user.group._id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        if (result.data.success) {
          let hereChildren = [];
          let notHereChildren = [];
          console.log(result.data.attendanceArr);
          result.data.attendanceArr.map((childAtt) => {
            childAtt.attendanceInfo.attendanceStatus == "here"
              ? hereChildren.push(childAtt.attendanceInfo)
              : notHereChildren.push(childAtt.attendanceInfo);
          });
          setHere(hereChildren);
          setNotHere(notHereChildren);
        } else {
          console.log(result);
        }
      })
      .catch((err) => console.log(err));
    // }
  }, []);

  const handleAttendance = (e, childId) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    let obj = {};
    for (let pair of formData) {
      obj[pair[0]] = pair[1];
    }

    axios(`http://localhost:3001/child/updateAttendance/${childId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: obj,
    }).then((result) => {
      if (result.data.success) {
        //setAttendance for this child:
        let id = result.data.updatedAttendance.child._id;
        if (obj.attendanceStatus == "here") {
          let newNotHere = notHere.filter((obj) => obj.child._id !== id);
          setNotHere(newNotHere);
          let filteredHere = here.filter((obj) => obj.child._id == id);
          !filteredHere.length &&
            setHere([...here, result.data.updatedAttendance]);
        } else {
          let newHere = here.filter((obj) => obj.child._id !== id);
          setHere(newHere);
          let filteredNotHere = notHere.filter((obj) => obj.child._id == id);
          !filteredNotHere.length &&
            setNotHere([...notHere, result.data.updatedAttendance]);
        }
      } else {
        console.log(result);
      }
    });
  };

  return (
    <div className='app'>
      <Here
        hereChildren={here}
        notHereChildren={notHere}
        handleAttendance={handleAttendance}
      />
      <NotHere
        hereChildren={here}
        notHereChildren={notHere}
        handleAttendance={handleAttendance}
      />
    </div>
  );
}
