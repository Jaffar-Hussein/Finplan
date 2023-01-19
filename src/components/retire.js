import '../styling/goal.css'
import '../styling/save.css'
import React, { useEffect, useState } from "react";
import NavBar from './Navbar';
import axios from "axios";
import { useParams } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";

function Retire() {
    let navigate = useNavigate();

    let { id } = useParams();
    const bear = 'Bearer ' + localStorage.getItem('jwt')
    const [retire, setRetire] = React.useState(null);
    const [records, setRecords] = React.useState([]);

    React.useEffect(() => {

        axios.get(`https://finplanbackend-production.up.railway.app/retirements/${id}`, {
            headers: {
                'Authorization': bear
            },
        })
            .then((response) => {

                setRetire(response.data)

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

        const total = parseInt(records.money_saved) + retire.money_saved
        const formData = { money_saved: total };

        fetch(`https://finplanbackend-production.up.railway.app/retirements/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': bear


            },
            body: JSON.stringify(formData),
        })
            .then(r => r.json())
            .then((newItem) => setRetire([...retire, newItem]));
        navigate('/retirement');


    }
    return (
        <div className="container">
            <NavBar></NavBar>
            <div className="save">
                {retire ?
                    <p className='text-center h3 titleGoal'>{`Save towards retiring with ${retire.name}`}</p>
                    : <></>}
                <div className='formFrame saveForm p-5'>

                    <form className="">

                        <div className='my-3'>
                            <label>Amount to Save*</label>
                            <input type="number" placeholder="Enter amount to save" name="money_saved" onChange={handleChange} className='form-control' />

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
export default Retire;