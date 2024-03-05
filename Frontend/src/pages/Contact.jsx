import React from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <NavBar />
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h2>
              <p className="text-lg text-gray-700 mb-6">
                Feel free to reach out to us for any inquiries, feedback, or assistance. Our dedicated team is here to help you.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-gray-700">Office Location:</h3>
                <p className="text-lg text-gray-600">123 Main Street, City, Country</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-gray-700">Email:</h3>
                <p className="text-lg text-gray-600">info@couponbazar.com</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-gray-700">Phone:</h3>
                <p className="text-lg text-gray-600">+123 456 7890</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-gray-700">Social Media:</h3>
                <div className="flex">
                  <a href="#" className="text-blue-500 hover:text-blue-600 mr-4">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-600 mr-4">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-600 mr-4">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-700">WhatsApp:</h3>
                <p className="text-lg text-gray-600">+123 456 7890</p>
              </div>
            </div>
            <div>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

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
          
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
