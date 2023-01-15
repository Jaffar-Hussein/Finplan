import { useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

function useAuthCheck() {
  const location = useLocation();

  const navigate = useNavigate();
  
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      // redirect to login or signup page if JWT not found
      navigate("/landing");
      return;
    }
    
    // check if JWT is valid (e.g. by making a request to your server)
    // ...

    // if JWT is invalid, remove it from local storage and redirect to login or signup page
    localStorage.removeItem('jwt');
  }, [location]);
}

export default useAuthCheck;