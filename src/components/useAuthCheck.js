import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName,setUserName] = useState("");

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserName("");
    };
    
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, userName, setUserName }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;