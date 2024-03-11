import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';

import { useNavigate } from 'react-router-dom'; 

import { CouponSlider, TopDealSlider, RecommendationSlider } from '../components/CouponSlider.jsx';
import SecNavBar from '../components/SecNavBar.jsx';
import GridContainer from '../components/HomePage/Container.jsx';
import {useSelector, useDispatch} from 'react-redux';


const Home = () => {
  
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.userData);
  useEffect(() => {

    
   
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      const fetchUserData = async () => {
        console.log("Fetching user data",user)
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
          <TopDealSlider />
          
          {/* <GridContainer/> */}

          <RecommendationSlider />
         
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;

