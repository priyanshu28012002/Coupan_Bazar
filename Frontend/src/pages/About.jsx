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
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Frequently Asked Questions (FAQ)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-700">How do I redeem a coupon?</h3>
              <p className="text-lg text-gray-600 mb-6">
                To redeem a coupon, simply click on the coupon code or offer link provided. This will take you to the merchant's website where you can complete your purchase and apply the coupon code at checkout.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-700">Are the coupons on Coupon Bazar verified?</h3>
              <p className="text-lg text-gray-600 mb-6">
                Yes, we strive to provide our users with only verified and up-to-date coupons. Our team regularly checks and updates the coupons to ensure their validity and accuracy.
              </p>
            </div>
            {/* Add more FAQ items here */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
