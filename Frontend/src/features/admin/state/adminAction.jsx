import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../config/axiosInstace";


export const adminLogin = createAsyncThunk(
  "admin/login",

  async (adminData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/admin/login",
        adminData,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Admin login failed"
      );
    }
  }
);