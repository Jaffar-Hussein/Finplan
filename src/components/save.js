import '../styling/goal.css'
import '../styling/save.css'
import React, { useEffect, useState } from "react";
import NavBar from './Navbar';
import axios from "axios";
import { useParams } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";

function Save() {
    let navigate = useNavigate();

    let { save } = useParams();
    const bear = 'Bearer ' + localStorage.getItem('jwt')
    const [goal, setGoal] = React.useState(null);
    const [records, setRecords] = React.useState([]);

    React.useEffect(() => {

        axios.get(`https://finplanbackend-production.up.railway.app/goals/${save}`, {
            headers: {
                'Authorization': bear
            },
        })
            .then((response) => {

                setGoal(response.data)

            })
    }, [])
    function handleChange(e) {  
        const value = e.target.value;
        setRecords({
            ...records,
            [e.target.name]: value
        });
    }
    function handleSubmit(e) {
        e.preventDefault();

        const  total = parseInt(records.amount_saved) + goal.amount_saved
        const formData = { amount_saved: total };

        fetch(`https://finplanbackend-production.up.railway.app/goals/${save}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': bear


            },
            body: JSON.stringify(formData),
        })
            .then(r => r.json())
            .then((newItem) => setGoal([...goal, newItem]));
        navigate('/goal');


    }
    console.log(goal);
    return (
        <div className="container">
            <NavBar></NavBar>
            <div className="save">
                {goal ?
                    <p className='text-center h3 titleGoal'>{`Save towards ${goal.name}`}</p>
                    : <></>}
                <div className='formFrame saveForm p-5'>

                    <form className="">

                        <div className='my-3'>
                            <label>Amount to Save*</label>
                            <input type="number" placeholder="Enter amount to save" name="amount_saved" onChange={handleChange} className='form-control' required/>

                            <div className='d-flex justify-content-center'>
                                <button className='btn btn-secondary mt-5' type='submit' onClick={handleSubmit} onSubmit={handleSubmit}>Save</button>

                            </div>
                        </div>

                        {/* <div>
                            <input type="number" placeholder="Enter amount to save" name="amount_saved" className='formControl' />

                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Save;