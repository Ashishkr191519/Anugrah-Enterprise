import axiosInstance from "../../../config/axiosInstace";

import { createAsyncThunk } from "@reduxjs/toolkit";
export const registerUser = createAsyncThunk(
  "auth/register",
  async (credential, thunkApi) => {
    try {
      const response = await axiosInstance.post("/auth/register", credential);
      console.log(response.data.user);
      return response.data.user;
      
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || "Registration failed",
      );
    }
  },
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credential, thunkApi) => {
    try {
      const response = await axiosInstance.post("/auth/login", credential);
      // console.log(response.data.user)
      return response.data.user;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || "Login failed",
      );
    }
  },
);

export const getMe = createAsyncThunk("auth/getMe", async (_, thunkApi) => {
  try {
    const response = await axiosInstance.get("/auth/me");
    return response.data.user;
  } catch (error) {
    return thunkApi.rejectWithValue(
      error.response?.data?.message || "Authentication failed",
    );
  }
});
