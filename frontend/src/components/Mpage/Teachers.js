import React, { useState, useEffect, useContext } from 'react'
import {MyContext} from "../../Container"
import axios from "axios"

export default function Teachers() {

    const {kg} = useContext(MyContext)
    const [teachers,setTeachers]=useState([])
    const [managers,setManagers]=useState([])

    //get all teachers and managers working at this kg!
    useEffect(() => {
        //get all teachers:working!
        axios({
            method: "GET",
            withCredentials: true,
            url: `http://localhost:3001/users/teachers/${kg._id}`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        })
        .then(response => {
            if (response.data.success) {
                setTeachers(response.data.teachers)
            } else {
                console.log(response);
            }
        })
        .catch(err => console.log(err))

        //get all managers:
        axios({
            method: "GET",
            withCredentials: true,
            url: `http://localhost:3001/users/managers/${kg._id}`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        })
        .then(response => {
            console.log(response)
            if (response.data.success) {
                console.log(response.data.managers)
                setManagers(response.data.managers)
            } else {
                console.log(response);
            }
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div >
            <div>
                <h4>Managers</h4>
                {managers && managers.map(manager=>{
                    return <ul>
                        <li>{manager.firstName,manager.lastName}</li>
                    </ul>
                })}
            </div>      
            <div>
                <h4>Teachers</h4>
                {teachers && teachers.map(teacher=>{
                    return <ul>
                        <li>{teacher.firstName,teacher.lastName}</li>
                    </ul>
                })}
            </div>
            <button type='submit' value='Next' className='next'>Create Teacher</button>
            <button type='submit' value='Next' className='next'>Generate Code</button>
        </div>
    )
}