import React from "react";
import '../styling/landing.css'

function Landing(){

    return(
        <div id="landing">
          <h1 id="title">Financial Management Reimagined</h1>
          <p id="existing">We exist to assist you manage your financial plannings
          and celebrate your financial achievements</p>
          <button id="signup">Sign up</button>
          <div id="image"></div>
          <div id="why-us">
            <p id="why">WHY US?</p>
          </div>
            <p id="advantages">Some advantages of using your system tools to achieve your financial goals this year</p>
            <div id="advantage-1">
            <h2>Management</h2>
            <img src={require("../assets/ideas.png")} alt="ideas" id="idea"/>
          </div>
          <div id="advantage-2">
            <img src={require("../assets/saving.png")} alt="ideas" id="idea2"/>
            <h2>Management</h2>
          </div>
          <div id="advantage-3">
            <h2>Management</h2>
            <img src={require("../assets/saving.png")} alt="ideas" id="idea3"/>
          </div>
          <div id="our-services">
            {/* <img src={require("../assets/category.png")}/> */}
          </div>
        </div>
    )

}

export default Landing