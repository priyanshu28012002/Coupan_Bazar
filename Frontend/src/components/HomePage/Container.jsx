import React from 'react';
import CouponCard from '../CouponCard'; // Assuming you have a CouponCard component


const GridContainer = () => {
    

    const couponData = [
        { companyName: "Company 1", price: "$10", offer: "50% off" },
        { companyName: "Company 2", price: "$15", offer: "20% off" },
        { companyName: "Company 3", price: "$20", offer: "Free Shipping" },
        { companyName: "Company 4", price: "$25", offer: "30% off" },
        { companyName: "Company 5", price: "$30", offer: "Buy 1 Get 1 Free" },
        { companyName: "Company 6", price: "$35", offer: "40% off" },
        { companyName: "Company 1", price: "$10", offer: "50% off" },
        { companyName: "Company 2", price: "$15", offer: "20% off" },
        { companyName: "Company 3", price: "$20", offer: "Free Shipping" },
        { companyName: "Company 4", price: "$25", offer: "30% off" },
        { companyName: "Company 5", price: "$30", offer: "Buy 1 Get 1 Free" },
        { companyName: "Company 6", price: "$35", offer: "40% off" },
        { companyName: "Company 1", price: "$10", offer: "50% off" },
        { companyName: "Company 2", price: "$15", offer: "20% off" },
        { companyName: "Company 3", price: "$20", offer: "Free Shipping" },
        { companyName: "Company 4", price: "$25", offer: "30% off" },
        { companyName: "Company 5", price: "$30", offer: "Buy 1 Get 1 Free" },
        { companyName: "Company 6", price: "$35", offer: "40% off" },

//{ companyName: "Company 10", price: "$55", offer: "Limited Time Offer" }
      ];
      
  return (
    < >




      <div className="bg-red-200 m-4 p-8 grid gap-3 rounded-lg shadow-2xl hover:bg-red-200 ">    
      {couponData.map((coupon, index) => (
        <CouponCard key={index} {...coupon} />
      ))}
  
      </div>



    
    </>
  );
};

export default GridContainer;
