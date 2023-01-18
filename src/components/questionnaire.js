import {React,useState,useRef }from "react";
import "../styling/questionnaire.css"
// import axios from "axios";
function Questionnaire(){
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bank_balance, setBankbalance] = useState("");
  const [retirement_age, setRetirementage] = useState("");
  const [source_type,setSourceType] = useState("");
  const [message,setMessage] = useState("");
  const [error_code, setErrorCode] = useState("");
  const bear = 'Bearer ' + localStorage.getItem('jwt')
  const exit = useRef(null);

  function handleSubmit(e){
    e.preventDefault();
   
    if (gender && age && source_type&&retirement_age&&bank_balance){
      fetch("https://finplanbackend-production.up.railway.app/user_update", {
          method: "POST",
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
              'Authorization': bear
          },
          body:  JSON.stringify({
              gender,age,source_type,retirement_age,bank_balance
            })

      })
      setMessage(true)
      exit.current?.click();

          
  }else{
    setErrorCode("Enter valid data for all the fields")
  }

  }
  return (
    <>
    <div id="questionnaire" >
      <form onSubmit={handleSubmit}>
      <div className='mb-2'>
        <label className='labl'>Age *</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} name="amount_due"  placeholder="How old are you ?"  className='form-control' required/>
      </div>
      <div className='my-2'>
        <label className='labl'>Gender *</label>
        <select className="form-select text-muted" aria-label="Default select example"  onChange={(e) => setGender(e.target.value)} defaultValue={gender}>
          <option >Male</option>
          <option >Female</option>
        </select>
      </div>
      <div className='my-2'>
        <label className='labl'>Bank Balance*</label>
        <input type="number" value={bank_balance} onChange={(e) => setBankbalance(e.target.value)} name="amount_due"  placeholder="Enter your current bank balance"  className='form-control' required/>
      </div>
      <div className='my-2'>
        <label className='labl'>Sources of Income *</label>
        <select className="form-select text-muted" aria-label="Default select example" defaultValue={source_type} onChange={(e) => setSourceType(e.target.value)}>
          <option >Salary</option>
          <option >Business</option>
          <option >Investements</option>
          <option >Other</option>

        </select>
      </div>
      <div className='my-2'>
        <label className='labl'>Expected Retirement Age *</label>
        <input type="number" value={retirement_age} onChange={(e) => setRetirementage(e.target.value)} name="amount_due"  placeholder="Expected retirement age"  className='form-control' required/>
      </div>
        <button type="submit" className="btn btn-primary text-center" data-bs-dismiss= {message? 'modal' :''} ref={exit}>
          Submit
        </button>
        <p>{error_code}</p>
      </form>
    </div>
    </>
  );
   
}

export default Questionnaire