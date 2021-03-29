import React, { useState, useEffect } from "react";
import styles from './registerForm.module.scss';
import { sendData, submitForm } from "../../logic/registerLogic";

export default function ChildRegistration() {
    const [childData, setChildData] = useState({})

    useEffect(() => {
        if (childData.child) {
            sendData("child registration", childData)
        } else { return }
    }, [childData])

    const submitChildForm = (e) => {
        e.preventDefault();
        let childObj = submitForm(e)
        setChildData({ child: childObj })
    }

    // 
    return (
        <div className={styles.regForm}>
            <form onSubmit={submitChildForm} name="childForm" >

                <div className="reg" >
                    <h1>Register Child</h1>
                </div>

                <div className='regInfo'>
                    <h3>Information we need:</h3>
                </div>

                <div className='inputBox' >
                    <label className='details'>First name</label> <br />
                    <input type='text' name='firstName' placeholder='First Name'  > </input>
                </div>

                <div className='inputBox' >
                    <label className='details' >Last name</label> <br />
                    <input type='text' name='lastName' placeholder='Last Name'></input>
                </div>

                <div className='inputBox' >
                    <label className='details' >Birthday</label> <br />
                    <input type='date' name='birthday' placeholder='Birthday'></input>
                </div>

                <div className={styles.address}><h3>Address:</h3></div>

                <div className='inputBox' >
                    <label className='details'>Profile Image</label> <br />
                    <input type='img' name='img' placeholder='img'></input>
                </div>

                <div className='inputBox'>
                    <label className='details' >
                        <input type='radio' name='eggs' value='Eggs'></input>
                    </label>
                    <label className='details' >
                        <input type='radio' name='milk' value='Milk'></input>
                    </label>
                    <label className='details' >
                        <input type='radio' name='Peanuts' value=''></input>
                    </label>
                    <label className='details' >
                        <input type='soy' name='Soy' value=''></input>
                    </label>
                    <label className='details' >
                        <input type='wheat' name='Wheat' value=''></input>
                    </label>
                    <label className='details' >
                        <input type='text' name='other' other=''></input>
                    </label>
                </div>

                {/** create emergency contact model(?) **/}

                <button type='submit' value='Register' className='att'>Submit</button>
            </form>
        </div>
    )
}