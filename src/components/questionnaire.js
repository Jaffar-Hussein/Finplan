import React from "react";
import "../styling/questionnaire.css"

function Questionnaire(){
  return (
    <>
    <div id="questionnaire" >
      <form >
      <div className='mb-2'>
        <label className='labl'>Age *</label>
        <input type="number" name="amount_due"  placeholder="Enter amount due"  className='form-control' required/>
      </div>
      <div className='my-2'>
        <label className='labl'>Gender *</label>
        <select class="form-select text-muted" aria-label="Default select example">
          <option value="male" selected>Male</option>
          <option value="female">Female</option>
        </select>
        {/* <input type="text" name="name"  placeholder="Enter debt"  className='form-control' required/> */}
      </div>
      <div className='my-2'>
        <label className='labl'>Bank Balance*</label>
        <input type="number" name="amount_due"  placeholder="Enter your current bank balance"  className='form-control' required/>
      </div>
      <div className='my-2'>
        <label className='labl'>Sources of Income *</label>
        <select class="form-select text-muted" aria-label="Default select example">
          <option value="male" selected>Salary</option>
          <option value="female">Business</option>
          <option value="female">Investements</option>
          <option value="female">Other</option>

        </select>
      </div>
      <div className='my-2'>
        <label className='labl'>Expected Retirement Age *</label>
        <input type="number" name="amount_due"  placeholder="Expected retirement age"  className='form-control' required/>
      </div>
        <button type="submit" class="btn btn-primary text-center" data-bs-dismiss="modal" >
          Submit
        </button>
      </form>
    </div>
    </>
  );
   
}

export default Questionnaire