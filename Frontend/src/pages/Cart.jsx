// import React, { useState ,useEffect} from 'react';
// import { CouponSlider, TopDealSlider, RecommendationSlider } from '../components/CouponSlider.jsx';
// import SecNavBar from '../components/SecNavBar.jsx';
// import NavBar from '../components/NavBar.jsx';
// import Footer from '../components/Footer.jsx';
// import {useSelector} from 'react-redux';
// import { useNavigate } from 'react-router-dom';


// const ShoppingCart = () => {
//   // Initialize cart state with an empty array
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

//   useEffect(() => {
    
   
//     if (!isAuthenticated) {
//       navigate("/login");
//     } else {
//       const fetchUserData = async () => {
//         const user = getUserDetails();
//         setUserData(user);
//         setLoading(false); 
//       };
//       fetchUserData();
//     }
//   }, []);

//   // Function to add an item to the cart
//   const addItemToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   // Function to remove an item from the cart
//   const removeItemFromCart = (index) => {
//     const updatedCart = [...cartItems];
//     updatedCart.splice(index, 1);
//     setCartItems(updatedCart);
//   };

//   return (
//     <>
//      <NavBar />
//           <SecNavBar/>
//     <div className="container mx-auto py-8">
//       <h2 className="text-3xl font-semibold mb-4">Shopping Cart</h2>
//       <div className="bg-white shadow-md rounded-md overflow-hidden">
//         <ul className="divide-y divide-gray-200">
//           {/* Display cart items */}
//           {cartItems.map((item, index) => (
//             <li key={index} className="p-4 flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md" />
//                 <div>
//                   <p className="text-lg font-semibold">{item.name}</p>
//                   <p className="text-gray-500">${item.price}</p>
//                 </div>
//               </div>
//               <button onClick={() => removeItemFromCart(index)} className="text-red-500 hover:text-red-600 focus:outline-none">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                 </svg>
//               </button>
//             </li>
//           ))}
//         </ul>
//         {/* Display total price */}
//         <div className="p-4 bg-gray-100">
//           <p className="text-lg font-semibold">Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
//           <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//     <TopDealSlider />
//     <Footer />
//     </>
//   );
// };

// export default ShoppingCart;


import React, { createContext, useState, useEffect, useContext } from 'react';
import { useUserInfo } from '../context/UserInfoProvider'; 
import { CouponCard, SkeletonCard } from '../components/CouponCard';
import NavBar from '../components/NavBar';
import SecNavBar from '../components/SecNavBar';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  // Get user context
  const { userInfo } = useUserInfo();
  const [cartItems, setCartItems] = useState([]);
  const isAuthenticated = userInfo ? userInfo.isAuthenticated : false;
  const navigate = useNavigate();

  useEffect(() => {
    if (false) {
      navigate("/login");
    } else {
      // Fetch cart items from user context
      if (userInfo && userInfo.cart) {
        setCartItems(userInfo.cart);
      }
    }
  }, [isAuthenticated, navigate, useUserInfo]);

  const removeItemFromCart = async (couponId) => {
    try {
      // Perform remove item operation
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <>
      <NavBar />
      <SecNavBar />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold mb-4">Shopping Cart</h2>
        <div className="grid ">
          {/* Display cart items */}
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <CouponCard
                key={item._id}
                _id={item._id}
                companyName={item.companyName}
                couponCode={item.couponCode}
                urlForDiscount={item.urlForDiscount}
                minPrice={item.minPrice}
                expiryDate={item.expiryDate}
                offer={item.offer}
                discountType={item.discountType}
                imageUrl={item.imageUrl}
                onRemove={() => removeItemFromCart(item._id)}
              />
            ))
          ) : (
            // Display skeleton cards while loading
            Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
