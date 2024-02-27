// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// //import { useHistory } from 'react-router-dom';

 import NavBar from '../components/NavBar.jsx';
 import Footer from '../components/Footer.jsx';
const Home = () => {
  return (
    <div>
      <NavBar/>
      <h1>About Component</h1>
      <Link to="/about">Go to About</Link>
      <Footer/>
    </div>
  );
};

export default Home;