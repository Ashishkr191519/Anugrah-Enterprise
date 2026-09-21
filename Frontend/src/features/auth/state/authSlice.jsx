import { createSlice } from "@reduxjs/toolkit";
import { getMe, loginUser } from "./authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: true,
    isAuthenticated: false,
  },
  reducers: {
    addUser: (state, action) => {
      ((state.user = action.payload),
        (state.isLoading = false),
        (state.isAuthenticated = true));
    },
    removeUser: (state) => {
      ((state.user = null),
        (state.isLoading = false),
        (state.isAuthenticated = false));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state) => {
        state.user = null;
        ((state.isLoading = false), (state.isAuthenticated = false));
      })
      .addCase(getMe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMe.fulfilled, (state,action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(getMe.rejected, (state) => {
        state.user=null
        state.isLoading = false;
        state.isAuthenticated=false
      });
  },
});

export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
