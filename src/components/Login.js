import '../style.css';
import logo from '../assets/logo.svg'
import { Link,useNavigate, } from 'react-router-dom'
import {useState, React,useContext } from 'react'
import { AuthContext } from './useAuthCheck';
import axios from "axios";
import Toast from './toast';


function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


        
  function handleSubmit(e) {
    e.preventDefault();
    // fetch("https://finplanbackend-production.up.railway.app/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     password,
    //     email,
    //   }),
    // })
    // .then((r) => r.json())
    // .then((d) => {
    //   console.log(r.ok);
    //   if (d.status === "error") {
    //     console.log(d)
    //     setError(d.message)
    //     return
    // }
    // else{

    //   console.log(d.jwt)
    //   localStorage.setItem('jwt',d.jwt);
    //   login();
    //   navigate("/dashboard")
    // }
      
    //  }
    // )
    axios.post('https://finplanbackend-production.up.railway.app/login', {
      password,
      email,
    })
    .then(function (response) {
      console.log(response.data.jwt);
      login()
      localStorage.setItem( 'jwt',response.data.jwt);
      navigate("/dashboard")
    })
    .catch(function (error) {
      setError("Invalid Email or Password",error)
    });
  }
  


  return (
    <>
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image ">
          <div className='welcome'>
            <p className='h1 welcomeText letters text-center'>
              Welcome
            </p>
            <div className='d-flex justify-content-center align-items-center my-5'>
              <img src={logo} className="img-fluid mx-3" alt='' />
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
                  <h3 className="login-heading mb-4" >Sign In</h3>
                  <form className="box needs-validation" onSubmit={handleSubmit}>
                    <div className="form-floating mb-3 has-validation">
                      <input type="text" name="email" className={`form-control  ${error ? 'is-invalid' : ''}`} 
                      id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setemail(e.target.value)}/>
                      <label>Email</label>
                    </div>
                    <div className="form-floating mb-3 has-validation">
                      <input type="password" name="password"  value={password} onChange={(e) => setPassword(e.target.value)} className={`form-control  ${error ? 'is-invalid' : ''}`} id="floatingPassword" placeholder="Password" />
                      <label>Password</label>
                    </div>

                    <div className="form-check mb-3">
                      <input className="form-check-input" style={{ backgroundColor: '#E19F20' }} type="checkbox" value="" id="rememberPasswordCheck" required/>
                      <label className="form-check-label" >
                        I agree to terms and condition
                      </label>
                    </div>
                    {/* <div className={`invalid-feedback my-2 ${error ? 'd-block' : ''}`} id="floatingInputFeedback">{error}</div> */}
                    <div className="d-grid form mb-3">
                      <button className="btn btn-lg btn-primary btn-login  fw-semibold mb-2" type="submit">Login</button>
                      <div className="text-center">
                      </div>
                    </div>
                    <div className="mb-12 mt-3 ml-5">
                      <small className="text-muted float-left">
                        Don't have an Account? <Link to="/register" className="ml-2" type="button" style={{ textDecoration: 'none', color: '#005F73' }}>Create Account</Link>
                      </small>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toast message={error}/>
    </>

  );

}

export default Login;
