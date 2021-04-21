/** @format */
import styles from "./Attendance.module.scss";
import React from "react";

export default function Here({ hereChildren, handleAttendance }) {
  return (
    <div className={styles.attendance}>
      <h4> Here </h4>
      {hereChildren &&
        hereChildren.map((child) => {
          return (
            <div key={child.child._id} className={styles.hereChild}>
              <div>
                <p>
                  {child.child.firstName} {child.child.lastName}
                </p>
              </div>
              <div>
                <form onSubmit={(e) => handleAttendance(e, child.child._id)}>
                  <label>
                    <input
                      type='checkbox'
                      name='attendanceStatus'
                      value='notHere'
                    />{" "}
                    Not Here
                  </label>
                  <button type='submit'> Submit</button>
                </form>
              </div>
            </div>
          );
        })}
    </div>
  );
}
