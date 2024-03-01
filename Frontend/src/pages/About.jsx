import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import React, { useEffect } from 'react';
import { useAuth } from '../components/Auth/AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const { authenticated } = useAuth();

  useEffect(() => {
    if (!authenticated) {
      console.log("Time to redirect");
      navigate("/");
    }
  }, [authenticated, navigate]);

  return <>

<NavBar/>
       <h1>About Component</h1>
       <Link to="/about">Go to About</Link>
      <Footer/>

  </>;
};

export default About;
