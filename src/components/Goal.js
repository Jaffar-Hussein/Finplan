import Navbar from './Navbar'
// import NavBar from './Navbar';
import { Routes, Route, useNavigate } from "react-router-dom";
import Toast from './toast';
import '../styling/goal.css'
import React, { useEffect, useState } from "react";
import axios from "axios";



function Goal() {
    let navigate = useNavigate();
    const [name, setName] = React.useState("")
    const [goal_amount, setAmount_due] = React.useState("")
    const [due_date, setDue_date] = React.useState("")
    const [goals, setGoals] = React.useState([]);
    const amount_saved = 0
    // const [records, setRecords] = React.useState([]);
    // const [totLal, setTotal] = React.useState(null);
    const [message,setMessage]=useState("")

    const bear = 'Bearer ' + localStorage.getItem('jwt')

    React.useEffect(() => {

        axios.get(`https://finplanbackend-production.up.railway.app/goals`, {
            headers: {
                'Authorization': bear
            },
        })
            .then((response) => {

                setGoals(response.data)

            })
    },[])

    goals.map((goal) => {
        const d = new Date(goal.due_date);
        goal.due_date = d.toDateString();
        
    })    
        let total = 0;

    // goals.forEach((goal) => {
    //     total += goal.amount_saved
        
    //     // setTotal(total);
    // })
console.log(goals);

// const balance = goal.goal_amount - goal.amount_saved 
    function handleSubmit(e) {
        e.preventDefault();

        if (name && goal_amount && due_date){
        fetch("https://finplanbackend-production.up.railway.app/goals", {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': bear


            },
            body:  JSON.stringify({
                name,
                goal_amount,
                due_date,
                amount_saved
              }),
        })
            .then(r => r.json())
            .then((newItem) => setGoals([...goals, newItem]));
        navigate('/goal');
        setName("")
        setAmount_due("")
        setDue_date("")
        setMessage("")
    }else{
        setMessage("Please input valid data")
    }

    }
    function Save(goalId) {
        navigate(`/` + goalId)

    }

    return (
        <>
            <Navbar></Navbar>

            <div className='container'>
                <div className='row flip'>
                    <div className='col-md-6'>
                        <div className='d-flex justify-content-around text-center my-5'>
                            <div className='goalCard px-5 py-3'>
                                <p>{goals.length}</p>
                                <p>Goals Set</p>
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
                                        <th scope="col" className='tableTitle'>Name</th>
                                        <th scope="col" className='tableTitle'>Amount</th>
                                        <th scope="col" className='tableTitle'>Amount Saved</th>
                                        {/* <th scope="col" className='tableTitle'>Pending</th> */}
                                        <th scope="col" className='tableTitle'>Due Date</th>
                                        <th scope="col" className='tableTitle'>Action</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {goals.map((goal) => {
                                        return <tr key={goal.id+goal.name}  className={`  ${ (goal.goal_amount - goal.amount_saved ) <= 0 ? 'text-decoration-line-through' : ''}`}>
                                            {/* <th scope="row">1</th> */}
                                            <td>{goal.name}</td>
                                            <td>{goal.goal_amount}</td>
                                            <td>{goal.amount_saved}</td>
                                            {/* <td>{goal.goal_amount - goal.amount_saved }</td> */}
                                            <td>{goal.due_date}</td>
                                            <td><button className={`btn btn-primary btn-sm  ${ (goal.goal_amount - goal.amount_saved ) <= 0 ? 'disabled' : ''}`}  onClick={() => Save(goal.id)} >Save</button></td>
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
                        <figure class="text-center mt-3">
  <blockquote className="blockquote text-muted fst-italic">
    <p>The key to making your financial dreams come true is to start with a clear vision of what you want, and then to create a plan to make it happen.</p>
  </blockquote>
  <figcaption className="blockquote-footer">
  Suze Orman <cite title="Source Title"> 8Bc</cite>
  </figcaption>
</figure>
                        <form className="m-5 needs-validation" onSubmit={handleSubmit} noValidate>
                            <div>
                                <label className='labl'>Goal Name *</label>
                                <input type="text" name="name" value={name} placeholder="Enter goal" onChange={(e) => setName(e.target.value)} className='form-control' required/>
                            </div>
                            <div className='my-5'>
                                <label className='labl'>Amount *</label>
                                <input type="number" name="goal_amount" value={goal_amount} placeholder="Enter amount due" onChange={(e) => setAmount_due(e.target.value)} className='form-control' required/>
                            </div>
                            <div>
                                <label className='labl'>Due Date *</label>
                                <input type="date" name="due_date" value={due_date} placeholder="Enter Due date" onChange={(e) => setDue_date(e.target.value)} className='form-control data-date-start-date="+1d"' required/>

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
export default Goal;