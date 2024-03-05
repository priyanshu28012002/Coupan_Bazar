import React from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <NavBar />
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">About Us</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Coupon Bazar, we are dedicated to helping consumers save money by providing them with the best deals and discounts on a wide range of products and services. Our mission is to make shopping more affordable and enjoyable for everyone.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With a team of passionate individuals and a commitment to excellence, we strive to deliver exceptional value to our customers every day.
              </p>
              <Link to="/contact" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">Contact Us</Link>
            </div>
            <div>
              <img src="https://plus.unsplash.com/premium_photo-1677535269540-f0829cc10196?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Us" className="w-full rounded-lg shadow-lg" />
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
        <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwyndMRj4HLr6pVsev8ixyKJ9jja0Nn3mRLIVM27zUIDECISOrRSItNRCPAWgagkFaBU&usqp=CAU"
  alt="Team Member 2"
  className="rounded-full mx-auto mb-4"
  style={{ width: '100px', height: '100px' }}
/>
     
         
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

        <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz-XvQodADgrd9QjhTYJctkJ_tgLBCfMLIkEmxdslx3ZexLXSgqmvBeUEUyKuqqxHgm_E&usqp=CAU"
        alt="Team Member 3"
        className="rounded-full mx-auto mb-4"
        style={{ width: '100px', height: '100px' }}
      />

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

      <Footer />
    </>
  );
};

export default About;
