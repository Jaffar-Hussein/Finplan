import React, {useState, useEffect} from 'react';
import './App.css';
import Signup from './components/sign-up';
import Login from './components/login'
import {Routes, Route} from "react-router-dom"


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
    <div className="App">
      <Routes>
        <Route path='/' element={<Signup setUser={setUser}/>}/>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
      </Routes>
    </div>
  );
}

export default App;
