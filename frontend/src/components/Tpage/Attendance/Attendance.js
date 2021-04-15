
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
    const [attendance, setAttendance] = useState([]);
    // [{child:..., attendanceStatus: "here/notHere", date: ""}]
    let date = new Date()
    console.log(date)

    let hereChildren = attendance.length ? attendance.filter(obj => obj.attendanceInfo.attendanceStatus == "here") : [];
    let notHereChildren = attendance.length ? attendance.filter((obj) => obj.attendanceInfo.attendanceStatus == "notHere") : [];
    console.log(hereChildren)
    console.log(notHereChildren)

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
                console.log(result);
                if (result.data.success) {
                    let groupChildren = result.data.allChildren.filter(obj =>
                        obj.group === user.group._id
                    )
                    console.log(groupChildren)
                    setChildren(groupChildren);
                } else {
                    console.log(result);
                }
            })
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        if (children.length) {
            console.log(children)
            axios({
                method: "GET",
                url: `http://localhost:3001/child/getAttendanceOfChild/${user.group._id}`,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .then(result => {
                    console.log(result.data);
                    if (result.data.success) {
                        console.log(result.data.attendanceArr)
                        setAttendance(result.data.attendanceArr);
                    } else {
                        console.log(result);
                    }
                })
                .catch(err => console.log(err))
        }
    }, [children])

    const handleAttendance = (e, childId) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        let obj = {}
        for (let pair of formData) {
            obj[pair[0]] = pair[1];
        }
        console.log(obj)


        axios(`http://localhost:3001/child/updateAttendance/${childId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            data: obj
        }).then(result => {
            if (result.success) {
                setAttendance(result.data.updatedAttendance);
            } else {
                console.log(result);
            }
        });

        console.log(obj)
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
