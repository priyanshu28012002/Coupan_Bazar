import React, { useEffect } from 'react';
import { useAuth } from '../components/Auth/AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const { authenticated } = useAuth();

  useEffect(() => {
    console.log("from Contect apage "+authenticated);
    if (!authenticated) {
        
      console.log("Time to redirect");
      navigate("/");
    }
    else{
        console.log("You have tocken");
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

export default About;
