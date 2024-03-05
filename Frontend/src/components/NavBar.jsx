import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './Logout.jsx'; 
import SignUpButton from '../components/SignUpButton.jsx';
import LoginButton from '../components/LoginButton.jsx'; 

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
       <div className="navbar bg-blue-500 p-4 flex justify-between items-center mt-0 ">
        <div className="logo flex items-center">
          <img src="public/image.png" alt="Logo" className="h-8 mr-2"/>
          <span className="text-white text-lg font-semibold hidden sm:block">Coupon Bazar</span>
        </div>
        <div className="nav-links hidden sm:block">
          
          <Link to="/home" className="text-white mr-4">Home</Link>
          <Link to="/about" className="text-white mr-4">About</Link>
          <Link to="/contact" className="text-white mr-4">Contact Us</Link>
          
        </div>
        <div className="user-actions hidden sm:block">
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
        </div>
    </>
  );
};

export default Navbar;
