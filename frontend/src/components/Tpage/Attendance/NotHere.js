
import React from 'react'

export default function NotHere({ notHereChildren, handleAttendance }) {

    return (
        <div>
            <h1> Not Here:</h1>
            {notHereChildren.map(child => {
                return (
                    <div key={child.attendanceInfo.child._id} >
                        <div>
                            <h3>{child.attendanceInfo.child.firstName}</h3>
                            <p>{child.attendanceInfo.child.lastName}</p>
                        </div>
                        <div>
                            <form onSubmit={(e) => handleAttendance(e, child.attendanceInfo.child._id)} >
                                <label>
                                    <input type="radio" name="attendanceStatus" value="here" /> Here
                                </label>
                                <label>
                                    <input type="radio" name="attendanceStatus" value="notHere" /> Not Here
                                    </label>
                                <button type="submit" > Submit </button>
                            </form>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
