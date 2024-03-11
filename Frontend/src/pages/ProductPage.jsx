import React, { useState, useEffect } from 'react';
import ProductDiscription from '../components/User/ProductDiscription.jsx';
import { useNavigate } from 'react-router-dom';

import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { CouponSlider, TopDealSlider, RecommendationSlider } from '../components/CouponSlider.jsx';
import {useSelector} from 'react-redux';


const ProductPage = () => {
  // Assuming 'product' contains the product details
  const navigate = useNavigate();
  useEffect(() => {
    
   
    if (!isAuthenticated) {
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

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const product = {
    "_id": "65e3a59fde3e26912b3cdff0",
    "companyName": "Q Company",
    "couponCode": "KAS",
    "urlForDiscount": "https://example.com/discount",
    "status": "available",
    "minPrice": 4,
    "expiryDate": "2001-04-23T00:00:00.000+00:00",
    "offer": "50% off on selected items",
    "discountType": "percentage",
    "sellDate": "2001-04-01T18:30:00.000+00:00",
    "buyerId": null,
    "ownerId": null,
    "createdAt": "2024-03-02T22:18:07.738+00:00",
    "updatedAt": "2024-03-02T22:18:07.738+00:00"
  };

  return (

    <div>
      <NavBar />

       <TopDealSlider />
        

      
      <ProductDiscription product={product} />
  <CouponSlider />
        <RecommendationSlider />
  
      <Footer />
    </div>
  );
};

export default ProductPage;
