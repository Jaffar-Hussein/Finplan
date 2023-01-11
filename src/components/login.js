import React from "react";
import '../style.css';
function Login(){
    return (
        <div class="row g-0">
        <div class="col-md-8 col-lg-6 signup">
          <div class="login d-flex align-items-center py-5 plusafya">
            <div class="container">
              <div class="row ">
                <div class="col-md-9 col-lg-8   mx-auto ">
                  <p class="h2 my-5 afya">Welcome to AfyaPlus</p>
                  <h3 class="login-heading mb-4" >Sign In</h3>
                  <form (ngSubmit)="onLoggedin()" class="box">
                    <div class="form-floating mb-3">
                      <input type="email" [(ngModel)]="login.username" name="username" class="form-control" id="floatingInput" placeholder="name@example.com">
                      <label for="floatingInput">username</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="password" [(ngModel)]="login.password" name="password" class="form-control" id="floatingPassword" placeholder="Password">
                      <label for="floatingPassword">Password</label>
                    </div>
    
                    <div class="form-check mb-3">
                      <input class="form-check-input"  style="background-color: #005F73;" type="checkbox" value="" id="rememberPasswordCheck">
                      <label class="form-check-label"  for="rememberPasswordCheck">
                        I agree to terms and condition
                      </label>
                    </div>
    
                    <div class="d-grid form mb-3">
                      <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
                      <div class="text-center">
                      </div>
                    </div>
                    <div class="mb-12 mt-3 ml-5">
                        <small class="text-muted float-left">
                            Don't have an Account? <a class="ml-2" routerLink="/register" type="button" style="text-decoration: none;color: #005F73;">Create Account</a>
                        </small>
                    </div>
             
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image ">
        </div>
       
      </div>
    );

}

export default Login