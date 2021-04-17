
import React, { useState, useEffect, useContext } from 'react'
import styles from '../Tpage.module.scss'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import axios from "axios";
import { MyContext } from "../../../Container";

import Here from './Here';
import NotHere from './NotHere';

export default function Attendance() {
    const [children, setChildren] = useState([]);
    const { kg, user } = useContext(MyContext);
    // const [attendance, setAttendance] = useState([]);
    // [{child:..., attendanceStatus: "here/notHere", date: ""}]
    let date = new Date().getFullYear() + "-" + ("0" + (new Date().getMonth() + 1)).slice(-2) + "-" + ("0" + new Date().getDate()).slice(-2)
    // console.log(date)
    console.log(children)

    let hereChildrenNew = children.filter(obj => obj.attendance.date == date);
    // console.log("new here children", hereChildrenNew)
    let notHereChildrenNew = children.map(child => {
        if (child.attendance.length != 0) {
            return child.attendance[0]
        } else {
            return
        }

    })
    console.log("new notHere children", notHereChildrenNew)

    let hereChildren = children.length ? children.filter(obj => obj.attendanceInfo == "here") : [];
    let notHereChildren = children.length ? children.filter((obj) => obj.attendanceInfo == "notHere") : [];

    // console.log(hereChildren)
    // console.log(notHereChildren)

    // Getting the children from the kindergarten
    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:3001/child/getAllChildren/${kg._id}`,
            // url: `http://localhost:3001/child/getChildrenFromGroup/${child.group}`,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then(result => {
                // console.log(result);
                if (result.data.success) {
                    let groupChildren = result.data.allChildren.filter(obj =>
                        obj.group === user.group._id
                    )
                    // console.log(groupChildren)
                    setChildren(groupChildren);
                } else {
                    console.log(result);
                }
            })
            .catch(err => console.log(err))
    }, []);

    const handleAttendance = (e, childId) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        let obj = {}
        for (let pair of formData) {
            obj[pair[0]] = pair[1];
        }
        console.log(obj)
        // console.log(attendance)
        // console.log(children)


        axios(`http://localhost:3001/child/updateAttendance/${childId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            data: obj
        }).then(result => {
            if (result.success) {
                // setAttendance(result.data.updatedAttendance);
            } else {
                console.log(result);
            }
        });
    }

    return (

        <div className='app'>
            <Here
                hereChildren={hereChildren}
                handleAttendance={handleAttendance}
            />
            <NotHere
                notHereChildren={notHereChildren}
                handleAttendance={handleAttendance}
            />
        </div>

    )
}
