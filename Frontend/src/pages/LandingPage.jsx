// Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import {SparklesCore}  from "../components/ui/sparkles.tsx";

import CouponSlider from '../components/CouponSlider.jsx';
import LoginButton from '../components/LoginButton.jsx';




const LandingPage = () => {

  


  return (
   <>
    <NavBar />
   <div className=''>

   <section class="hero bg-gray-900 text-white py-20 mx-4 my-4 rounded-4">
  <div class="container mx-auto text-center">
    <h1 class="text-4xl font-bold mb-4">Welcome to Coupon Bazar</h1>
    <p class="text-lg mb-8">Discover amazing deals and discounts</p>
    <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full">Shop Now</a>
  </div>
   </section>



<CouponSlider/>

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




  <section class="about bg-gray-200 py-20">
  <div class="container mx-auto">
    <h2 class="text-3xl font-bold text-center mb-12">About Us</h2>
    <div class="flex flex-wrap items-center">
      <div class="w-full md:w-1/2 p-4">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Image" class="rounded-lg shadow-md" />
      </div>
      <div class="w-full md:w-1/2 p-4">
        <h3 class="text-2xl font-bold mb-4">Our Mission</h3>
        <p class="mb-6">At Coupon Bazar, our mission is to help consumers save money by providing them with the best deals and discounts on a wide range of products and services.</p>
        <h3 class="text-2xl font-bold mb-4">Why Choose Us?</h3>
        <ul class="list-disc ml-8">
          <li>Wide selection of coupons</li>
          <li>Easy-to-use platform</li>
          <li>Regularly updated deals</li>
          <li>Excellent customer service</li>
        </ul>
      </div>
    </div>
  </div>
  </section>


  <section class="team bg-white py-20">
  <div class="container mx-auto">
    <h2 class="text-3xl font-bold text-center mb-12">Our Team</h2>
    <div class="flex flex-wrap justify-center">
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <div class="bg-gray-200 p-8 rounded-lg shadow-md text-center">
          <img src="https://twitter.com/Priyanshu_Sri_/photo" alt="Team Member 1" class="rounded-full mx-auto mb-4" />
          <h3 class="text-xl font-bold mb-2">Priyanshu Srivastava</h3>
          <p class="text-gray-700">Co-founder & CEO</p>
          <div class="mt-4">
            <a href="https://www.linkedin.com/in/pri008/" class="text-blue-500 hover:text-blue-600">LinkedIn</a>
            <span class="mx-2">•</span>
            <a href="" class="text-blue-500 hover:text-blue-600">Twitter</a>
          </div>
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <div class="bg-gray-200 p-8 rounded-lg shadow-md text-center">
          <img src="team-member2.jpg" alt="Team Member 2" class="rounded-full mx-auto mb-4" />
          <h3 class="text-xl font-bold mb-2">Jane Smith</h3>
          <p class="text-gray-700">Co-founder & CTO</p>
          <div class="mt-4">
            <a href="#" class="text-blue-500 hover:text-blue-600">LinkedIn</a>
            <span class="mx-2">•</span>
            <a href="#" class="text-blue-500 hover:text-blue-600">Twitter</a>
          </div>
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <div class="bg-gray-200 p-8 rounded-lg shadow-md text-center">
          <img src="team-member3.jpg" alt="Team Member 3" class="rounded-full mx-auto mb-4" />
          <h3 class="text-xl font-bold mb-2">Emily Johnson</h3>
          <p class="text-gray-700">Marketing Manager</p>
          <div class="mt-4">
            <a href="#" class="text-blue-500 hover:text-blue-600">LinkedIn</a>
            <span class="mx-2">•</span>
            <a href="#" class="text-blue-500 hover:text-blue-600">Twitter</a>
          </div>
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <div class="bg-gray-200 p-8 rounded-lg shadow-md text-center">
          <img src="team-member4.jpg" alt="Team Member 4" class="rounded-full mx-auto mb-4" />
          <h3 class="text-xl font-bold mb-2">Michael Brown</h3>
          <p class="text-gray-700">Lead Developer</p>
          <div class="mt-4">
            <a href="#" class="text-blue-500 hover:text-blue-600">LinkedIn</a>
            <span class="mx-2">•</span>
            <a href="#" class="text-blue-500 hover:text-blue-600">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>

   </div>


<Footer/>
   

      
   </>
  );
};

export default LandingPage;
