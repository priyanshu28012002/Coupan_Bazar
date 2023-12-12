// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
const Home = () => {
  return (
    <div>
      <NavBar/>
      <h1>Home Component</h1>
      <Link to="/about">Go to About</Link>
      <Footer/>
    </div>
  );
};

export default Home;
