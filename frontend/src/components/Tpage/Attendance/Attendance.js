
import React, { useState, useEffect, useContext } from 'react'
import styles from '../Tpage.module.scss'
import axios from "axios";
import { MyContext } from "../../../Container";

/*
    Import children/render
    -> Import children via getAllChildren based on kg group
    -> once group of children recieved
        return list of all children
    -> render firstName, lastName, label, input-radioButton of each child
            yes - no
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

export default function Attendance() {
    const [children, setChildren] = useState([]);
    const { kg, user } = useContext(MyContext);
    const [here, setHere] = useState([]);
    const [notHere, setNotHere] = useState([]);

    console.log(kg);
    console.log(user);

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:3001/child/getAllChildren/${user.kg}`,
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

    const submitHandler = (e, childId) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        let obj = {}
        for (let pair of formData) {
            obj[pair[0]] = pair[1];
        }
        console.log(obj)
    }

    return (
        <div>
            <h1> Attendance: {new Date} </h1>
            {children.map(child => {
                return (
                    <div key={child._id} >
                        <div>
                            <h3>{child.firstName}</h3>
                            <p>{child.lastName}</p>
                        </div>
                        <div>
                            <form onSubmit={(e) => submitHandler(e, child._id)} >
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
