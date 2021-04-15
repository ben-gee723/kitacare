
import React from 'react'

export default function Here({ here, handleAttendance }) {

    return (
        <div>
            <h1> Here:</h1>
            {here.map(child => {
                return (
                    <div key={child._id} >
                        <div>
                            <h3>{child.firstName}</h3>
                            <p>{child.lastName}</p>
                        </div>
                        <div>
                            <form onSubmit={(e) => handleAttendance(e, child._id)} >
                                <label>
                                    <input type="radio" name="attendance" value="here"
                                    /> Here
                                </label>
                                <label>
                                    <input type="radio" name="attendance" value="notHere"
                                    /> Not Here
                                </label>
                                <button
                                    type="submit"
                                    disabled={!this.state.value}
                                > Submit
                                </button>
                            </form>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
