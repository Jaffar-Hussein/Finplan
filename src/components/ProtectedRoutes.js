import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuthCheck from './useAuthCheck';

function ProtectedRoutes() {
  const authenticated = useAuthCheck();
    const navigate = useNavigate()
  return (
    <>
      {authenticated ? (
        <Outlet/>
      ) : (
        navigate("/")
      )}
    </>
  );
}

export default ProtectedRoutes;
