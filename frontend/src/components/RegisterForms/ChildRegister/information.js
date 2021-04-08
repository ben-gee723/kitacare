import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from '../registerForm.module.scss';
import { sendData, submitForm } from "../../../logic/registerLogic";
import ChildHealth from "./health";

export default function ChildRegister() {
    const [formData, setFormData] = useState("");
    const [childData, setChildData] = useState({})
    const [checked, setChecked] = useState([]);
    const [categories, setCategories] = useState([
        { _id: "0", name: "Eggs" },
        { _id: "1", name: "Milk" },
        { _id: "2", name: "Peanuts" },
        { _id: "3", name: "Soy" },
        { _id: "4", name: "Wheat" },
        { _id: "5", name: "Tree Nuts" },
        { _id: "6", name: "Seefood" },
        { _id: "7", name: "Fish" },
        { _id: "8", name: "Raw Fruit" },
        { _id: "9", name: "Raw Veggies" }
    ]);

    useEffect(() => {
        if (childData) {
            sendData("child registration", childData)
        } else { return }
    }, [childData])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const handleToggle = c => () => {
        // return the first index or -1
        const clickedCategory = checked.indexOf(c);
        const all = [...checked];

        if (clickedCategory === -1) {
            all.push(c);
        } else {
            all.splice(clickedCategory, 1);
        }
        console.log("The ._id's are: ", all)
        setChecked(all);
        // formData.set("categories", all);
    };

    const submitChildForm = (e) => {
        e.preventDefault();
        let allergies = categories.filter((x) => {
            return checked.find((i) => {
                if (i === x._id) {
                    return x
                }
            })
        })
            .map((x) => { return x.name });

        let childObj = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            birthday: formData.birthday,
            /* 
                address: {
                type: AddressSchema,
                required: false,
            },
            */
            kg: kg._id,
            img: formData.img,
            allergies: [...allergies],
            dietaryNeeds: formData.dietaryNeeds,
            emergencyContact: [
                {
                    emerName1: formData.emerName1,
                    emerEmail1: formData.emerEmail1,
                    emerNumber1: formData.emerNumber1
                },
                {
                    emerName2: formData.emerName2,
                    emerEmail2: formData.emerEmail2,
                    emerNumber2: formData.emerNumber2
                }
            ],
            attendance: [
                { date: Date }
            ]
        }


        setChildData({ child: childObj })

        console.log(childObj)
    }

    // 
    return (
        <div className={styles.regForm}>
            <form onSubmit={submitChildForm} name="childForm" >

                <div className="reg" >
                    <h1>Register Child</h1>
                </div>

                <div className='regInfo'>
                    <h3>Child Information:</h3>
                </div>

                <div className='inputBox' >
                    <label className='details'>First name</label> <br />
                    <input onChange={handleChange} type='text' name='firstName' placeholder='First Name' />
                </div>

                <div className='inputBox' >
                    <label className='details' >Last name</label> <br />
                    <input onChange={handleChange} type='text' name='lastName' placeholder='Last Name' />
                </div>

                <div className='inputBox' >
                    <label className='details' >Birthday</label> <br />
                    <input onChange={handleChange} type='date' name='birthday' placeholder='Birthday' />
                </div>


                <div className='inputBox' >
                    <label className='details'>Profile Image</label> <br />
                    <input onChange={handleChange} type='' name='img' placeholder='img' />
                </div>

                <div className='regInfo'>
                    <h3>Allergies and Dietary Requirements:</h3>
                </div>

                <div className={styles.listUnstyled}>
                    {categories.map((c, i) => (
                        <li key={i} >
                            <input
                                onChange={handleToggle(c._id)}
                                type="checkbox"
                                className="mr-2"
                            />
                            <label className="form-check-label">{c.name}</label>
                        </li>
                    ))}
                </div>

                <div className='inputBox' >
                    <label className='details'>Other Dietary Requirements</label> <br />
                    <input onChange={handleChange} type='text' name='dietaryNeeds' placeholder='Other allergies or dietary requirements' />
                </div>

                <div className={styles.address}><h3>Emergency Contact1:</h3></div>

                <div className='inputBox' >
                    <label className='details'>First name</label> <br />
                    <input onChange={handleChange} type='text' name='emerName1' placeholder='First Name' />
                </div>

                <div className='inputBox'>
                    <label className='details'>Email</label><br />
                    <input onChange={handleChange} type='email' name='emerEmail1' placeholder='E-mail' />
                </div>

                <div className='inputBox'>
                    <label className='details'>Number</label><br />
                    <input onChange={handleChange} type='text' name='emerNumber1' placeholder='Number' />
                </div>

                <div className={styles.address}><h3>Emergency Contact1:</h3></div>

                <div className='inputBox' >
                    <label className='details'>First name</label> <br />
                    <input onChange={handleChange} type='text' name='emerName2' placeholder='First Name' />
                </div>

                <div className='inputBox'>
                    <label className='details'>Email</label><br />
                    <input onChange={handleChange} type='email' name='emerEmail2' placeholder='E-mail' />
                </div>

                <div className='inputBox'>
                    <label className='details'>Number</label><br />
                    <input onChange={handleChange} type='text' name='emerNumber2' placeholder='Number' />
                </div>

                <div className={styles.submitButtons}>
                    {/* <Link to='/'><button className="cancel">Cancel</button></Link>
                    <Link to='cregister_health'><button type='submit' value='Next' className='next'>Next</button></Link> */}
                    <button type='submit' value='Register' className='att'>Submit</button>
                </div>
            </form>
        </div>
    )
}