import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
  isAuthenticated: false,
  userData: null,
  accessToken: null,
};

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    const request = await axios.post(
      `/api/v1/users/login`,
      userCredentials
    );
    const response = await request.data.data;
    return response;
  }
);

// Create the auth slice
export const userAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
    logout(state) {
      state.userData = null;
      state.accessToken = null;
      state.isAuthenticated = false; 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.userData = null;
        state.accessToken = null;
        state.isAuthenticated = false;
        
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.isAuthenticated = true;
        // state.userObj = action.payload;
      });
  },
 
});

export const { logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;

export const selectCurrentUser = (state)=>state.auth.user
export const selectCurrentToken = (state)=>state.auth.token