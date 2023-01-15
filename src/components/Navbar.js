import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg'
import '../styling/navbar.css'

function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg justify-content-between">
            <div className="container">
                <li className="list-unstyled navbar-brand" href="#">
                    <NavLink>
                        <img className="" src={logo} alt="logo" height="100" to='/' />

                    </NavLink>
                    <p className='d-inline  mx-2 finances'>Fin-Plan</p>
                </li>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>

                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 ">

                    </ul>
                    <ul className="navbar-nav">
                    <li className="nav-item ">
                            <NavLink className="nav-link active" aria-current="page" end to="/">Home</NavLink>
                        </li>
                        <li className="nav-item " >
                            <NavLink className="nav-link mx-2" to='/' >Dashboard</NavLink>

                        </li>
                        <li className="nav-item" >
                            <NavLink className="nav-link" to='/' >Services</NavLink>

                        </li>
                        {/* <li className="nav-item" >
                            <NavLink className="nav-link mx-2" to='/' > Tution</NavLink>

                        </li> */}

                        <li className="nav-item unstyled">
                            <NavLink className="nav-link" to="/">Contact Us</NavLink>
                        </li>

                       
                    </ul>
                     <button className="btn btn-primary mx-3">Login</button>
                        <button className="btn btn-outline-primary">Sign Up</button>

                </div>
            </div>
        </nav >
    );
}

export default NavBar;