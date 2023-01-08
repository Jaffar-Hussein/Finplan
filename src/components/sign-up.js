import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import '../styling/sign-up.css'

function Signup({setUser}){
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
      <div>
        <div id="background">
          <h1 id="welcome">Welcome</h1>
          <p id="finplan">Fin-Plan</p>
          <p id="description">Plan your path to financial security</p>
          <p id="terms">Terms of use privacy policy</p>
        </div>
        <div id="sign-up">
            <h1 id="create">Create Account</h1>
            <p id="already">Already have an account? Login</p>
          
          <form onSubmit={handleSubmit}>
            <label id="username">Your fullname*</label>
            <input
              type="text"
              id="username-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label id="phone-number">Your Phone Number*</label>
            <input
              type="number"
              id="phonenumber-input"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            />
            <label id="email">Email address</label>
            <input
              type="email"
              id="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label id="create-password">Create password</label>
            <input
              type="password"
              id="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
           <button id="register-account">Register Account</button>
          </form>
        </div>
      </div>
    );

}

export default Signup