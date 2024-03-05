import React from 'react';

const GridContainer = () => {
    const CouponCard = ({ companyName, price, offer }) => {
        return (
          <div className="coupon-card bg-blue-300 shadow-md p-4 rounded-4 m-1">
            <h3 className="text-lg font-semibold mb-2">{companyName}</h3>
            <p className="text-gray-600 mb-2">Price: {price}</p>
            <p className="text-blue-500">{offer}</p>
          </div>
        );
      };

    const couponData = [
        { companyName: "Company 1", price: "$10", offer: "50% off" },
        { companyName: "Company 2", price: "$15", offer: "20% off" },
        { companyName: "Company 3", price: "$20", offer: "Free Shipping" },
        { companyName: "Company 4", price: "$25", offer: "30% off" },
        { companyName: "Company 5", price: "$30", offer: "Buy 1 Get 1 Free" },
        { companyName: "Company 6", price: "$35", offer: "40% off" },
        { companyName: "Company 7", price: "$40", offer: "Free Gift" },
        { companyName: "Company 8", price: "$45", offer: "25% off" },
        { companyName: "Company 9", price: "$50", offer: "Exclusive Deal" },
//{ companyName: "Company 10", price: "$55", offer: "Limited Time Offer" }
      ];
      
  return (
    <div className="grid grid-cols-4 gap-4">

      <div className="col-span-1">
        {/* Image or content for the first column */}
        <img src="https://images.unsplash.com/photo-1709566805289-881acfe97bbc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" />
      </div>



      <div className="col-span-2">
        {/* Content for the second column */}
         <div className="grid grid-cols-3 gap-4">
      {couponData.map((coupon, index) => (
        <CouponCard key={index} {...coupon} />
      ))}
    </div>
      </div>



      <div className="col-span-1">
        {/* Image or content for the first column */}
        <img src="https://images.unsplash.com/photo-1709566805289-881acfe97bbc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" />
      </div>
    </div>
  );
};

export default GridContainer;
