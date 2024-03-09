

import AuthUser from '../components/Auth/AuthUser.js';
import React, { useState } from 'react';
import axios from 'axios';


const ListCoupon = () =>{
 
const { getUserDetails } = AuthUser();

const user = getUserDetails();
    


    const [formData, setFormData] = useState({
        companyName: '',
        couponCode: '',
        urlForDiscount: '',
        minPrice: 0,
        expiryDate: '',
        offer: '',
        discountType: '',
        category: '',
        ownerId: user._id, 
      });
      
      const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = async e => {
        e.preventDefault();
        try {
          //await axios.post('/api/coupons', formData); // Adjust the URL based on your API endpoint

          console.log(formData);
          try {
            await axios.post('/api/v1/coupon/listCoupon', formData); 

          } catch (error) {
            console.log(error.message);
          }
          
          // Optionally, you can reset the form after successful submission
          setFormData({
            companyName: '',
            couponCode: '',
            urlForDiscount: '',
            minPrice: 0,
            expiryDate: '',
            offer: '',
            discountType: '',
            category: '',
            ownerId: user._id,
          });
        } catch (error) {
          console.error('Error adding coupon:', error);
          alert('An error occurred while adding the coupon. Please try again.');
        }
      };
    
      return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Coupon</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-gray-700">Company Name:</label>
          <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
        </div>
        <div className="mb-4">
          <label htmlFor="couponCode" className="block text-gray-700">Coupon Code:</label>
          <input type="text" id="couponCode" name="couponCode" value={formData.couponCode} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
        </div>
        <div className="mb-4">
          <label htmlFor="urlForDiscount" className="block text-gray-700">URL for Discount:</label>
          <input type="text" id="urlForDiscount" name="urlForDiscount" value={formData.urlForDiscount} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
        </div>
        <div className="mb-4">
          <label htmlFor="expiryDate" className="block text-gray-700">Expiry Date:</label>
          <input type="date" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
        </div>
        <div className="mb-4">
          <label htmlFor="minPrice" className="block text-gray-700">Min Price:</label>
          <input type="number" id="minPrice" name="minPrice" value={formData.minPrice} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
        </div>
        <div className="mb-4">
          <label htmlFor="offer" className="block text-gray-700">Offer:</label>
          <input type="text" id="offer" name="offer" value={formData.offer} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
        </div>
        <div className="mb-4">
  <label htmlFor="discountType" className="block text-gray-700">Discount Type:</label>
  <select id="discountType" name="discountType" value={formData.discountType} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required>
    <option value="">Select Discount Type</option>
    <option value="percentage">Percentage</option>
    <option value="fixed">Fixed</option>
  </select>

</div>

<div className="mb-4">
          <label htmlFor="category" className="block text-gray-700">Category:</label>
          <select id="category" name="category" value={formData.category} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required>
            <option value="">Select Category</option>
            <option value="healthCare">Healthcare</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="food">Food</option>
            <option value="beauty">Beauty</option>
            <option value="books">Books</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Add Coupon</button>
      </form>
    </div>
      );
    };
export default ListCoupon;