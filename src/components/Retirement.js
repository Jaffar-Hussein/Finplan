import Navbar from './Navbar'
import NavBar from './Navbar';
// import Toast from './toast';
import { Routes, Route, useNavigate } from "react-router-dom";

import '../styling/goal.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Toast from './toast';
function Retirement(){
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [retirement_goal, setRetirement_goal] = useState("");
    const [money_saved, setMoney_saved] = useState("");
    const [message,setMessage]=useState("")


    const [retirements, setRetirements] = React.useState([]);
    const [records, setRecords] = React.useState([]);
    const [totLal, setTotal] = React.useState(null);
    const bear = 'Bearer ' + localStorage.getItem('jwt')
    useEffect(() => {

        axios.get(`https://finplanbackend-production.up.railway.app/retirements`, {
            headers: {
                'Authorization': bear
            },
        })
            .then((response) => {
                console.log(response.data);
                setRetirements(response.data)

            })
    },[])

    retirements.map((goal) => {
        const d = new Date(goal.due_date);
        goal.due_date = d.toDateString();
        
    })    
        let total = 0;

    retirements.forEach((goal) => {
        total += goal.money_saved
        
        // setTotal(total);
    })

    // function handleChange(e) {
    //     const value = e.target.value;
    //     setRecords({
    //         ...records,
    //         [e.target.name]: value
    //     });
    // }
    // console.log(records);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name);

        // const formData = { name: records.name, retirement_goal: records.retirement_goal, money_saved: records.money_saved };
        // if (name && money_saved && retirement_goal){
        fetch("https://finplanbackend-production.up.railway.app/retirements", {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': bear


            },
            body: JSON.stringify({money_saved, retirement_goal, name}),
        })
            .then(r => r.json())
            .then((newItem) => setRetirements([...retirements, newItem]));
            
        navigate('/retirement');
        setMessage("")
        setMoney_saved("")
        setName("")
        setRetirement_goal("")

    // }else{
    //     setMessage("Please input valid data")

    // }
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
                            <table className="table">
                                <thead>
                                    <tr>
                                        {/* <th scope="col">#</th> */}
                                        <th scope="col" className='tableTitle'>Retirement Plan</th>
                                        <th scope="col" className='tableTitle'>Financial Cost</th>
                                        <th scope="col" className='tableTitle'>Money Saved</th>
                                        <th scope="col" className='tableTitle'>Save</th>

                                        {/* <th></th> */}
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {retirements.map((req) => {
                                        return <tr>
                                            {/* <th scope="row">1</th> */}
                                            <td>{req.name}</td>
                                            <td>{req.retirement_goal}</td>
                                            <td>{req.money_saved}</td>
                                            <td>
                                            <button className='btn btn-primary btn-sm' onClick={() => Save(req.id)}>Save</button>

                                            </td>
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
                        <figure className="text-center mt-3">
  <blockquote className="blockquote text-muted fst-italic">
    <p>The only limit to our realization of tomorrow will be our doubts of today..</p>
  </blockquote>
  <figcaption className="blockquote-footer">
  Franklin D. Roosevelt <cite title="Source Title">1940</cite>
  </figcaption>
</figure>
                        <form className='m-5 needs-validation' onSubmit={handleSubmit} noValidate>
                            <div>
                                <label className='labl'>Retirement Plan *</label>
                                <input type="text" value={name} name="retirement_age" placeholder="Enter Plan" onChange={(e) => setName(e.target.value)} className='form-control' />
                            </div>
                            <div className='my-5'>
                                <label className='labl'>Financial Cost *</label>
                                <input type="text" value={retirement_goal} name="retirement_goal" placeholder="Enter Retirement goal" onChange={(e) => setRetirement_goal(e.target.value)} className='form-control' />

                            </div>
                            <div>
                                <label className='labl'>Money saved so far *</label>
                                <input type="text" value={money_saved} name="money_saved" placeholder="Enter Retirement money saved so far" onChange={(e) => setMoney_saved(e.target.value)} className='form-control' />

                            </div>
                            <div className='d-flex justify-content-center my-5'>
                                <button className="btn btn-primary" type='submit' >Submit</button>
                            </div>
                        </form>
                     
                        {/* <p className='lead text-center'>Set your goals high, and don't stop till you get there.</p> */}
                    </div>
                </div>

            </div>
            <Toast message={message}/>
        </>
    );
}
export default Retirement;