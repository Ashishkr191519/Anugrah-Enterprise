import React from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../../../config/axiosInstace";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      toast.success("Reset password link sent to your email!");
      const response = await axiosInstance.post("/auth/forgot-password", {
        email: data.email,
      });
    } catch (error) {
      toast.error("Failed to send reset password link.");
      console.log(
        "Forgot Password Error:",
        error.response?.data || error.message,
      );
    }
  };
  return (
    <div className="min-h-screen bg-[#f7fafd] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 bg-[#171c1f] rounded flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>

            <div>
              <h2 className="font-semibold tracking-tight">ANUGRAH</h2>

              <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                Civil & Hydrological Ops
              </p>
            </div>
          </div>

          <h1 className="text-3xl font-semibold text-[#181c1e]">
            Forgot Password
          </h1>

          <p className="mt-3 text-sm text-gray-500 leading-relaxed">
            Enter your registered email address and we'll send you a secure
            password reset link.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="text-xs font-medium uppercase tracking-wide text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your registered email"
              className="w-full mt-2 bg-[#f1f4f7] text-sm px-4 py-3 rounded outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email address",
                },
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded font-semibold text-sm hover:bg-gray-800 transition"
          >
            Send Reset Link →
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
