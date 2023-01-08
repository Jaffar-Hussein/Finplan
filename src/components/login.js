import React from "react";
import '../styling/login.css'

function Login(){
    return (
      <div>
        <div id="background">
          <h1 id="welcome">Welcome</h1>
          <p id="finplan">Fin-Plan</p>
          <p id="description">Plan your path to financial security</p>
          <p id="terms">Terms of use privacy policy</p>
        </div>
        <div id="sign-up">
            <h1 id="sign-in">Sign in</h1>
            <p id="new-user">New user? Sign up</p>
          
          <form>
            
            <label id="phone-number">Your Phone Number*</label>
            <input
              type="number"
              id="phonenumber-input"
            //   value={password}
            //   onChange={(e) => setPassword(e.target.value)}
            />
            
            <label id="create-password">Enter password*</label>
            <input
              type="password"
              id="password-input"
            //   value={passwordConfirmation}
            //   onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <div id="checkbox">
              <input
                type="checkbox"
                id="checkbox-input"
              />
              <label id="checkbox-label">
                I agree to all terms and conditions
              </label>
            </div>
           <button id="login">Login</button>
          </form>
        </div>
      </div>
    );

}

export default Login