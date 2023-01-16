import React, { createContext, useState,useEffect } from 'react';
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName,setUserName] = useState("");
    useEffect(() => {
        const jwt = localStorage.getItem('jwt')
        const bear = 'Bearer ' + jwt
        if (jwt){
            setIsAuthenticated(true)
        }
        axios.get(`https://finplanbackend-production.up.railway.app/user_details`, {
            headers: {
                'Authorization': bear
            },
        })
            .then((response) => {
                if(response.status === 200) {
                    const data = response.data
                    setIsAuthenticated(true)
                    setUserName(data.first_name + ' ' + data.second_name)
                }
            })
    }, [isAuthenticated]);
    
    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserName("");
    };
    
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, userName }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;