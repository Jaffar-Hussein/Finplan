import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import '../styling/sign-up.css'
import logo from '../assets/logo.svg'

function Signup({ setUser }) {
  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
        phonenumber
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          navigate("/home")
        });
      }
    });
  }
  return (
    <div className="row g-0">
      <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image ">
        <div className='welcome'>
          <p className='h1 welcomeText letters text-center'>
            Welcome
          </p>
          <div className='d-flex justify-content-center align-items-center my-5'>
            <img src={logo} className="img-fluid mx-3" />
            <p className='fin h2 letters'>Fin-plan</p>
          </div>
          <p className='text-center'>Building a strong financial foundation, for a lifetime of security and success.</p>


        </div>
      </div>
      <div className="col-md-8 col-lg-6 signup">
        <div className="login d-flex align-items-center py-5 plusafya">
          <div className="container">
            <div className="row ">
              <div className="col-md-9 col-lg-8 mx-auto ">
                <h3 className="login-heading mb-4" >Sign Up</h3>
                <form className="box" role="form">
                  <div className="form-floating mb-3">
                    <input type="text" name="username" className="form-control" id="floatingInput" placeholder="Enter your fullname" />
                    <label>Full name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="email" name="email" className="form-control" id="floatingEmail" placeholder="Enter your email" />
                    <label>Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label>Password</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" name="confirmPassword" className="form-control" id="floatingConfirmPassword" placeholder="Password" />
                    <label>Confirm Password</label>
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input" style={{ backgroundColor: '#E19F20' }} type="checkbox" value="" id="rememberPasswordCheck" />
                    <label className="form-check-label" >
                      I agree to terms and condition
                    </label>
                  </div>

                  <div className="d-grid form mb-3">
                    <button className="btn btn-lg btn-primary btn-login  fw-semibold mb-2" type="submit">Register Account</button>
                    <div className="text-center">
                    </div>
                  </div>
                  <div className="mb-12 mt-3 ml-5">
                    <small className="text-muted float-left">
                      Already have an Account? <Link to="/login" className="ml-2" type="button" style={{ textDecoration: 'none', color: '#005F73' }}>Log in</Link>
                    </small>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Signup