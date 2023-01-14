import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import {Outlet} from "react-router-dom"
import '../styling/navbar.css'


export default function Navbar() {
    const navigate = useNavigate()
    const [user, setUser] = useState('');

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data'));
        if (data) setUser(data)
    }, [])

    function logout() {
        localStorage.removeItem('data');
        if (user) setUser('')
        navigate('/login', {
            state: {
                message: "Logout Success!"
            }
        })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg mb-sm-5 mb-3">
                <div className="container">
                    <a className="navbar-brand text-secondary fw-bold" href="#/"
                       onClick={() => navigate("/")}
                    >
                        <i className="bi bi-x-diamond-fill"></i> Fin-Plan</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold">
                            {user ?
                                <>
                                    <li className="nav-item">
                                        <a
                                            href="#/"
                                            className="nav-link"
                                            onClick={() => navigate("/dashboard")}
                                        ><i className="bi bi-speedometer2"></i> Dashboard</a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="#/"
                                            className="nav-link"
                                            onClick={() => navigate("/debt")}
                                        ><i className="bi bi-cash-coin"></i> Debt</a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="#/"
                                            className="nav-link"
                                            onClick={() => navigate("/retirement")}
                                        ><i className="bi bi-person-vcard"></i> Retirement</a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="#/"
                                            className="nav-link"
                                            onClick={() => navigate("/goal")}
                                        ><i className="bi bi-card-checklist"></i> Goal</a>
                                    </li>
                                    <li className="nav-item dropdown mr-5" id="navbar-btn-profile">
                                        <a className="nav-link dropdown-toggle" href="#/" role="button"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-person-circle"/> {user ? user.user.email : 'Profile'}
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a
                                                    href="#/"
                                                    className="dropdown-item fw-bold text-secondary"
                                                    onClick={() => navigate("/settings")}
                                                ><i className="bi bi-gear-fill"/>{' '} Settings</a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#/"
                                                    className="dropdown-item fw-bold text-secondary"
                                                    onClick={() => logout()}
                                                ><i className="bi bi-box-arrow-left"></i>{' '} Logout</a>
                                            </li>
                                        </ul>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item">
                                        <a
                                            href="#/"
                                            className="nav-link"
                                            onClick={() => navigate("/services")}
                                        >
                                            <i className="bi bi-building-fill-gear"></i>{' '}
                                            Services
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="#/"
                                            className="nav-link"
                                            onClick={() => navigate("/contact-us")}
                                        >
                                            <i className="bi bi-telephone-fill"></i>{' '}
                                            Contact us
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="#/"
                                            id="navbar-btn-login"
                                            className="nav-link"
                                            onClick={() => navigate("/login")}
                                        >
                                            <i className="bi bi-person-fill"></i>{' '}
                                            Login
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="#/"
                                            id="navbar-btn-signup"
                                            className="nav-link"
                                            onClick={() => navigate("/signup")}
                                        >
                                            <i className="bi bi-check2-square"></i>{' '}
                                            Sign up
                                        </a>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <Outlet/>
            </div>
        </div>
    )
}
