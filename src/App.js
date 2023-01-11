import React, {useState, useEffect} from 'react';
import './App.css';
import Signup from './components/sign-up';
import Login from './components/login2'
import {Routes, Route} from "react-router-dom"
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  return (
    <>
    {/* // <div className="App"> */}
      <Routes>
        {/* <Route path="" element */}
        <Route path='/register' element={<Signup setUser={setUser}/>}/>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
      </Routes>
    </>
  );
}

export default App;
