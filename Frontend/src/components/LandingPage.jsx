// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';



const SignUpButton = ({ onClick }) => {
  return (
    <button 
     
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4 transition duration-300">
      <Link to="/signup">SignUp</Link>
    </button>
  );
};

const LoginButton = () => {
  return (
    <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300">
      <Link to="/login">Login</Link>
    </button>
  );
};


const imageUrl = "url('https://images.unsplash.com/photo-1594968973184-9040a5a79963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
const LandingPage = () => {

  return (
   <>
   <div className="bg-gray-100 min-h-screen flex items-center justify-center bg-cover bg-center h-screen" style={{backgroundImage: imageUrl}}>


      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Coupon Bazar</h1>
        <p className="text-2xl text-center mb-8">Coupon Bazaar is not just another online marketplace; it's a hub of opportunities where unused discount coupons are given a new lease on life. In a world inundated with promotional offers and limited-time deals, many discount coupons often go unused, gathering digital dust in forgotten inboxes or discarded in the recycling bin. However, at Coupon Bazaar, we saw this untapped potential and envisioned a platform where these valuable resources could find their rightful owners.</p>
       
      </div>
    </div>

    <div className="bg-zinc-300 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 mt-8">Where Unused Discount Coupons Find New Homes</h1>
        <p className="text-lg text-center mb-8">
Introducing Coupon Bazaar: Where Unused Discount Coupons Find New Homes

Coupon Bazaar is not just another online marketplace; it's a hub of opportunities where unused discount coupons are given a new lease on life. In a world inundated with promotional offers and limited-time deals, many discount coupons often go unused, gathering digital dust in forgotten inboxes or discarded in the recycling bin. However, at Coupon Bazaar, we saw this untapped potential and envisioned a platform where these valuable resources could find their rightful owners.

At Coupon Bazaar, our mission is simple yet profound: to bridge the gap between coupon seekers and coupon owners, thereby maximizing the utility of every discount offer. Our platform serves as a digital marketplace where individuals can buy and sell unused discount coupons with ease, convenience, and security.</p>
        <div className="flex justify-center mb-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
            Get Started
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
        <div className="bg-white rounded-lg p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0">
              <img src="/image.png" alt="Unused Coupons" className="rounded-lg" />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">Helping Those in Need</h2>
              <p className="text-lg mb-4">We believe in giving back to the community. That's why we provide unused coupons to those who need them the most. Every coupon counts in making a difference in someone's life.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-white-500 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-8">
Unlock savings. Find discounted deals. Buy and sell unused coupons hassle-free at Coupon Bazaar.</h1>
        <div className="flex justify-center mb-8">
          <SignUpButton  />
          <LoginButton />
        </div>
      </div>
    </div>
   </>
  );
};

export default LandingPage;
