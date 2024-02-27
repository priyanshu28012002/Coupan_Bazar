import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  const location = useLocation();
  const userData = location.state && location.state.userData;

  return (
    <div>
      <NavBar/>
      {userData ? (
        <div>
          <p>User Data: {userData.username}, {userData.email}, {userData.fullName}</p>
          <Link to="/about">Go to About</Link>
        </div>
      ) : (
        <p>No user data available</p>
      )}
      <Footer/>
    </div>
  );
};

export default Home;
