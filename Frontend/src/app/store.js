import { configureStore } from '@reduxjs/toolkit';
import userAuthReducer from '../features/user/userAuthSlice';
import couponReducer from '../features/coupon/couponSlice';


export const store = configureStore({

    reducer: {
        auth: userAuthReducer, 
        couponData:couponReducer,
    
    },

}) 