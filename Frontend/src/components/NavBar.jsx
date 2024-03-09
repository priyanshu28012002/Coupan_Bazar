import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './Logout.jsx'; 
import SignUpButton from '../components/SignUpButton.jsx';
import LoginButton from '../components/LoginButton.jsx'; 
import { useTheme } from '../context/ThemeProvider.jsx';
import {useSelector, useDispatch} from 'react-redux';
import {login,logout} from '../features/user/userAuthSlice.js'

const Navbar = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const handleLogin = () => {
    console.log("Hi");
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };



  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen); 
  }; 

  const { theme, toggleTheme } = useTheme();

  return (
    <>
       {/* <div className="navbar bg-blue-500 p-4 flex justify-between items-center mt-0 ">
        <div className="logo flex items-center">
          <img src="public/image.png" alt="Logo" className="h-8 mr-2"/>
          <span className="text-white text-lg font-semibold hidden sm:block">Coupon Bazar</span>
        </div>
        <div className="nav-links hidden sm:block">
          
          <Link to="/home" className="text-white mr-4">Home</Link>
          <Link to="/about" className="text-white mr-4">About</Link>
          <Link to="/contact" className="text-white mr-4">Contact Us</Link>
          <Link to="/listCoupon" className="text-white mr-4">List Your Coupon</Link>
          
          
        </div>
        <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
        <div className="user-actions hidden sm:block">
        <Link to="/cart" className="text-white mr-4">Cart</Link>
        <Link to="/login" className="text-white mr-4">Login</Link>
        <Link to="/signup" className="text-white mr-4">Sign Up</Link>
          
        </div>
        <div className="sm:hidden" onClick={toggleMobileMenu}>
          <svg className="h-6 w-6 text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
          
          </div>

       
      </div>
      <div id="mobile-menu" className={`sm:hidden ${mobileMenuOpen ? '' : 'hidden'}`}>
         <dir className="bg-blue-500 m-2 rounded-2 bg-opacity-100">
         <div className="flex flex-col items-start mt-2">
         <Link to="/home" className="text-white mr-4">Home</Link>
          <Link to="/about" className="text-white mr-4">About</Link>
          <Link to="/contact" className="text-white mr-4">Contact Us</Link>
          
       
        <Link to="/login" className="text-white mr-4">Login</Link>
        <Link to="/signup" className="text-white mr-4">Sign Up</Link>
          </div>
         </dir>
        </div> */}

<div className={`navbar ${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-500'} p-4 flex justify-between items-center mt-0`}>
  <div className="logo flex items-center">
    <img src="public/image.png" alt="Logo" className="h-8 mr-2"/>
    <span className={`text-lg font-semibold text-white ${theme === 'dark' ? 'hidden' : 'block'}`}>Coupon Bazar</span>
  </div>
  <div className="nav-links hidden sm:block">
    <Link to="/home" className="text-white mr-4">Home</Link>
    <Link to="/about" className="text-white mr-4">About</Link>
    <Link to="/contact" className="text-white mr-4">Contact Us</Link>
    <Link to="/listCoupon" className="text-white mr-4">List Your Coupon</Link>
  </div>
  <div className="user-actions hidden sm:block">
    <Link to="/cart" className="text-white mr-4">Cart</Link>
    <Link to="/login" className="text-white mr-4">Login</Link>
    <Link to="/signup" className="text-white mr-4">Sign Up</Link>
  </div>
 
  <div class>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>



  <div className="flex items-center">
  <button onClick={toggleTheme} className="focus:outline-none mr-2">
    <div className={`w-12 h-6 flex items-center rounded-full p-1 ${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-500'}`}>
      {theme === 'dark' ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="text-yellow-400 w-6 h-6">
          <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-0.8z"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="text-yellow-400 w-6 h-6">
          <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391l-19.9 107.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391l-107.9-19.9c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121l19.9-107.9c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1L346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/>
        </svg>
      )}
    </div>
  </button>
</div>






  <div className="sm:hidden" onClick={toggleMobileMenu}>
    <svg className="h-6 w-6 text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  </div>
</div>
<div id="mobile-menu" className={`sm:hidden ${mobileMenuOpen ? '' : 'hidden'}`}>
  <dir className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-500'} m-2 rounded-2 bg-opacity-100`}>
    <div className="flex flex-col items-start mt-2">
      <Link to="/home" className="text-white mr-4">Home</Link>
      <Link to="/about" className="text-white mr-4">About</Link>
      <Link to="/contact" className="text-white mr-4">Contact Us</Link>
      <Link to="/login" className="text-white mr-4">Login</Link>
      <Link to="/signup" className="text-white mr-4">Sign Up</Link>
    </div>
  </dir>
</div>

    </>
  );
};

export default Navbar;
