import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthUser from './Auth/AuthUser.js';

// Import the logout function from AuthUser

import { Link } from 'react-router-dom';
const LogoutButton = () => {
  const { logout } = AuthUser();

const history = useNavigate();
  const handleLogout = async () => {
    
    logout();
    try {
      const response = await fetch('/api/v1/users/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // You may need to include credentials if using cookies for authentication
        // credentials: 'include',
      });

      if (response.ok) {
        // If logout is successful, redirect to login page or perform any other action
        console.log('Logout successful');
        // Example: redirect to login page
        // window.location.href = '/login';
        history("/");
        
      } else {
        // Handle logout failure
        console.error('Logout failed');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error logging out:', error);
    }
  };

  return (

    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;

// LogoutButton.js

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import AuthUser from './Auth/AuthUser.js';
// import logoutFunction from './logoutFunction.js'; // Import logoutFunction

// const LogoutButton = () => {
//   const { logout } = AuthUser();
//   const history = useNavigate();

//   const handleLogout = () => {
//     logoutFunction(history, logout); // Call logoutFunction with history and logout
//   };

//   return (
//     <button onClick={handleLogout}>Logout</button>
//   );
// };

// export default LogoutButton;
