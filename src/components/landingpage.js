import React from "react";
import '../styling/landing.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


function Landing(){
  library.add(fab)
    const style = {backgroundColor: "#3b5998"}
    return (
      <div id="landing">
        <h1 id="title">Financial Management Reimagined</h1>
        <p id="existing">
          We exist to assist you manage your financial plannings and celebrate
          your financial achievements
        </p>
        <button id="signup-button">Sign up</button>
        <div id="image"></div>
        <div id="why-us">
          <p id="why">WHY US?</p>
        </div>
        <div id="advantages">
          <p>
            Some advantages of using your system tools to achieve your financial
            goals this year
          </p>
        </div>

        <div id="advantage-1">
          <div>
            <img
              src={require("../assets/orange-ellipse.png")}
              alt="ideas"
              id="orange-ellipse1"
            />
            <h2>Management</h2>
          </div>
          <img
            src={require("../assets/manage-idea.png")}
            alt="ideas"
            id="idea"
          />
        </div>
        <div id="advantage-2">
          <img src={require("../assets/savings.png")} alt="ideas" id="idea2" />
          <h2>Management</h2>
        </div>
        <div id="advantage-3">
          <h2>Management</h2>
          <div id="idea3">
            <img src={require("../assets/savings.png")} alt="ideas" />
          </div>
        </div>
        <div id="our-services">
          <div id="why-us2">
            <p id="why">OUR SERVICES</p>
          </div>
          <p id="make-wealth-work">Lets make your wealth work for you</p>
          <div className="row" id="row">
            <div className="row row-cols-3 g-3">
              <div className="col">
                <div className="card" id="card">
                  <img
                    src={require("../assets/spiral.png")}
                    class="card-img-top"
                    alt="Hollywood Sign on The Hill"
                    id="card-images"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Debt Planner</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" id="card">
                <img
                    src={require("../assets/circle.png")}
                    class="card-img-top"
                    alt="Hollywood Sign on The Hill"
                    id="card-images"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Retirement planner</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" id="card">
                <img
                    src={require("../assets/triangle.png")}
                    class="card-img-top"
                    alt="Hollywood Sign on The Hill"
                    id="card-images"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Financial Goal Tracker</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="wealth">
          <div>
            <h1>
              Let's make your wealth
              <br /> work for you today.
            </h1>
            <br />
            <p>With our services, you can be sure of increasing your wealth</p>
            <button id="signup-button2">Sign up</button>
          </div>
          <img src={require("../assets/lady2.png")} alt="" id="lady" />
        </div>
        <div id="bottom-div">
          <img
            src={require("../assets/left-ellipse.svg")}
            alt=""
            id="left-ellipse"
          />
          <img src={require("../assets/logo.svg")} alt="logo" id="logo" />
          <div className="container my-5">
            {/* Footer */}
            <footer
              className="text-center text-lg-start text-white"
              // style={"background-color: #929fba"}
            >
              {/* Grid container */}
              <div className="container p-4 pb-0">
                {/* Section: Links */}
                <section className="">
                  {/*Grid row*/}
                  <div className="row">
                    {/* Grid column */}
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold">
                        Fin-plan
                      </h6>
                      <p>
                        Here you can use rows and columns to organize your
                        footer content. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.
                      </p>
                    </div>
                    {/* Grid column */}

                    <hr className="w-100 clearfix d-md-none" />

                    {/* Grid column */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold">
                        Products
                      </h6>
                      {/* <p>
                        <a className="text-white" href="">MDBootstrap</a>
                      </p>
                      <p>
                        <a className="text-white">MDWordPress</a>
                      </p>
                      <p>
                        <a className="text-white">BrandFlow</a>
                      </p>
                      <p>
                        <a className="text-white">Bootstrap Angular</a>
                      </p> */}
                    </div>
                    {/* Grid column */}

                    <hr className="w-100 clearfix d-md-none" />

                    {/* Grid column */}
                    <hr className="w-100 clearfix d-md-none" />

                    {/* Grid column */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold">
                        Contact
                      </h6>
                      <p>
                        <i className="fas fa-home mr-3"></i> New York, NY 10012,
                        US
                      </p>
                      <p>
                        <i className="fas fa-envelope mr-3"></i> info@gmail.com
                      </p>
                      <p>
                        <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                      </p>
                      <p>
                        <i className="fas fa-print mr-3"></i> + 01 234 567 89
                      </p>
                    </div>
                    {/* Grid column */}

                    {/* Grid column */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold">
                        Follow us
                      </h6>

                      {/* Facebook */}
                      <a
                        className="btn btn-primary btn-floating m-1"
                        // style="background-color: #3b5998"
                        href="#!"
                        role="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>

                      {/* Twitter */}
                      <a
                        className="btn btn-primary btn-floating m-1"
                        style={style}
                        href="#!"
                        role="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>

                      {/* Instagram */}
                      <a
                        className="btn btn-primary btn-floating m-1"
                        // style="background-color: #ac2bac"
                        href="#!"
                        role="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  {/*Grid row*/}
                </section>
                {/* Section: Links */}
              </div>
              {/* Grid container */}

              {/* Copyright */}
              <div
                className="text-center p-3"
                // style="background-color: rgba(0, 0, 0, 0.2)"
              >
                © 2023 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">
                  finplan
                </a>
              </div>
              {/* Copyright */}
            </footer>
            {/* Footer */}
          </div>
          {/* End of .container */}
          <img
            src={require("../assets/right-ellipse.svg")}
            alt=""
            id="right-ellipse"
          />
        </div>
      </div>
    );

}

export default Landing