import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { loginUser, registerUser } from "../state/authAction";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useState } from "react";
import axiosInstance from "../../../config/axiosInstace";

export const useAuthHook = () => {
  const [unverifiedEmail, setUnverifiedEmail] = useState("");
  let navigate = useNavigate();

  let dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const loginSubmit = async (data) => {
    const resultAction = await dispatch(loginUser(data));

    if (loginUser.fulfilled.match(resultAction)) {
      reset();
      toast.success("Welcome!");
      navigate("/home");
    }

    if (loginUser.rejected.match(resultAction)) {
      toast.error(resultAction.payload);
    }
  };

  const registerSubmit = async (data) => {
    const { confirmPassword, ...userData } = data;
    try {
      await dispatch(registerUser(userData)).unwrap();

      reset();
      toast.success("Registration successful! Please verify your email 📧");
      navigate("/");
    } catch (error) {
      if (error === "Email already registered but not verified") {
        setUnverifiedEmail(userData.email);
        toast.error("Your email is not verified. Please verify your email.");
        return;
      }
      toast.error(error);
    }
  };
  const resendVerification = async () => {
    try {
      await axiosInstance.post("/auth/resend-verification", {
        email: unverifiedEmail,
      });

      toast.success("Verification email sent again! 📧");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to resend verification email",
      );
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    watch,
    loginSubmit,
    reset,
    registerSubmit,
    unverifiedEmail,
    resendVerification,
  };
};
