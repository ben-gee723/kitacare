/*
import React, { useState, useEffect } from 'react'
import styles from './Tpage.module.scss'
import axios from "axios";

/*
    Import children/render
    -> Import children via getAllChildren based on kg group
    -> once group of children recieved
        return list of all children
    -> render firstName, lastName, label, input-radioButton of each child
        use radio buttons to identify if child is/isn't here

    using updateChild
    -> if child === "here" / radio button === "here"
        send current date to child.attendance array
    -> else don't send array to attendance

    EXTRA: organise like To-do List
        1. Unallocated List:    --> if neither radio button is checked
        2. Present List:        --> if here is checked
        3. Not Present List:    --> if not here is checked
*/
/*
export default function Attendance() {
    const [children, setChildren] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:3001/child/getAllChildren`,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then(result => {
                console.log(result);
                if (result.data.success) {
                    setChildren(result.data.allChildren);
                } else {
                    console.log(result);
                }
            })
            .catch(err => console.log(err));
    }, []);

    const updateChildren = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h1> Attendance: {new Date} </h1>
            {children.map(child => {
                return (
                    <div key={child.id} >
                        <div>
                            <h3>{child.firstName}</h3>
                            <p>{child.lastName}</p>
                        </div>
                        <div>
                            <label type="radio" ><input>Here</input></label>
                            <label type="radio" ><input>Not Here</input></label>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
*/