import Navbar from './Navbar'
import NavBar from './Navbar';
import { Routes, Route, useNavigate } from "react-router-dom";

import '../styling/goal.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
function Retirement(){
    let navigate = useNavigate();

    const [retirements, setRetirements] = React.useState([]);
    const [records, setRecords] = React.useState([]);
    const [totLal, setTotal] = React.useState(null);
    const bear = 'Bearer ' + localStorage.getItem('jwt')
    React.useEffect(() => {

        axios.get(`https://finplanbackend-production.up.railway.app/retirements`, {
            headers: {
                'Authorization': bear
            },
        })
            .then((response) => {

                setRetirements(response.data)

            })
    })

    retirements.map((goal) => {
        const d = new Date(goal.due_date);
        goal.due_date = d.toDateString();
        
    })    
        let total = 0;

    retirements.forEach((goal) => {
        total += goal.money_saved
        
        // setTotal(total);
    })

    function handleChange(e) {
        const value = e.target.value;
        setRecords({
            ...records,
            [e.target.name]: value
        });
    }
    console.log(records);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = { retirement_age: records.retirement_age, retirement_goal: records.retirement_goal, money_saved: records.money_saved };

        fetch("https://finplanbackend-production.up.railway.app/retirements", {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': bear


            },
            body: JSON.stringify(formData),
        })
            .then(r => r.json())
            .then((newItem) => setRetirements([...retirements, newItem]));
        navigate('/retirement');


    }
    function Save(goalId) {
        navigate(`/retirement/` + goalId)

    }

    return (
        <>
            <Navbar></Navbar>

            <div className='container'>
                <div className='row flip'>
                    <div className='col-md-6'>
                        <div className='d-flex justify-content-around text-center my-5'>
                            <div className='goalCard px-5 py-3'>
                                <p>{retirements.length}</p>
                                <p>Retirement Set</p>
                            </div>
                            <div className='goalCard px-5 py-3'>
                                <p>{total}</p>
                                <p>Savings Done</p>
                            </div>
                        </div>
                        <div>
                            <table class="table">
                                <thead>
                                    <tr>
                                        {/* <th scope="col">#</th> */}
                                        <th scope="col" className='tableTitle'>Retirement Age</th>
                                        <th scope="col" className='tableTitle'>Retirement Goal</th>
                                        <th scope="col" className='tableTitle'>Money Saved</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {retirements.map((req) => {
                                        return <tr>
                                            {/* <th scope="row">1</th> */}
                                            <td>{req.retirement_age}</td>
                                            <td>{req.retirement_goal}</td>
                                            <td>{req.money_saved}</td>
                                            
                                            <button className='btn btn-primary btn-sm' onClick={() => Save(req.id)}>Save</button>
                                        </tr>
                                    })}

                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className='col-md-6 '>
                        <div className='d-flex justify-content-center'>
                            <p className='titleGoal h3'>Create a Retirement Goal</p>
                        </div>
                        <form className='m-5'>
                            <div>
                                <label className='labl'>Retirement Age *</label>
                                <input type="number" name="retirement_age" placeholder="Enter Retirement age" onChange={handleChange} className='form-control' />
                            </div>
                            <div className='my-5'>
                                <label className='labl'>Retirement Goal (Money) *</label>
                                <input type="text" name="retirement_goal" placeholder="Enter Retirement goal" onChange={handleChange} className='form-control' />

                            </div>
                            <div>
                                <label className='labl'>Money saved so far *</label>
                                <input type="text" name="money_saved" placeholder="Enter Retirement money saved so far" onChange={handleChange} className='form-control' />

                            </div>
                            <div className='d-flex justify-content-center my-5'>
                                <button className="btn btn-primary" type='submit' onSubmit={handleSubmit} onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Retirement;