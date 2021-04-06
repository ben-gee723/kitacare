import React from 'react'
import Calendar from '../Calendar/Calendar'

import  styles from './Tpage.module.scss'
import {Link} from "react-router-dom"
import ToDo from '../ToDo/ToDo'


export default function Tpage() {
    return (
        <>
        <div className={styles.welcome}>
            <h2>Welcome user!</h2>
        </div>
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
                    <Link to='/attendance'>
                        <button className='view'>Check Attendance</button>
                    </Link>
                </div>
                
                <div className={styles.tTodo}>
                    
                    <ToDo/>                    
                </div>

                <div className={styles.calendar}>
                    <Calendar/>
                </div>
            </div>

            
        </div>
        
            
        </>
    )
}
