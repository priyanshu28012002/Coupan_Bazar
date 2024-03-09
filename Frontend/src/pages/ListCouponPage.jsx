import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import AuthUser from '../components/Auth/AuthUser.js'; // Import AuthUser
//import { useAuth } from '../components/Auth/AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth.js';
import ListCoupon from '../components/ListCoupon.jsx';
import RenderCoupon from '../components/RenderCoupon.jsx';
import CouponCard from '../components/CouponCard.jsx';
import { CouponSlider, TopDealSlider, RecommendationSlider } from '../components/CouponSlider.jsx';
import SecNavBar from '../components/SecNavBar.jsx';


const ListCouponPage = () => {
  const { authenticated } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const { getUserDetails } = AuthUser();
  useEffect(() => {
    
   
    if (!authenticated) {
      navigate("/login");
    } else {
      const fetchUserData = async () => {
        const user = getUserDetails();
        setUserData(user);
        setLoading(false); 
      };
      fetchUserData();
    }
  }, []);

  return (
    <div>
      {loading ? ( // Render loading indicator while loading is true
        <h1>Loading...</h1>
      ) : (
        <>
          {/* <h1>Welcome, {userData && userData.fullName}</h1>
          <p>{userData && userData.email}</p> */}
          <NavBar />
          <SecNavBar/>

          
      <ListCoupon/>
      <RecommendationSlider />
         
    <TopDealSlider />
        
          <Footer />
        </>
      )}
    </div>
  );
};

export default ListCouponPage;

