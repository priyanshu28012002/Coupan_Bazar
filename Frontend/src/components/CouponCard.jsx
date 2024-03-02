import React from 'react';

const CouponCard = ({ companyName, couponCode, urlForDiscount, minPrice, expiryDate, offer, discountType, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={companyName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{companyName}</div>
        <p className="text-gray-700 text-base">Coupon Code: {couponCode}</p>
        <p className="text-gray-700 text-base">URL for Discount: {urlForDiscount}</p>
        <p className="text-gray-700 text-base">Minimum Price: {minPrice}</p>
        <p className="text-gray-700 text-base">Expiry Date: {expiryDate}</p>
        <p className="text-gray-700 text-base">Offer: {offer}</p>
        <p className="text-gray-700 text-base">Discount Type: {discountType}</p>
      </div>
    </div>
  );
};

export default CouponCard;
