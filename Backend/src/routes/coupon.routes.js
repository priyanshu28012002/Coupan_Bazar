import {Router } from "express";

import {
    listCoupon,
    coupons,
    showCoupons,
    showUserCoupons,
    showUserCartCoupon,
    buyCoupon,
    addToCart
} from "../controllers/coupon.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

//secured routes
router.route("/listCoupon").post(verifyJWT,listCoupon);
router.route("/listCoupon").get(verifyJWT,coupons);
router.route("/show/:category").get(showCoupons);
router.route("/user-coupons").get(showUserCoupons);
router.route("/user-coupon-buy").post(buyCoupon);
router.route("/user-coupon-addToCart").post(addToCart);
router.route("/user-coupon-Cart").get(showUserCartCoupon);
export default router; 