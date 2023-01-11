import '../style.css';
function Login() {
  return (
    <>
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image ">
        </div>
        <div className="col-md-8 col-lg-6 signup">
          <div className="login d-flex align-items-center py-5 plusafya">
            <div className="container">
              <div className="row ">
                <div className="col-md-9 col-lg-8 mx-auto ">
                  <h3 className="login-heading mb-4" >Sign In</h3>
                  <form className="box" role="form">
                    <div className="form-floating mb-3">
                      <input type="email" name="username" className="form-control" id="floatingInput" placeholder="name@example.com" />
                      <label>username</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" />
                      <label>Password</label>
                    </div>

                    <div className="form-check mb-3">
                      {/* <input className="form-check-input" style={{backgroundColor: '#005F73'}} type="checkbox" value="" id="rememberPasswordCheck" /> */}
                      <label className="form-check-label" >
                        I agree to terms and condition
                      </label>
                    </div>

                    <div className="d-grid form mb-3">
                      <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
                      <div className="text-center">
                      </div>
                    </div>
                    <div className="mb-12 mt-3 ml-5">
                      {/* <small className="text-muted float-left">
Don't have an Account? <a className="ml-2" type="button" style={{textDecoration: 'none',color: '#005F73'}}>Create Account</a>
</small> */}
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );

}

export default Login;
