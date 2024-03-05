import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slide = ({ heading, description }) => (
  <div className="flex items-center justify-center bg-slate-900  rounded-lg m-6 p-4 text-cyan-200">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">{heading}</h1>
      <p className="text-lg mb-10">{description}</p>

      <div className=' text-center mb-4'>
      <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full">Shop Now </a>
      </div>
    </div>
  </div>
);

const Carousel = () => {
    const slides = [
        { heading: "Unlock Incredible Savings with Coupon Bazar!", description: "Discover amazing deals and discounts" },
        { heading: "Experience Unbeatable Deals at Coupon Bazar", description: "We open the offer" },
        { heading: "Find Your Perfect Deal at Coupon Bazar Today!", description: "Shop smarter and save bigger with us" },
        { heading: "Your Gateway to Exclusive Discounts: Coupon Bazar", description: "Explore a world of savings like never before" },
        { heading: "Discover a World of Savings at Coupon Bazar", description: "Don't miss out on our latest offers and discounts" },
        { heading: "Get Ready for Jaw-Dropping Discounts at Coupon Bazar", description: "Start saving on your favorite products today" },
        { heading: "Shop Smarter, Save Bigger with Coupon Bazar", description: "Elevate your shopping experience with us" },
        { heading: "Elevate Your Shopping Experience with Coupon Bazar", description: "Unlock exclusive deals and discounts now" },
        { heading: "Step Into a Realm of Savings with Coupon Bazar", description: "Join us and start saving on every purchase" },
        { heading: "The Ultimate Destination for Discount Hunters: Coupon Bazar", description: "Your one-stop shop for unbeatable deals" }
    ];
    
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    fade: true
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <Slide {...slide} />
          
        </div>
      ))}
     

    </Slider>
  );
};

export default Carousel;
