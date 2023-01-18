import React from "react";
import "../styling/questionnaire.css"
import NavBar from "./Navbar";
import Footer from "./footer";
function Questionnaire(){
  return (
    <>
    <NavBar />
    <div id="questionnaire">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            What is your current annual income?
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label for="exampleInputEmail1" class="form-label">
            What are your current monthly expenses
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label for="exampleInputEmail1" class="form-label">
            What are your current debts and their balances
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label for="exampleInputEmail1" class="form-label">
            What are your current assets and their values?
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label for="exampleInputEmail1" class="form-label">
            What are your current assets and their values?
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label for="exampleInputEmail1" class="form-label">
            What are your current savings and investments?
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label for="exampleInputEmail1" class="form-label">
            What are your current retirement savings and their balances?
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label for="exampleInputEmail1" class="form-label">
            What are your current insurance policies and their coverage?
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label for="exampleInputEmail1" class="form-label">
            What are your current tax obligations?
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label for="exampleInputEmail1" class="form-label">
            What are your current estate planning documents, such as a will or
            trust?
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label for="exampleInputEmail1" class="form-label">
            What are your current major financial goals, such as buying a house
            or saving a college?
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label for="exampleInputEmail1" class="form-label">
            What are your current major financial concerns, such as paying off
            debt or saving for retirement?
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label for="exampleInputEmail1" class="form-label">
            Are there any other financial matters that you would like to
            discuss?
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

          {/* <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div> */}
        </div>
        {/* <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div> */}
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    <Footer />
    </>
  );
   
}

export default Questionnaire