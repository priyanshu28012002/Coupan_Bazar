import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// const useAuth = () => {
//   const [authenticated, setAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = sessionStorage.getItem('token');
//     if (token) {
//       setAuthenticated(true);
//     } else {
//       setAuthenticated(false);
//       navigate("/");
//     }
//   }, [navigate]);

//   return { authenticated };
// };

// export default useAuth;


// Assuming you're using Gatsby for navigation

const useAuth = () => {
    const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      navigate("/");
    }
  }, []);

  return { authenticated: sessionStorage.getItem('token') !== null };
};

export default useAuth;
