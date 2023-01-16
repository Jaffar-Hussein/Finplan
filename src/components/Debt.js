import Navbar from './Navbar'
import NavBar from './Navbar';
import { Routes, Route, useNavigate } from "react-router-dom";

import '../styling/goal.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
function Debt() {

    let navigate = useNavigate();

    const [debts, setDebts] = React.useState([]);
    const [records, setRecords] = React.useState([]);
    const bear = 'Bearer ' + localStorage.getItem('jwt')
    React.useEffect(() => {

        axios.get(`https://finplanbackend-production.up.railway.app/debts`, {
            headers: {
                'Authorization': bear
            },
        })
            .then((response) => {

                setDebts(response.data)

            })
    })

    debts.map((goal) => {
        const d = new Date(goal.due_date);
        goal.due_date = d.toDateString();

    })
    let total = 0;

    debts.forEach((goal) => {
        total += goal.amount_paid

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

        const formData = { name: records.name, amount_due: records.amount_due, due_date: records.due_date };

        fetch("https://finplanbackend-production.up.railway.app/debts", {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': bear


            },
            body: JSON.stringify(formData),
        })
            .then(r => r.json())
            .then((newItem) => setDebts([...debts, newItem]));
        navigate('/debt');


    }
    function Save(goalId) {
        navigate(`/debt/` + goalId)

    }

    return (
        <>
            <Navbar></Navbar>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='d-flex justify-content-around text-center my-5'>
                            <div className='goalCard px-5 py-3'>
                                <p>{debts.length}</p>
                                <p>Total Debts</p>
                            </div>
                            <div className='goalCard px-5 py-3'>
                                <p>Ksh  {total}</p>
                                <p>Debts Paid</p>
                            </div>
                        </div>
                        <div>
                            <table class="table">
                                <thead>
                                    <tr>
                                        {/* <th scope="col">#</th> */}
                                        <th scope="col" className='tableTitle'>Name</th>
                                        <th scope="col" className='tableTitle'>Amount due</th>
                                        <th scope="col" className='tableTitle'>Amount paid</th>
                                        <th scope="col" className='tableTitle'>Due Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {debts.map((debt) => {
                                        return <tr>
                                            {/* <th scope="row">1</th> */}
                                            <td>{debt.name}</td>
                                            <td>{debt.amount_due}</td>
                                            <td>{debt.amount_paid}</td>
                                            <td>{debt.due_date}</td>
                                            <button className='btn btn-primary btn-sm' onClick={() => Save(debt.id)}>Save</button>
                                        </tr>
                                    })}

                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className='col-md-6 '>
                        <div className='d-flex justify-content-center'>
                            <p className='titleGoal h3'>Create a debt</p>
                        </div>
                        <form className='m-5'>
                            <div>
                                <label className='labl'>Debt Name *</label>
                                <input type="text" name="name" placeholder="Enter goal name" onChange={handleChange} className='form-control' />
                            </div>
                            <div className='my-5'>
                                <label className='labl'>Amount *</label>
                                <input type="number" name="amount_due" placeholder="Enter amount due" onChange={handleChange} className='form-control' />

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
export default Debt