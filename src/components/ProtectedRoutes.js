import {React,useContext} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from './useAuthCheck';
// import useAuthCheck from './useAuthCheck';

function ProtectedRoutes() {
const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate()
  return (
    <>
      {isAuthenticated ? (
        <Outlet/>
      ) : (
        navigate("/")
      )}
    </>
  );
}

export default ProtectedRoutes;
