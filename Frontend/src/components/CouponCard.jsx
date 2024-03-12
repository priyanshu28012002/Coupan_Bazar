import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const CouponCard = ({ _id, companyName, couponCode, urlForDiscount, minPrice, expiryDate, offer, discountType, imageUrl }) => {
  const userId = useSelector(state => state.auth.userData._id);
  const couponId = _id

  console.log(userId, couponId);


  const buyFunction = async (userId, couponId) => {
    try {
      const response = await axios.post('/api/v1/coupon/user-coupon-buy', {
        userId: userId,
        couponId: couponId
      });

      console.log('Buy API  successful:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error making Buy API call:', error);
      throw error;
    }
  };

  
  const addToCartFunction = async (userId, couponId) => {
    try {
      const response = await axios.post('/api/v1/coupon/user-coupon-addToCart', {
        userId: userId,
        couponId: couponId
      });

      console.log(' API To Add To cart call successful:', response.data);
      return response.data;
      
    //   const config = {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //         'username': 'alla'
    //     },
    //     data: {},
        
    // }
    //   const response = await axios.get('/api/v1/coupon/user-coupons',
    //   config
    //    );

    //   console.log('  check pai call API To Add To cart call successful:', response.data);
    //   return response.data;


    } catch (error) {
      console.error('Error making In Add To cart API call:', error);
      throw error;
    }
  };

  const buyHandleClick = () => {
    
    buyFunction(userId, couponId);
  };
  const AddToCartHandleClick = ()=>{
    addToCartFunction(userId, couponId);
  }
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg flex opacity-75 hover:bg-blue-400 ">
      <div className="w-1/2 opacity-75 hover:opacity-100 rounded-lg">
        <img className="w-full h-32 object-cover object-center" src={imageUrl} alt={companyName} />
      </div>
      <div className="px-4 py-2 flex flex-col justify-between w-1/2 hover:bg-red-400 hover:text-blue-500">
        <div>
          <div className="font-bold text-lg mb-1 ">{companyName}</div>
          <p className="text-sm mb-1 text-gray-600">Coupon Code: {couponCode}</p>
          <p className="text-sm mb-1 text-gray-600">URL for Discount: {urlForDiscount}</p>
          <p className="text-sm mb-1 text-gray-600">Minimum Price: {minPrice}</p>
          <p className="text-sm mb-1 text-gray-600">Expiry Date: {expiryDate}</p>
          <p className="text-sm mb-1 text-gray-600">Offer: {offer}</p>
          <p className="text-sm mb-1 text-gray-600">Discount Type: {discountType}</p>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded-full focus:outline-none mr-1"
          onClick={AddToCartHandleClick}
          >
            Add to Cart
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded-full focus:outline-none"
            onClick={buyHandleClick}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};




 const SkeletonCard = () => {
  return (


    <div class="bg-white rounded-lg overflow-hidden shadow-lg flex opacity-75 animate-pulse ">
    <div class=" animate-pulse w-1/2 opacity-75 hover:opacity-100 rounded-lg">
      <div class="w-full h-56 bg-gray-200"></div> 
    </div>
    <div class="px-4 py-2 flex flex-col justify-between w-1/2  ">
      <div  class="w-50">
        <div class="font-bold text-lg mb-1 h-4 bg-gray-200 rounded"></div>
        <p class="text-sm mb-1 text-gray-600 h-3 bg-gray-200 rounded"></p>
        <p class="text-sm mb-1 text-gray-600 h-3 bg-gray-200 rounded"></p>
        <p class="text-sm mb-1 text-gray-600 h-3 bg-gray-200 rounded"></p>
        <p class="text-sm mb-1 text-gray-600 h-3 bg-gray-200 rounded"></p>
        <p class="text-sm mb-1 text-gray-600 h-3 bg-gray-200 rounded"></p>
        <p class="text-sm mb-1 text-gray-600 h-3 bg-gray-200 rounded"></p>
        <p class="text-sm mb-1 text-gray-600 h-3 bg-gray-200 rounded"></p>
        <p class="text-sm mb-1 text-gray-600 h-3 bg-gray-200 rounded"></p>
        <p class="text-sm mb-1 text-gray-600 h-3 bg-gray-200 rounded"></p>
      </div>
      <div class="flex justify-end ">
        <button class="bg-gray-600 hover:bg-gray-600 text-gray-600 font-bold py-1 px-3 rounded-full focus:outline-none mr-1">
          Kaka
        </button>
        <button class="bg-gray-600 hover:bg-gray-600 text-gray-600 font-bold py-1 px-3 rounded-full focus:outline-none">
  kaka
        </button>
      </div>
    </div>
  </div>

  );
};

export { CouponCard, SkeletonCard };




<div class="animate-pulse">
<div class="bg-white rounded-lg overflow-hidden shadow-lg flex opacity-75 relative">
  <div class=" animate-pulse w-1/2 opacity-75 hover:opacity-100 rounded-lg">
    <div class="w-full h-56 bg-gray-200"></div> 
  </div>
  <div class="px-4 py-2 flex flex-col justify-between w-1/2  ">
    <div  class="w-50">
      <div class="font-bold text-lg mb-1 h-4 bg-gray-200 rounded"></div>
      <p class="text-sm mb-1 text-gray-600 h-3 bg-gray-200 rounded"></p>
      <p class="text-sm mb-1 text-gray-600 h-3 bg-gray-200 rounded"></p>
      <p class="text-sm mb-1 text-gray-600 h-3 bg-gray-200 rounded"></p>
      <p class="text-sm mb-1 text-gray-600 h-3 bg-gray-200 rounded"></p>
      <p class="text-sm mb-1 text-gray-600 h-3 bg-gray-200 rounded"></p>
      <p class="text-sm mb-1 text-gray-600 h-3 bg-gray-200 rounded"></p>
      <p class="text-sm mb-1 text-gray-600 h-3 bg-gray-200 rounded"></p>
      <p class="text-sm mb-1 text-gray-600 h-3 bg-gray-200 rounded"></p>
      <p class="text-sm mb-1 text-gray-600 h-3 bg-gray-200 rounded"></p>
    </div>
    <div class="flex justify-end ">
      <button class="bg-gray-600 hover:bg-gray-600 text-gray-600 font-bold py-1 px-3 rounded-full focus:outline-none mr-1">
        Kaka
      </button>
      <button class="bg-gray-600 hover:bg-gray-600 text-gray-600 font-bold py-1 px-3 rounded-full focus:outline-none">
kaka
      </button>
    </div>
  </div>

<div class = " h-auto w-auto bg-clip-border -rotate-6 bg-red-600 border-red-600 border-4 bottom-16 sm:mx-48 mx-32 lg:mx-96  justify-between absolute">

<div class=" text-center text-8xl font-semibold font-serif  bg-clip-text text-transparent bg-gradient-to-r text-white">SOLD</div>
</div>
</div>
   
  </div>

