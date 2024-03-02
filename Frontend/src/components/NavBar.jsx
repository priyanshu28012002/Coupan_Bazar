import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './Logout.jsx'; // Import the LogoutButton component

const SignUpButton = ({ onClick }) => {
  return (
    <button 
     
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4 transition duration-300">
      <Link to="/signup">SignUp</Link>
    </button>
  );
};

const LoginButton = () => {
  return (
    <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300">
      <Link to="/login">Login</Link>
    </button>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <SignUpButton  />
          <LoginButton />
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="../../public/image.png" alt="" width="20" height="24" />
          </a>
          <a className="navbar-brand" href="/">Coupon Bazar </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <li className="nav-item">
                <a className="nav-link" href="/contact" tabIndex="-1" aria-disabled="true">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/home" tabIndex="-1" aria-disabled="true">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about" tabIndex="-1" aria-disabled="true">About</a>
              </li>
          <LogoutButton />

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Check if other navbar items are visible */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact" tabIndex="-1" aria-disabled="true">Contact</a>
              </li>
            </ul>

            {/* Check if LogoutButton is visible */}
            <LogoutButton />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
