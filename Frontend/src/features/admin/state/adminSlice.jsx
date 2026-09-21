import { createSlice } from "@reduxjs/toolkit";
import { adminLogin } from "./adminAction";

const adminSlice = createSlice({
  name: "admin",

  initialState: {
    admin: null,
    isLoading: false,
    isAuthenticated: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(adminLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(adminLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.admin = action.payload;
        state.error = null;
      })

      .addCase(adminLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      });
  },
});

export default adminSlice.reducer;
