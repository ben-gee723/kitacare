/** @format */
import styles from "./Attendance.module.scss";
import React from "react";

export default function NotHere({ notHereChildren, handleAttendance }) {
  return (
    <div className={styles.attendance}>
      <h4> Not Here</h4>
      {notHereChildren &&
        notHereChildren.map((child) => {
          return (
            <div key={child.child._id} className={styles.notHereChild}>
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
                      value='here'
                    />{" "}
                    Here
                  </label>
                  <button type='submit'> Submit </button>
                </form>
              </div>
            </div>
          );
        })}
    </div>
  );
}
