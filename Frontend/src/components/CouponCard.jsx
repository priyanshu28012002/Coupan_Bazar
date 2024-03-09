import React from 'react';

const CouponCard = ({ companyName, couponCode, urlForDiscount, minPrice, expiryDate, offer, discountType, imageUrl }) => {
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
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded-full focus:outline-none mr-1">
            T&Cs
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded-full focus:outline-none">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
