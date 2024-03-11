import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
  lodding: false,
  allcoupons: [{_id:454, category:'allcoupons'}],
 topDealCoupons:null,
 error:null,

};

export const setCouponData = createAsyncThunk(
    "coupon/setCouponData",
    async (categoryData) => { // Change the parameter name to category
      try {
       // console.log("the data is here _> "+categoryData.categoryValue);
        const response = await axios.get(`/api/v1/coupon/show/${categoryData.categoryValue}`);
       // console.log(response.data)
      return response.data;
         // Return the entire response data
      } catch (error) {
        // Handle any errors (e.g., logging or throwing an error)
        throw error;
      }
    }
  );

// Create the auth slice
export const couponSlice = createSlice({
  name: "couponData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setCouponData.pending, (state) => {
        state.allcoupons = null;
        state.topDealCoupons = null;
        state.lodding = true;
        state.error = null
      })
      .addCase(setCouponData.fulfilled, (state, action) => {
        state.allcoupons = action.payload.data.allcoupons;
        state.topDealCoupons = action.payload.data.topDeal;
        state.lodding = false;
        state.error = null;

      });
  },
 
});

export const {} = couponSlice.actions;
export default couponSlice.reducer;

export const selectCurrentCoupon = (state) => state.couponData.allcoupons;
export const selectCurrentTopDealCoupons = (state) => state.couponData.topDealCoupons;
