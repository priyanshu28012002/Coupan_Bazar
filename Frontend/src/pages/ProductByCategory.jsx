import { useEffect, useState, Link } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { setCouponData, selectCurrentCoupon } from '../features/coupon/couponSlice.js';
import NavBar from '../components/NavBar.jsx';
import SecNavBar from '../components/SecNavBar.jsx';
import { TopDealSlider } from '../components/CouponSlider.jsx'; // Import other necessary components
import { RecommendationSlider } from '../components/CouponSlider.jsx';
import Footer from '../components/Footer.jsx';
import {CouponCard} from '../components/CouponCard.jsx'
import {SkeletonCard} from '../components/CouponCard.jsx';

const CouponList = ({ coupons }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* {coupons.map((coupon, _id) => (
          <CouponCard key={_id} {...coupon} />
        ))} */}
    </div>
  );
};

const ProductByCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const allcouponsData = useSelector(state => state.couponData);

  console.log(allcouponsData);
  const { category } = useParams();
  // const allcouponData = useSelector(selectCurrentCoupon);

  useEffect(() => {
    const fetchCouponData = async () => {
      try {
        setLoading(true);
        const categoryData = { categoryValue: category };
        dispatch(setCouponData(categoryData))
          .unwrap()
          .then((couponData) => {
          })
          .catch((error) => {
            console.error(error);
          })

      } catch (error) {
        console.error('Error fetching coupon data:', error);
        // Handle error (e.g., show error message to the user)
      } finally {
        setLoading(false);
      }
    };

    if (false) {
      navigate("/login");
    } else {
      fetchCouponData();
    }
  }, [category, isAuthenticated, dispatch, navigate]);


  //   const couponObject = allcouponData.reduce((acc, allllcouponData) => {
  //     acc[coupon._id] = allllcouponData;
  //     return acc;
  //   }, {});

  return (
    <>
      {!isAuthenticated ? (
        <div className="text-center">
          {/* <p className="text-lg">Please<Link to="/login" className="text-blue-500">log in</Link> to view your profile.</p> */}
        </div>
      ) : (
        <div>
          {allcouponsData.lodding ? (

<>

<NavBar />
              <SecNavBar />
              <TopDealSlider />
              <div className=" m-4 bg-slate-400 rounded-3xl grid gap-2 p-4">
              <SkeletonCard/>
              </div>
              <RecommendationSlider />
              <Footer />


</>


          ) : (
            <>
              <NavBar />
              <SecNavBar />
              <TopDealSlider />
              <div className=" m-4 bg-slate-400 rounded-3xl grid gap-2 p-4">
                {allcouponsData.allcoupons.map((coupon, _id) => (
                  <CouponCard key={_id} {...coupon} />
                ))}
              </div>
              <RecommendationSlider />
              <Footer />
            </>
          )}
        </div>
      )}




    </>
  );
};

export default ProductByCategory;
