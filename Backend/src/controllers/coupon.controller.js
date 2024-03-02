import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { Coupon} from "../models/coupon.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const listCoupon = asyncHandler( async (req, res)=>{
    const { companyName,couponCode,urlForDiscount,minPrice,expiryDate,offer,discountType,ownerId} = req.body;
   // companyName,couponCode,urlForDiscount,status,minPrice,expiryDate,offer,discountType,sellDate,buyerId,ownerId
    if (
        [ companyName,couponCode,urlForDiscount,minPrice,expiryDate,offer,discountType,ownerId].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }
    console.log(companyName,couponCode,urlForDiscount,minPrice,expiryDate,offer,discountType,ownerId);

    const coupon = await Coupon.create({
      
        companyName,
        couponCode,
        urlForDiscount,
        minPrice,
        expiryDate,
        offer,
        discountType,
        ownerId
    })
    console.log(coupon);
    const couponCreated = await Coupon.findById(coupon._id);
    if (!couponCreated) {
        throw new ApiError(500, "Something went wrong while listing the Coupon")
    }

    return res.status(201).json(
        new ApiResponse(200, couponCreated, "Coupon Listing Successfully")
    )

})
const coupons = asyncHandler( async (req, res)=>{
    try {
        
        // Query the database to fetch all coupons
        const couponsDetail = await Coupon.find();
        // Send the fetched coupons as a response
        return res.status(200).json(couponsDetail);
      } catch (error) {
        // Handle errors
        return  new ApiError(500, error.message);
      }

})

export {
    listCoupon,
    coupons
}