import {Router } from "express";

import {
    listCoupon,
    coupons,
    showCoupons,
    showUserCoupons,
    buyCoupon
} from "../controllers/coupon.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

//secured routes
router.route("/listCoupon").post(verifyJWT,listCoupon);
router.route("/listCoupon").get(verifyJWT,coupons);
router.route("/show/:category").get(showCoupons);
router.route("/user-coupons").get(showUserCoupons);
router.route("/user-coupons-buy").get(buyCoupon);
export default router; 