import { NavLink } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useContext } from "react";
import Avatar from 'react-avatar';
import logo from '../assets/logo.svg'
import '../styling/navbar.css'
import { AuthContext } from './useAuthCheck';
// import useAuthCheck from './useAuthCheck';
function NavBar() {
const { isAuthenticated,userName,logout } = useContext(AuthContext);
function manageLogout(){
    logout();
    localStorage.removeItem('jwt');
}
    return (
        <nav className="navbar navbar-expand-lg justify-content-between">
            <div className="container">
                <li className="list-unstyled navbar-brand" href="#">
                    <NavLink>
                        <img className="" src={logo} alt="logo" height="100" to='/' />

                    </NavLink>
                    <p className='d-inline  mx-2'>Fin-Plan</p>
                </li>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>

                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav me-auto mb-2 ">
                    </ul>
                    <ul className="navbar-nav">
                        {!isAuthenticated? (
                        <>
                    <li className="nav-item ">
                        {/* <NavLink className="nav-link active" aria-current="page" end to="/">Home</NavLink> */}
                        <AnchorLink className="nav-link" href='/'>Home</AnchorLink>

                        </li>
                        <li className="nav-item " >
                            {/* <NavLink className="nav-link mx-2" to='/' >About us</NavLink> */}
                            <AnchorLink className="nav-link" href='#about'>About us</AnchorLink>

                        </li>
                        <li className="nav-item" >
                        <AnchorLink className="nav-link" offset={() => 150} href='#services'>Services</AnchorLink>
                            {/* <NavLink className="nav-link" to='#services' >Services</NavLink> */}
                        </li>
                        <li className="nav-item unstyled">
                            {/* <NavLink className="nav-link" to="/">Contact Us</NavLink> */}
                            <AnchorLink className="nav-link" href='#contact'>Contact us</AnchorLink>

                        </li>
                        </>):
                        (
                            <><li className="nav-item ">
                                    <NavLink className="nav-link " aria-current="page" end to="/dashboard">Dashboard</NavLink>
                                </li><li className="nav-item ">
                                        <NavLink className="nav-link" to='/goal'>Goal</NavLink>

                                    </li><li className="nav-item">
                                        <NavLink className="nav-link" to='/debt'>Debt</NavLink>
                                    </li><li className="nav-item unstyled">
                                        <NavLink className="nav-link" to="/retirement">Retirement</NavLink>
                                    </li></>
                        )}
                    
                    {isAuthenticated? (
                    <>
                     {/* <div className="dropdown"> 
                        <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">  */}
                        <li className="nav-link mt-1 p-0 ms-3" >
                        <Avatar name={userName} round={true} size={30} textSizeRatio={1.75} color="#184E77" style={{}}  className=" img-fluid d-block"  />

                        </li>
                       {/* </a>
                        <div className="dropdown-menu p-4 text-muted" >
                            <p>Hello</p>
                        </div>
                    </div> */}
<li className="nav-link">
<div className="btn-group">
  <a className="text-muted dropdown-toggle ms-1 text-decoration-none"  data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    {userName}
  </a>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item" href="#" onClick={manageLogout}>Logout</a></li>
    {/* <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li> */}
  </ul>
</div>

</li>


                    </>
                     ):(
                     <>
                        <NavLink className="btn btn-outline-primary mx-3" to="/login">Login</NavLink>
                      <NavLink className="btn btn-primary" to="/register">Sign Up</NavLink>
                    </>)      }          
                      </ul>
                </div>
            </div>
                     
        </nav >
    );
}

export default NavBar;