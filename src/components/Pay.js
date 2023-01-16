import '../styling/goal.css'
import '../styling/save.css'
import React, { useEffect, useState } from "react";
import NavBar from './Navbar';
import axios from "axios";
import { useParams } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";

function Pay() {
    let navigate = useNavigate();

    let { id } = useParams();
    const bear = 'Bearer ' + localStorage.getItem('jwt')
    const [debts, setDebts] = React.useState(null);
    const [records, setRecords] = React.useState([]);

    React.useEffect(() => {

        axios.get(`https://finplanbackend-production.up.railway.app/debts/${id}`, {
            headers: {
                'Authorization': bear
            },
        })
            .then((response) => {

                setDebts(response.data)

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

        const  total = parseInt(records.amount_paid) + debts.amount_paid
        const formData = { amount_paid: total };

        fetch(`https://finplanbackend-production.up.railway.app/debts/${id}`, {
            method: "PUT",
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
    return (
        <div className="container">
            <NavBar></NavBar>
            <div className="save">
                {debts ?
                    <p className='text-center h3 titleGoal'>{`Pay towards ${debts.name} Debt`}</p>
                    : <></>}
                <div className='formFrame saveForm p-5'>

                    <form className="">

                        <div className='my-3'>
                            <label>Amount to Pay*</label>
                            <input type="number" placeholder="Enter amount to pay" name="amount_paid" onChange={handleChange} className='form-control' />

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
export default Pay;