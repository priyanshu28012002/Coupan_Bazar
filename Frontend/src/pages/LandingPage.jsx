// Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import {SparklesCore}  from "../components/ui/sparkles.tsx";

import { CouponSlider, TopDealSlider,RecommendationSlider } from '../components/CouponSlider.jsx';
import MonthlyTopSeller from '../components/MonthlyTopSeller.jsx';
import Testimonial from '../components/Testimonial.jsx';
import LoginButton from '../components/LoginButton.jsx';

import Welcome from '../components/Welcome.jsx';


const LandingPage = () => {

  


  return (
   <>
    <NavBar />
    <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 ml-8"> <strong>Top Deal of The Day</strong></h1>
        <div className="flex justify-between items-start">
          <div className="bg-white shadow-md p-8 rounded-lg w-full">
            <TopDealSlider />
          </div>


        </div>
      </div>
   <div className=''>

   {/* <section class="hero bg-gray-900 text-white py-20 mx-4 my-4 rounded-4">
  <div class="container mx-auto text-center">
    <h1 class="text-4xl font-bold mb-4">Welcome to Coupon Bazar</h1>
    <p class="text-lg mb-8">Discover amazing deals and discounts</p>
    <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full">Shop Now</a>
  </div>
   </section> */}

<Welcome/>

   <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 ml-8"> <strong> Discount Coupon</strong></h1>
        <div className="flex justify-between items-start">
          <div className="bg-white shadow-md p-8 rounded-lg w-full">
            <CouponSlider />
          </div>


        </div>
      </div>

    


   <section class="features py-20 bg-slate-400">
  <div class="container mx-auto">
    <h2 class="text-3xl font-bold text-center mb-12">Our Features</h2>
    <div class="flex flex-wrap justify-center">
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h3 class="text-xl font-bold mb-4">Deal of the Day</h3>
          <p>Discover a new deal every day</p>
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h3 class="text-xl font-bold mb-4">Exclusive Offers</h3>
          <p>Get access to exclusive discounts</p>
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h3 class="text-xl font-bold mb-4">Easy Redemption</h3>
          <p>Redeem your coupons hassle-free</p>
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h3 class="text-xl font-bold mb-4">Wide Variety</h3>
          <p>Explore a wide range of products</p>
        </div>
      </div>
    </div>
  </div>
   </section>

   <div className="container mx-auto py-8">
   
        <div className="flex justify-between items-start">
          <div className="bg-white shadow-md p-8 rounded-lg w-full">
            <RecommendationSlider />
          </div>
        </div>
        </div>



        <div className="container mx-auto py-8">
        
        <div className="flex justify-between items-start">
          <div className="bg-white shadow-md p-8 rounded-lg w-full">
          <MonthlyTopSeller/>
          </div>
        </div>
        </div>


        
        <div className="container mx-auto py-8">

        <div className="flex justify-between items-start">
          <div className="bg-white shadow-md p-8 rounded-lg w-full">
          <Testimonial/>
          </div>
        </div>
        </div>


  
   </div>
   

<Footer/>
   

      
   </>
  );
};

export default LandingPage;
