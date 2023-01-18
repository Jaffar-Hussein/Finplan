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
import { Link } from "react-router-dom";
function LandingPage() {
    return (
        <>
            <NavBar> </NavBar>
            <div className='container'>
                <div className='d-flex justify-content-center titleHead'>
                    <div className=''>
                        <p className='text-center finances h1 my-3'>Financial Management <br></br> Reimagined</p>
                        <p className='text-center'>Achieving your personal and professional aspirations with the support of our expert management, <br></br>tailored to meet your unique needs and drive success. </p>
                        <div className='d-flex justify-content-center'>
                            <Link className='btn btn-primary sign' to='/register'>Sign Up</Link>
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
                    <img src={Hero} className="hero my-5 mb-5" />
                </div>

                {/* Why Us */}

                <div className='d-flex justify-content-center mt-3'>
                    <button className='btn btn-success  px-5 rounded-pill' id="about">Why Us</button>
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
                            <p>Achieving your personal and professional <br></br>aspirations with the support of our expert management, <br></br> tailored to meet your unique needs and drive success.</p>
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
                            <p>Ensuring a comfortable and secure retirement through expert management<br></br> and personalized planning, <br></br>giving you the financial peace of mind you deserve.</p>
                        </div>

                    </div>


                    <div className='row my-5'>
                        <div className='col-md-6 usDesc'>
                            <p className='h3 ret1'>
                                Goals
                            </p>
                            <p>Expertly managing your finances for maximum success.<br></br>
                Setting and achieving your financial goals with ease.<br></br>
                Creating a secure financial future for you and your loved ones.</p>
                        </div>
                        <div className='col-md-6'>
                            <img src={savings} className='saveIcon' />
                        </div>

                    </div>

                </div>

                {/* Our Services */}
                <div className='container my-5 mt-5' id="services">
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
                            {/* <p>Expert debt management and planning services for a brighter financial future. Get out of debt and achieve financial freedom with our tailored solutions.</p> */}
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
                            Are you ready to take control of your financial future? <br></br> Contact our financial planning company today to schedule a consultation and begin creating a personalized plan to achieve your financial goals.<br></br> Don't wait any longer, take action and secure your financial future.
                            </p>
                            <Link className='btn btn-primary px-4' to='/register'>Sign Up</Link>

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
            <div id="contact">
                <Footer></Footer>
            </div>
        </>
    )
}

export default LandingPage;