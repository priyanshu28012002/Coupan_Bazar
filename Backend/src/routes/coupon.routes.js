import {Router } from "express";

import {
    listCoupon,
    coupons
} from "../controllers/coupon.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

//secured routes
router.route("/listCoupon").post(verifyJWT,listCoupon);
router.route("/listCoupon").get(verifyJWT,coupons);

export default router;