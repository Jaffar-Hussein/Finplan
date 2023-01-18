import Navbar from './Navbar'
import NavBar from './Navbar';
import Toast from './toast';

import { Routes, Route, useNavigate } from "react-router-dom";

import '../styling/goal.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
function Debt() {

    let navigate = useNavigate();
    const [message,setMessage]=useState("")
    const [debts, setDebts] = React.useState([]);
    const [records, setRecords] = React.useState([]);
    const bear = 'Bearer ' + localStorage.getItem('jwt')
    const [name, setName] = React.useState("")
    const [amount_due, setAmount_due] = React.useState("")
    const [due_date, setDue_date] = React.useState("")
    useEffect(() => {

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

    // function handleChange(e) {
    //     const value = e.target.value;
    // console.log(value);

    //     setRecords({
    //         ...records,
    //         [e.target.name]: value
    //     });
    // }
    // console.log(records);

    function handleSubmit(e) {
        e.preventDefault();

        // const formData = { name:name, amount_due: amount_due,  records.due_date };
        if (name && amount_due && due_date){
            fetch("https://finplanbackend-production.up.railway.app/debts", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': bear
    
    
                },
                body:  JSON.stringify({
                    name,
                    amount_due,
                    due_date
                  }),
            })
                .then(r => r.json())
                .then((newItem) => setDebts([...debts, newItem]));
            navigate('/debt');
            setName("")
            setAmount_due("")
            setDue_date("")
            setMessage("")
        }else{
            setMessage("Please input valid data")
        }


    }
    function Save(goalId) {
        navigate(`/debt/` + goalId)

    }

    return (
        <>
            <Navbar></Navbar>

            <div className='container'>
                <div className='row flip'>
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
                            <table className="table">
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
                                        return <tr key={debt.id+debt.name}>
                                            {/* <th scope="row">1</th> */}
                                            <td>{debt.name}</td>
                                            <td>{debt.amount_due}</td>
                                            <td>{debt.amount_paid}</td>
                                            <td>{debt.due_date}</td>
                                            <td><button className='btn btn-primary btn-sm' onClick={() => Save(debt.id)}>Save</button></td>
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
                        <form className="m-5 needs-validation" onSubmit={handleSubmit} noValidate>
                            <div>
                                <label className='labl'>Debt Name *</label>
                                <input type="text" name="name" value={name} placeholder="Enter debt" onChange={(e) => setName(e.target.value)} className='form-control' required/>
                            </div>
                            <div className='my-5'>
                                <label className='labl'>Amount *</label>
                                <input type="number" name="amount_due" value={amount_due} placeholder="Enter amount due" onChange={(e) => setAmount_due(e.target.value)} className='form-control' required/>

                            </div>
                            <div>
                                <label className='labl'>Due Date *</label>
                                <input type="date" name="due_date" value={due_date} placeholder="Enter Due date" onChange={(e) => setDue_date(e.target.value)} className='form-control' required/>

                            </div>
                            <div className='d-flex justify-content-center my-5'>
                                <button className="btn btn-primary" type='submit' >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

            <Toast message={message}/>

        </>
    );

}
export default Debt