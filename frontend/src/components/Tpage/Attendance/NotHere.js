
import React from 'react'

export default function NotHere({ notHere, handleAttendance }) {

    return (
        <div>
            <h1> Not Here:</h1>
            {notHere.map(child => {
                return (
                    <div key={child._id} >
                        <div>
                            <h3>{child.firstName}</h3>
                            <p>{child.lastName}</p>
                        </div>
                        <div>
                            <form onSubmit={(e) => handleAttendance(e, child._id)} >
                                <label>
                                    <input type="radio" name="attendance" value="here" /> Here
                                </label>
                                <label>
                                    <input type="radio" name="attendance" value="notHere" /> Not Here
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
