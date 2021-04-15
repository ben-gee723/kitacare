
import React, { useState, useEffect, useContext } from 'react'
import styles from '../Tpage.module.scss'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import axios from "axios";
import { MyContext } from "../../../Container";

import Here from './Here';
import NotHere from './NotHere';

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

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:3001/child/getAllChildren/${this.user.kg}`,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then(result => {
                console.log(result);
                if (result.data.success) {
                    this.children.setState(result.data.allChildren);
                } else {
                    console.log(result);
                }
            })
            .catch(err => console.log(err));
    });


    const handleAttendance = (e, childId) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        let obj = {}
        for (let pair of formData) {
            obj[pair[0]] = pair[1];
        }

        // ??
        axios(`http://localhost:3001/child/updateAttendance/${childId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
        }).then(result => {
            if (result.success) {
                this.here.setState();
            } else {
                console.log(result);
            }
        });

        console.log(obj)
    }

    return (
        <BrowserRouter>
            <div className='app'>
                <Switch>
                    <Route exact path='/'>
                        <Here
                            here={here}
                            handleAttendance={this.handleAttendance}
                        />
                        <NotHere
                            notHere={notHere}
                            handleAttendance={this.handleAttendance}
                        />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}
