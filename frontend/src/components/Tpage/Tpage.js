import React from 'react'
import  styles from './Tpage.module.scss'

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
                <button type='submit' value='Next' className='next'>Edit</button>
            </div>
        
            <div className={styles.features}>
                <div className={styles.tGroup}>
                    <h3>Class room name</h3>
                    <p>Class room description</p>
                    <br/>
                    <button type='submit' value='Next' className='next'>View</button>
                </div>
                <div className={styles.tAtt}>
                    <h3>Attendance</h3>
                    <br/>
                    <button type='submit' value='Next' className='next'>Check</button>
                </div>
                <div className={styles.tTodo}>
                    <h3>To do list</h3>
                </div>
            </div>

            
        </div>
        
            
        </>
    )
}
