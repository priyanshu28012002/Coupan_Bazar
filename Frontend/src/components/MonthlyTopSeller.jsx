import React from 'react';


const CouponCard = ({ companyName, price, offer }) => {
    return (
      <div className="coupon-card bg-blue-300 shadow-md p-4 rounded-4 m-1">
        <h3 className="text-lg font-semibold mb-2">{companyName}</h3>
        <p className="text-gray-600 mb-2">Price: {price}</p>
        <p className="text-blue-500">{offer}</p>
      </div>
    );
  };

const MonthlyTopSeller = () => {
  // Dummy data for coupons
  const coupons = [
    { id: 1, companyName: 'Company 1', price: '$10', offer: '50% off' },
    { id: 2, companyName: 'Company 2', price: '$15', offer: '20% off' },
    { id: 3, companyName: 'Company 3', price: '$20', offer: 'Free Shipping' },
    { id: 4, companyName: 'Company 4', price: '$25', offer: '30% off' },
    { id: 5, companyName: 'Company 5', price: '$30', offer: 'Buy 1 Get 1 Free' },
    { id: 6, companyName: 'Company 6', price: '$35', offer: '40% off' },
    { id: 7, companyName: 'Company 7', price: '$40', offer: 'Free Gift' },
    { id: 8, companyName: 'Company 8', price: '$45', offer: '25% off' },
    { id: 9, companyName: 'Company 9', price: '$50', offer: 'Exclusive Deal' },
    { id: 10, companyName: 'Company 10', price: '$55', offer: 'Limited Time Offer' }
  ];

  return (
    <div className="monthly-top-seller">
<h1 className="text-3xl font-bold mb-4"> <strong>Monthly Top Seller </strong></h1>
      <div className="grid grid-cols-5 gap-4">
        {coupons.map(coupon => (
          <div key={coupon.id}>
            <CouponCard {...coupon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyTopSeller;
