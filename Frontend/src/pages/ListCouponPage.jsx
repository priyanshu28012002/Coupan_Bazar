import React, { useState, useEffect } from 'react';

import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { useNavigate } from 'react-router-dom';
import ListCoupon from '../components/ListCoupon.jsx';

import { CouponSlider, TopDealSlider, RecommendationSlider } from '../components/CouponSlider.jsx';
import SecNavBar from '../components/SecNavBar.jsx';
import {useSelector} from 'react-redux';


const ListCouponPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.userData);

  // useEffect(() => {
    
   
  //   if (!isAuthenticated) {
  //     navigate("/login");
  //   } else {
  //     const fetchUserData = async () => {
  //     console.log("Home");
  //       setUserData(user);
  //       setLoading(false); 
  //     };
  //     fetchUserData();
  //   }
  // }, []);

  return (
    <div>
      {loading ? ( // Render loading indicator while loading is true
        <h1>Loading...</h1>
      ) : (
        <>
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

