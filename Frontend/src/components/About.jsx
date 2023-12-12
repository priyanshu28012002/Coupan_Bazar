// About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar.jsx';

const About = () => {
  return (
    <div>
      <NavBar/>
      <h1>About Component</h1>
      <Link to="/">Go to About</Link>
    </div>
  );
};

export default About;
