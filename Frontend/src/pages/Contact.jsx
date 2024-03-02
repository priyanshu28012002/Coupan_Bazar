import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth.js'; 

const Contact = () => {
  const navigate = useNavigate();
  const { authenticated } = useAuth();  

  useEffect(() => {
   
    if (!authenticated) {
      navigate("/");
    }
  }, [authenticated, navigate]);

  return (
    <>
      <NavBar />
      <h1>Contact Component</h1>
      <Link to="/about">Go to About</Link>
      <Footer />
    </>
  );
};

export default Contact;
