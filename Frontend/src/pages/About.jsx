import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth.js'; 
import ListCoupon from '../components/ListCoupon.jsx';
import RenderCoupon from '../components/RenderCoupon.jsx';
import CouponCard from '../components/CouponCard.jsx';
const About = () => {
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
      <h1>About Component</h1>
      <Link to="/contact">Go to Contact</Link>
    <RenderCoupon/>
      <ListCoupon/>
      <Footer />
    </>
  );
};

export default About;
