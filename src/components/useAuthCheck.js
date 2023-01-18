import React, { createContext, useState,useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const navigate =  useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isFirsttime, setIsFirsttime] = useState(false);
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
                    
                    if (!data.age ){
                    console.log(data);

                        setIsFirsttime(true)
                    }
                }
                
            })
            .catch((error) => {
                navigate('/')
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
        <AuthContext.Provider value={{ isAuthenticated, login, logout, userName, isFirsttime }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;