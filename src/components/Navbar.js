import { NavLink } from "react-router-dom";
import { useContext } from "react";
import Avatar from 'react-avatar';
import logo from '../assets/logo.svg'
import '../styling/navbar.css'
import { AuthContext } from './useAuthCheck';
// import useAuthCheck from './useAuthCheck';
function NavBar() {
const { isAuthenticated,userName } = useContext(AuthContext);

    
    console.log(isAuthenticated);
    return (
        <nav className="navbar navbar-expand-lg justify-content-between">
            <div className="container">
                <li className="list-unstyled navbar-brand" href="#">
                    <NavLink>
                        <img className="" src={logo} alt="logo" height="100" to='/' />

                    </NavLink>
                    <p className='d-inline  mx-2'>Fin-Plan</p>
                </li>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>

                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 ">
                    </ul>
                    <ul className="navbar-nav">
                        {!isAuthenticated? (
                        <>
                    <li className="nav-item ">
                        <NavLink className="nav-link active" aria-current="page" end to="/">Home</NavLink>
                        </li>
                        <li className="nav-item " >
                            <NavLink className="nav-link mx-2" to='/' >Dashboard</NavLink>

                        </li>
                        <li className="nav-item" >
                            <NavLink className="nav-link" to='/' >Services</NavLink>
                        </li>
                        <li className="nav-item unstyled">
                            <NavLink className="nav-link" to="/">Contact Us</NavLink>
                        </li>
                        </>):
                        (
                            <><li className="nav-item ">
                                    <NavLink className="nav-link " aria-current="page" end to="/">Home</NavLink>
                                </li><li className="nav-item ">
                                        <NavLink className="nav-link mx-3" to='/goal'>Goal</NavLink>

                                    </li><li className="nav-item">
                                        <NavLink className="nav-link" to='/debt'>Debt</NavLink>
                                    </li><li className="nav-item unstyled">
                                        <NavLink className="nav-link" to="/">Retirement</NavLink>
                                    </li></>
                        )}
                    </ul>
                    {isAuthenticated? (
                    <>
                     {/* <div className="dropdown"> 
                        <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">  */}
                          <Avatar name={userName} round={true} size={30} textSizeRatio={1.75} color="#184E77" style={{}}  className="mx-2 img-fluid d-block"  />
                       {/* </a>
                        <div className="dropdown-menu p-4 text-muted" >
                            <p>Hello</p>
                        </div>
                    </div> */}

                    </>
                     ):(
                     <>
                        <NavLink className="btn btn-outline-primary mx-3" to="/login">Login</NavLink>
                      <NavLink className="btn btn-primary" to="/register">Sign Up</NavLink>
                    </>)      }          
                      
                </div>
            </div>
                     
        </nav >
    );
}

export default NavBar;