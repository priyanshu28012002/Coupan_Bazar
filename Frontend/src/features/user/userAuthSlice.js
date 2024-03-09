import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  isAuthenticated: false,
};

export const userAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
    
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;
