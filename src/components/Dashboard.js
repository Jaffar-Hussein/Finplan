import NavBar from './Navbar';
import Modal from './Modal';
import '../styling/dashboard.css'
import React, { useRef, useContext } from "react";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { AuthContext } from './useAuthCheck';



ChartJS.register(ArcElement, Tooltip, Legend);


function Dashboard() {
    const [goals, setGoals] = React.useState([]);
    const [debts, setDebts] = React.useState([]);
    const [retirements, setRetirements] = React.useState([]);

    const { userName,isFirsttime } = useContext(AuthContext);
    const modal = useRef(null);

    React.useEffect(() => {
        // setTimeout(function() {

            if (isFirsttime){
        console.log(isFirsttime);

                modal.current?.click();
            }
        //   }, 1000);
      
    }, [isFirsttime]);


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

    React.useEffect(() => {

        axios.get(`https://finplanbackend-production.up.railway.app/debts`, {
            headers: {
                'Authorization': bear
            },
        })
            .then((response) => {

                setDebts(response.data)

            })
    },[])
    React.useEffect(() => {

        axios.get(`https://finplanbackend-production.up.railway.app/retirements`, {
            headers: {
                'Authorization': bear
            },
        })
            .then((response) => {

                setRetirements(response.data)

            })
    },[])

    let total = 0
    let debtTotal = 0
    let debtPaid = 0
    let percentageDebt = 0.0
    let goal_target = 0;
    let percentageGoal = 0.0

    goals.forEach((goal) => {
        total += goal.amount_saved
        goal_target += goal.goal_amount
        // setTotal(total);
    })
    percentageGoal = (total / goal_target) * 100
    debts.map((debt) => {
        debtTotal += debt.amount_due
        debtPaid += debt.amount_paid
    })
    percentageDebt = (debtPaid / debtTotal) * 100

    let retirement_goal = 0;
    let retirement_saved = 0;
    let percentageRetire = 0.0

    retirements.map((retire) => {
        retirement_goal = retire.retirement_goal
        retirement_saved = retire.money_saved
    })
    percentageRetire = (retirement_saved / retirement_goal) * 100


    const data = {
        labels: ['Debt', 'Retirement', 'Goal'],
        datasets: [
            {
                label: '# of percentage ',
                data: [percentageDebt, percentageRetire, percentageGoal],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    // 'rgba(75, 192, 192, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    // 'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    let noGoals = goals.length
    let noDebts = debts.length

    const dataNo = {
        labels: ['Number of Goals', 'Number of Debts'],
        datasets: [
            {
                label: '',
                data: [noGoals, noDebts],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    // 'rgba(75, 192, 192, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    // 'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    return (
        <div>
            <NavBar />
            <div className='container'>
                <p className='h2 my-5'> Welcome {userName},</p>
                <button type="button" className="d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop" ref={modal}>
                    Launch static backdrop modal
                </button>
                
                {/* <button onClick={clickElement}>
                Trigger click inside input
            </button> */}
                <p>Here is your today overview insights</p>
                <div className='d-flex justify-content-around cardsDashboard'>
                    <div className='goalNo p-5 text-center'>
                        <p className='figure'> {goals.length}</p>
                        <p className='text-center'>Total Goals set</p>
                    </div>
                    <div className='goalNo p-5 text-center'>
                        <p className='figure'> ksh {total}</p>
                        <p className='text-center'>Goals total</p>
                    </div>
                    <div className='goalNo p-5 text-center'>
                        {
                            percentageDebt >= 100 ? <p>All debt paid off</p>
                                :
                                <>
                                    <p className='figure'> {percentageDebt} %</p>
                                    <p className='text-center'>Debt Paid off</p>
                                </>

                        }

                    </div>
                    <div className='goalNo p-5 text-center'>
                        {
                            percentageRetire >= 100 ? <p> Retirement goal reached </p> :
                                <>
                                    <p className='figure'> {percentageRetire} %</p>
                                    <p className='text-center'>To Retire</p>
                                </>
                        }

                    </div>
                </div>

                <div className='d-flex justify-content-around  graph my-5'>
                    <div className='chartCard p-5 my-5' style={{ height: "", position: "relative", marginBottom: "1%", padding: "1%" }}>
                        {data ?
                            <p className='text-center h5 mb-5'>Retirement paid off , <br></br> debt paid off <br></br> and goals savings</p>
                            :
                            <p></p>
                        }
                        <Pie data={data}
                        />;
                    </div>
                    <div className='chartCard p-5 my-5' style={{ height: "", position: "relative", marginBottom: "1%", padding: "1%" }}>
                        {data ?
                            <p className='text-center h5 mb-5'>Number of Goals and Debts</p>
                            :
                            <p></p>
                        }
                        <Pie data={dataNo}
                        />
                    </div>
                </div>
                <Modal></Modal>
            </div>
            
        </div>
    )
}

export default Dashboard;