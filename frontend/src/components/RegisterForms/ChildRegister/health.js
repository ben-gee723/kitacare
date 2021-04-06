import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from '../registerForm.module.scss';
import { sendData, submitForm } from "../../../logic/registerLogic";

export default function ChildHealth() {
    const [formData, setFormData] = useState("");
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
        setFormData(new FormData());
    }, []);

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

    const add_checked = (e) => {
        let all_checked = [];
        all_checked.push(e.name)
        setChecked(all_checked)
    }

    const submitChildForm = (e) => {
        e.preventDefault()
        console.log(checked)


        let allergies = categories.filter((x) => {
            return checked.find((i) => {
                if (i === x._id) {
                    return x
                }
            })
        })
            .map((x) => { return x.name });

        console.log({ "allergies": allergies })

    }

    // 
    return (
        <div className={styles.regForm}>
            <form onSubmit={submitChildForm} name="childForm" >

                <div className='regInfo'>
                    <h3>Allergies and Dietary Requirements:</h3>
                </div>

                <div className={styles.listUnstyled}>
                    {categories.map((c, i) => (
                        <li key={i} >
                            <input
                                onClick={handleToggle(c._id)}
                                type="checkbox"
                                className="mr-2"
                                // checked="false"
                                value={c.name}
                            />
                            <label className="form-check-label">{c.name}</label>
                        </li>
                    ))}
                </div>

                <div className='inputBox' >
                    <label className='details'>Other Dietary Requirements</label> <br />
                    <input type='text' name='img' placeholder='Other allergies or dietary requirements' />
                </div>

                <div className={styles.submitButtons}>
                    {/* <Link to='/'><button className="cancel">Back</button></Link>
                    <Link to='cregister_emergency'><button type='submit' value='Next' className='next'>Next</button></Link> */}
                    <button type='submit' value='Register' className='att'>Submit</button>
                </div>
            </form>
        </div>
    )
}