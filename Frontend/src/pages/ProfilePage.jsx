import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar.jsx';
import SecNavBar from '../components/SecNavBar.jsx';
import Footer from '../components/Footer.jsx';
import { useUserInfo } from '../context/UserInfoProvider.jsx';
import { CouponCard, SkeletonCard } from '../components/CouponCard';


const ProfilePage = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const userData = useSelector(state => state.auth.userData);
  const { userInfo } = useUserInfo();
  const [allCoupon , setAllCoupons] = useState(userInfo.allUserCoupons);
  const [buyCoupon , setBuyCoupon] = useState(userInfo.buys);
  const [soldcoupon , setSoldcoupon] = useState(userInfo.sold);
  return (
    <>
      {isAuthenticated ? (
        <>
          <NavBar />
          <SecNavBar />
          <div className="container mx-auto p-8">
            <div className=" mx-auto rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h1 className="text-3xl font-semibold text-center mb-4">Profile</h1>
                <div className="flex flex-col space-y-2">
                  <div>
                    <span className="font-semibold">Full Name:</span> {userData.fullName}
                  </div>
                  <div>
                    <span className="font-semibold">Email:</span> {userData.email}
                  </div>
                  <div>
                    <span className="font-semibold">Username:</span> {userData.username}
                  </div>
                  <div>
                    <span className="font-semibold">Gender:</span> {userData.gender}
                  </div>
                  <div>
                    <span className="font-semibold">Contact Number:</span> {userData.contactNo}
                  </div>
                 
                </div>
              </div>
            </div>



            <div className="container mx-auto py-8  grid gap-2">
        <h2 className="text-3xl font-semibold mb-4">All Coupon</h2>
        <div className="grid m-1 bg">
          {/* Display cart items */}
          {allCoupon.length > 0 ? (
            allCoupon.map(item => (
              <CouponCard
                key={item._id}
                _id={item._id}
                companyName={item.companyName}
                couponCode={item.couponCode}
                urlForDiscount={item.urlForDiscount}
                minPrice={item.minPrice}
                expiryDate={item.expiryDate}
                offer={item.offer}
                discountType={item.discountType}
                imageUrl={item.imageUrl}
                onRemove={() => removeItemFromCart(item._id)}
              />
            ))
          ) : (
            // Display skeleton cards while loading
            Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
          )}
        </div>
            </div>

            <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold mb-4">Buyed Coupon</h2>
        <div className="grid ">
          {/* Display cart items */}
          {buyCoupon.length > 0 ? (
            buyCoupon.map(item => (
              <CouponCard
                key={item._id}
                _id={item._id}
                companyName={item.companyName}
                couponCode={item.couponCode}
                urlForDiscount={item.urlForDiscount}
                minPrice={item.minPrice}
                expiryDate={item.expiryDate}
                offer={item.offer}
                discountType={item.discountType}
                imageUrl={item.imageUrl}
                onRemove={() => removeItemFromCart(item._id)}
              />
            ))
          ) : (
            // Display skeleton cards while loading
            Array.from({ length: 1 }).map((_, index) => <SkeletonCard key={index} />)
          )}
        </div>
            </div>



            <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold mb-4">Sold Coupon</h2>
        <div className="grid ">
          {/* Display cart items */}
          {soldcoupon.length > 0 ? (
            soldcoupon.map(item => (
              <CouponCard
                key={item._id}
                _id={item._id}
                companyName={item.companyName}
                couponCode={item.couponCode}
                urlForDiscount={item.urlForDiscount}
                minPrice={item.minPrice}
                expiryDate={item.expiryDate}
                offer={item.offer}
                discountType={item.discountType}
                imageUrl={item.imageUrl}
                onRemove={() => removeItemFromCart(item._id)}
              />
            ))
          ) : (
            // Display skeleton cards while loading
            Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
          )}
        </div>
            </div>




          </div>
          <Footer />
        </>
      ) : (
        <div className="text-center">
          <p className="text-lg">Please <Link to="/login" className="text-blue-500">log in</Link> to view your profile.</p>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
