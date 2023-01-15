import React from 'react';
import {Routes, Route} from "react-router-dom"
import Signup from './components/Register';
import Login from './components/Login';
import Landing from './components/LandingPage';
import ProtectedRoutes from './components/ProtectedRoutes';
// import Navbar from "./components/navbar";
// import NotFound from "./components/404";
// import useAuthCheck from './components/useAuthCheck';
import './App.css';

function App() {
    // const navigate = useNavigate()
    return (
            <Routes>
                {/* <Route path="/landing"  /> */}
                <Route path="/" exact element={<Landing/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Signup/>} />
                <Route element={<ProtectedRoutes/>}/>
                    {/* Add your routes here */}

                <Route/>
            </Routes>
            
        // <Router>
        //     <Routes>
        //         <Route path='/signup' element={<Signup/>}/>
        //         <Route path='/login' element={<Login/>}/>
        //         <Route path='/' element={<Navbar/>}>
        //             <Route path='*' element={<NotFound/>}/>
        //         </Route>
        //     </Routes>
        // </Router>
    );
}

export default App;
