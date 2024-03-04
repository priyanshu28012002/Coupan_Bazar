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
          <a href="/home" className="text-white mr-4">Home</a>
          <a href="/about" className="text-white mr-4">About</a>
          <a href="/contact" className="text-white mr-4">Contact</a>
        </div>
        <div className="user-actions hidden sm:block">
          <a href="/login" className="text-white mr-2 ">Login</a>
          <a href="/signup" className="text-white ml-4">Sign Up</a>
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
          <a href="/about" className="text-white mr-2 mb-2">Home</a>
            <a href="/contact" className="text-white mr-2 mb-2">Contact</a>
            <a href="/contact" className="text-white mr-2 mb-2">About</a>
            <a href="/login" className="text-white mr-2 mb-2">Login</a>
            <a href="/signup" className="text-white mr-2 mb-2">Sign Up</a>
          </div>
         </dir>
        </div>
    </>
  );
};

export default Navbar;
