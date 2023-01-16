import Navbar from './Navbar'
import NavBar from './Navbar';
import { Routes, Route, useNavigate } from "react-router-dom";

import '../styling/goal.css'
import React, { useEffect, useState } from "react";
import axios from "axios";


function Goal() {
    let navigate = useNavigate();

    const [goals, setGoals] = useState([]);
    const [records, setRecords] = useState([]);
    const bear = 'Bearer ' + localStorage.getItem('jwt')

    useEffect(() => {

        axios.get(`https://finplanbackend-production.up.railway.app/goals`, {
            headers: {
                'Authorization': bear
            },
        })
            .then((response) => {

                setGoals(response.data)

            })
    })

    goals.map((goal) => {
        const d = new Date(goal.due_date);
        goal.due_date = d.toDateString()
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

        const formData = { name: records.name, goal_amount: records.goal_amount, due_date: records.due_date };

        fetch("https://finplanbackend-production.up.railway.app/goals", {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': bear


            },
            body: JSON.stringify(formData),
        })
            .then(r => r.json())
            .then((newItem) => setGoals([...goals, newItem]));
        navigate('/goal');


    }
    function Save(goalId){
        navigate(`/`+goalId)

    }

    return (
        <>
            <Navbar></Navbar>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='d-flex justify-content-around text-center my-5'>
                            <div className='goalCard px-5 py-3'>
                                <p>{goals.length}</p>
                                <p>Goals Set</p>
                            </div>
                            <div className='goalCard px-5 py-3'>
                                <p>100</p>
                                <p>Savings Done</p>
                            </div>
                        </div>
                        <div>
                            <table class="table">
                                <thead>
                                    <tr>
                                        {/* <th scope="col">#</th> */}
                                        <th scope="col" className='tableTitle'>Name</th>
                                        <th scope="col" className='tableTitle'>Amount</th>
                                        <th scope="col" className='tableTitle'>Amount Saved</th>
                                        <th scope="col" className='tableTitle'>Due Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {goals.map((goal) => {
                                        return <tr>
                                            {/* <th scope="row">1</th> */}
                                            <td>{goal.name}</td>
                                            <td>{goal.goal_amount}</td>
                                            <td>{goal.amount_saved}</td>
                                            <td>{goal.due_date}</td>
                                            <button className='btn btn-primary btn-sm' onClick={() => Save(goal.id)}>Save</button>
                                        </tr>
                                    })}

                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className='col-md-6 '>
                        <div className='d-flex justify-content-center'>
                            <p className='titleGoal h3'>Create a goal</p>
                        </div>
                        <form className='m-5'>
                            <div>
                                <label className='labl'>Goal Name *</label>
                                <input type="text" name="name" placeholder="Enter goal name" onChange={handleChange} className='form-control' />
                            </div>
                            <div className='my-5'>
                                <label className='labl'>Amount *</label>
                                <input type="number" name="goal_amount" placeholder="Enter goal amount" onChange={handleChange} className='form-control' />

                            </div>
                            <div>
                                <label className='labl'>Due Date *</label>
                                <input type="date" name="due_date" placeholder="Enter Due date" onChange={handleChange} className='form-control' />

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
export default Goal;