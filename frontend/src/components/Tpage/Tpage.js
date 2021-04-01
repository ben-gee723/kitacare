import React from 'react'
import Calendar from '../Calendar/Calendar'
import  styles from './Tpage.module.scss'
import {Link} from "react-router-dom"

export default function Tpage() {
    return (
        <>
        <div className={styles.tpContainer}>

            <div className={styles.tInfo}>
                <div className={styles.tImg}>
                    <img src="" alt=""/>
                </div>
                <p>Name Surname</p>
                <p>E-mail: 123</p>
                <p>Phone number: 123</p>
                <p>Group: 123</p>
                <br/>
                <button className='edit'>Edit Info</button>
            </div>
        
            <div className={styles.features}>
                <div className={styles.tGroup}>
                    <h3>Class room name</h3>
                    <p>Class room description</p>
                    <li>Group age: 3-5</li>
                    <li>Room: 123</li>
                    <br/>
                    <button className='view'>View Group</button>
                </div>
                <div className={styles.tAtt}>
                    <h3>Attendance</h3>
                    <br/>
                    <Link to='/attendace'>
                        <button className='view'>Check</button>
                    </Link>
                </div>
                <div className={styles.tTodo}>
                    <h3>To do list</h3>
                </div>
                <div className={styles.calendar}>
                    <Calendar/>
                </div>
            </div>

            
        </div>
        
            
        </>
    )
}
