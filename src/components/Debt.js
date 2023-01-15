import React from 'react';
import "../styling/debt.css"
import NavBar from './Navbar';
function Debt() {
  return (
    <><div>
          <div class="container fullpage">
            <NavBar></NavBar>
          </div>
          <div class="row">
              <div class="col  mt-5">
                  <div class="container">
                      <div class="row">
                          <div class="col ">
                              <div class="card shadow text-center " style={{ width: '18rem', height: '150px' }}>
                                  <div class="card-body">
                                      <h5 class="card-title">100</h5>
                                      <h6 class="card-subtitle mb-2 text-muted">Debts Accrued</h6>
                                  </div>
                              </div>
                          </div>
                          <div class="col">
                              <div class="card shadow text-center" style={{ width: '18rem', height: '150px' }}>
                                  <div class="card-body">
                                      <h5 class="card-title">100</h5>
                                      <h6 class="card-subtitle mb-2 text-muted">Debts Paid</h6>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="table mt-5">
                          <table class="table table-bordered">
                              <thead>
                                  <tr>
                                      <th scope="col">Name</th>
                                      <th scope="col">Amount</th>
                                      <th scope="col">Date</th>
                                      <th scope="col">Status</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <th scope="row">Jaffar</th>
                                      <td>20000</td>
                                      <td>13/08/2022</td>
                                      <td>pending</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
              <div class="vertical"></div>
              <div class="col">
                  <div class="container">
                      <form>
                          <div class="form-group mt-5">
                              <label for="exampleInputEmail1">Name *</label>
                              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                          </div>
                          <div class="form-group mt-5">
                              <label for="exampleInputPassword1">Amount *</label>
                              <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                          </div>
                          <div class="form-group mt-5">
                              <label for="exampleInputPassword1">Date *</label>
                              <input type="date" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                          </div>
                          <div class="form-group mt-5">
                              <label for="exampleInputPassword1">Status *</label>
                              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                          </div>
                          <button type="submit" class="btn btn-primary mt-5 mx-auto d-block">Submit</button>
                      </form>
                  </div>
              </div>
          </div>
      </div></>
  )
}
export default Debt