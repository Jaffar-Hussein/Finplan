import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from './components/sign-up';
import Login from './components/login'
import Navbar from "./components/navbar";
import NotFound from "./components/404";
import './App.css';

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navbar/>}>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
