import {configureStore} from '@reduxjs/toolkit';
import userAuthReducer from '../features/user/userAuthSlice';

export const store = configureStore({

    reducer: {
        auth: userAuthReducer, 
    
    },
}) 