import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthUser from './Auth/AuthUser.js';



const logoutFunction = async (history, logout) => {
    const { logout } = AuthUser();
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
  
  export default logoutFunction;