import React from 'react';
import ProductDescription from './ProductDiscription.jsx';

import NavBar from '../NavBar.jsx';
import Footer from '../Footer.jsx';
import { CouponSlider, TopDealSlider, RecommendationSlider } from '../CouponSlider.jsx';


const ProductPage = () => {
  // Assuming 'product' contains the product details
  const product = {
    "_id": "65e3a59fde3e26912b3cdff0",
    "companyName": "Q Company",
    "couponCode": "KAS",
    "urlForDiscount": "https://example.com/discount",
    "status": "available",
    "minPrice": 4,
    "expiryDate": "2001-04-23T00:00:00.000+00:00",
    "offer": "50% off on selected items",
    "discountType": "percentage",
    "sellDate": "2001-04-01T18:30:00.000+00:00",
    "buyerId": null,
    "ownerId": null,
    "createdAt": "2024-03-02T22:18:07.738+00:00",
    "updatedAt": "2024-03-02T22:18:07.738+00:00"
  };

  return (
    <div>
      <NavBar />

      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4"> <strong> Top Deal of Dat</strong></h1>
        <div className="flex justify-between items-start">
          <div className="bg-white shadow-md p-8 rounded-lg w-full">
            <TopDealSlider />
          </div>
        </div>
        </div>

      
      <ProductDescription product={product} />

      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4"> <strong>Related Discount Coupon</strong></h1>
        <div className="flex justify-between items-start">
          <div className="bg-white shadow-md p-8 rounded-lg w-full">
            <CouponSlider />
          </div>


        </div>
      </div>

      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4"> <strong> Recommendation</strong></h1>
        <div className="flex justify-between items-start">
          <div className="bg-white shadow-md p-8 rounded-lg w-full">
            <RecommendationSlider />
          </div>
        </div>
        </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
