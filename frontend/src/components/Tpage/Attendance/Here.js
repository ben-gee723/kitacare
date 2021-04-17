/** @format */

import React from "react";

export default function Here({ hereChildren, handleAttendance }) {
  return (
    <div>
      <h1> Here: </h1>
      {hereChildren &&
        hereChildren.map((child) => {
          return (
            <div key={child.child._id}>
              <div>
                <h3>
                  {child.child.firstName} {child.child.lastName}
                </h3>
              </div>
              <div>
                <form onSubmit={(e) => handleAttendance(e, child.child._id)}>
                  <label>
                    <input
                      type='radio'
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
