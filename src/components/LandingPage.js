import React from 'react';
import NavBar from './Navbar';
import '../styling/landing.css'
import coin from '../assets/coin.svg'
import calender from '../assets/calender.svg'
import Hero from '../assets/Hero.svg'
import Manage from '../assets/management.svg'
import savings from '../assets/savings.png'
import debtPlanner from '../assets/debtPlanner.svg'
import retirement from '../assets/retirement.svg'
import goal from '../assets/goaltracker.svg'
import rafiki from '../assets/rafiki.svg'
import Footer from './footer';
import calenderWhite from '../assets/calenderWhite.svg'
import bottomCal from '../assets/bottomCal.svg'
function LandingPage() {
    return (
        <>
            <NavBar> </NavBar>
            <div className='container'>
                <div className='d-flex justify-content-center titleHead'>
                    <div className=''>
                        <p className='text-center finances h1 my-3'>Financial Management <br></br> Reimagined</p>
                        <p className='text-center'>We’re exist to assist you managing your financial plannings and celebrate <br></br> your financial achievments. </p>
                        <div className='d-flex justify-content-center'>
                            <button className='btn btn-primary sign'>Sign Up</button>

                        </div>
                        <div className='coin'>
                            <img src={coin} className="img-fluid" />
                        </div>
                        <div className='calendericon'>
                            <img src={calender} className="img-fluid" />
                        </div>
                        {/* <div className='calendericon1'>
                            <img src={calender} className="img-fluid" />
                        </div> */}
                    </div>


                </div>
                <div className='d-flex justify-content-center'>
                    <img src={Hero} className="hero my-5" />
                </div>

                {/* Why Us */}

                <div className='d-flex justify-content-center'>
                    <button className='btn btn-success  px-5 rounded-pill'>Why Us</button>
                </div>
                <div className='d-flex justify-content-center'>
                    <p className='h5 text-center my-3'>Your advantages of using our system tools to <br></br> achieve your financial goals this year</p>
                </div>

                <div className='container'>
                    <div className='row my-5'>
                        <div className='col-md-6 usDesc'>
                            <p className='h3 mgnt'>
                                Management
                            </p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br></br> Hic unde quae mollitia commodi accusamus necessitatibus <br></br> asperiores temporibus ipsum ad officiis!</p>
                        </div>
                        <div className='col-md-6'>
                            <img src={Manage} className="manageIcon" />
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={savings} className='saveIcon' />
                        </div>
                        <div className='col-md-6 usDesc'>
                            <p className='h3 ret'>
                                Retirement
                            </p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br></br> Hic unde quae mollitia commodi accusamus necessitatibus <br></br> asperiores temporibus ipsum ad officiis!</p>
                        </div>

                    </div>


                    <div className='row my-5'>
                        <div className='col-md-6 usDesc'>
                            <p className='h3 ret1'>
                                Retirement
                            </p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br></br> Hic unde quae mollitia commodi accusamus necessitatibus <br></br> asperiores temporibus ipsum ad officiis!</p>
                        </div>
                        <div className='col-md-6'>
                            <img src={savings} className='saveIcon' />
                        </div>

                    </div>

                </div>

                {/* Our Services */}
                <div className='container my-5'>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-success  px-5 rounded-pill'>Our Services</button>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <p className='text-center my-3 h5'>Lets make your wealth work for <br></br> you</p>
                    </div>

                    <div className='d-flex justify-content-around allService'>
                        <div className='d-flex flex-column frame p-3 '>
                            <img src={debtPlanner} className='serviceIcon mb-2' />
                            <p className='text-center h5 mb-4'>Debt Planner</p>
                            <p>Lorem ipsum dolor sit amet consectetur. Elit <br></br> amet lorem tortor dictum tempor penatibus <br></br> turpis eleifend eu.Lorem ipsum dolor sit amet <br></br>consectetur. Elit amet lorem tortor dictum <br></br>tempor penatibus turpis eleifend eu.</p>
                        </div>
                        <div className='d-flex flex-column frame p-3'>
                            <img src={retirement} className='serviceIcon mb-2' />
                            <p className='text-center h5 mb-4'>Retirement Planner</p>
                            <p>Lorem ipsum dolor sit amet consectetur. Elit <br></br> amet lorem tortor dictum tempor penatibus <br></br> turpis eleifend eu.Lorem ipsum dolor sit amet <br></br>consectetur. Elit amet lorem tortor dictum <br></br>tempor penatibus turpis eleifend eu.</p>
                        </div>
                        <div className='d-flex flex-column frame p-3'>
                            <img src={goal} className='serviceIcon' />
                            <p className='text-center h5 mb-4'>Financial Goal Tracker</p>
                            <p>Lorem ipsum dolor sit amet consectetur. Elit <br></br> amet lorem tortor dictum tempor penatibus <br></br> turpis eleifend eu.Lorem ipsum dolor sit amet <br></br>consectetur. Elit amet lorem tortor dictum <br></br>tempor penatibus turpis eleifend eu.</p>
                        </div>

                    </div>
                </div>


            </div>
            {/* Call Action */}
            <div className='bgAction itemsAction'>
                <div className='container '>
                    <div className='row align-items-center '>
                        <div className='col-md-6'>
                            <p className='h3 text-light my-3'>
                                <span className='wealth'>Lets make your wealth</span> <br></br>  work for you today.
                            </p>
                            <p className='text-light'>
                                Lorem ipsum dolor sit amet consectetur. Elit <br></br> amet lorem tortor dictum tempor penatibus <br></br> turpis eleifend eu.Lorem ipsum dolor sit amet <br></br> consectetur. Elit amet lorem tortor dictum <br></br> tempor penatibus turpis eleifend eu.
                            </p>
                            <button className='btn btn-primary px-4'>Sign Up</button>
                        </div>
                        <div className='col-md-6'>
                            <img src={rafiki} className="rafiki my-5"/>
                        </div>
                        <div >
                            <img className='cal1'src={calenderWhite}/>
                        </div>
                        <div >
                        <img className='cal2' src={bottomCal}/>

                        </div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default LandingPage;