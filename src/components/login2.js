import React from "react";
import '../style.css';
function Login2(){
    return (
        <div className="container-fluid vh-100 vw-100 row p-0 m-0">
            <div className="col-md-6 relative">
                <div className="aurora aurora-lower"></div>
                <div className="aurora aurora-upper"></div>

            </div>
            <div className="col-md-6 my-auto p-2 vh-100 second-auth">
                <div className="my-2">
                    <h1 id="sign-in m-2">Sign in</h1>
                    <p id="new-user m-2">New user ?  Sign up</p>
                </div>

                <form className="form-control-lg m-0">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Your Email Address : </label>
                        <input type="email" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div class="mb-3">
                        <label for="Password" class="form-label">Password : </label>
                        <input type="password" className="form-control form-control-lg" id="Password" placeholder="Password"/>
                    </div>
                    <div className="d-grid form mb-3">
                  <button className="btn btn-lg btn-primary btn-login  mb-2" type="submit" >Sign in</button>
                  <div className="text-center">
                  </div>
                </div>
              </form>
              
                
                </div>
        </div>
    );

}

export default Login2