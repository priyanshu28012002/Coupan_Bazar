import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CouponSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Array containing data for each coupon card
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
    { companyName: "Company 10", price: "$55", offer: "Limited Time Offer" }
  ];

  return (
    <div className="coupon-slider-container">
      <Slider {...settings}>
        {couponData.map((coupon, index) => (
          <div key={index}>
            <CouponCard {...coupon} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CouponCard = ({ companyName, price, offer }) => {
  return (
    <div className="coupon-card bg-blue-300 shadow-md p-4 rounded-4 m-1">
      <h3 className="text-lg font-semibold mb-2">{companyName}</h3>
      <p className="text-gray-600 mb-2">Price: {price}</p>
      <p className="text-blue-500">{offer}</p>
    </div>
  );
};

export default CouponSlider;
