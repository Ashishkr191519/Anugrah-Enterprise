import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAdminLogin from "../hooks/useAdminLogin";

const AdminLogin = () => {
  const {
    showPassword,
setShowPassword,
    register,
    handleSubmit,
    errors,

    onSubmit,
  } = useAdminLogin();

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 lg:p-10 bg-[#0b0f12] text-[#e0e3e7]">
      <div className="w-full flex items-center justify-center relative">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <div className="w-[640px] h-[640px] rounded-full bg-sky-400/5 blur-3xl -translate-y-6" />
          <div className="w-[320px] h-[320px] rounded-full bg-emerald-400/5 blur-2xl translate-y-24 translate-x-12" />
        </div>

        {/* Admin Card */}
        <div className="relative w-full max-w-[460px] bg-[#181c1f] rounded-xl p-6 md:p-10 shadow-2xl">
          {/* Top Security Bar */}
          <div className="flex items-center justify-between bg-[#1c2023] px-4 py-2 rounded-lg mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(78,222,163,0.6)] animate-pulse" />

              {/* <span className="text-[11px] font-semibold tracking-widest text-[#bec8d2]">
                GATEWAY // 01-SYS
              </span> */}
            </div>

            <div className="flex items-center gap-1.5 text-sky-400">
              <span className="text-sm">♢</span>
              <span className="text-[11px] font-semibold tracking-widest">
                SECURE ACCESS
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-sky-400/10 text-sky-400 text-[11px] font-semibold tracking-widest uppercase">
              <span>◈</span>
              Administrative Access
            </div>

            <h1 className="mt-3 text-4xl md:text-[36px] leading-tight font-semibold tracking-tight text-[#e0e3e7]">
              Admin Login
            </h1>

            <p className="mt-2 text-sm leading-6 text-[#bec8d2]">
              Sign in to access the administrative control panel.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label
                  htmlFor="adminEmail"
                  className="text-[11px] font-semibold tracking-widest uppercase text-[#bec8d2]"
                >
                  Admin Email
                </label>

                <span className="text-[11px] text-[#88929b] tracking-wider">
                  EMAIL
                </span>
              </div>

              <div className="relative flex items-center bg-[#0b0f12] rounded-lg border border-transparent focus-within:border-sky-400/40 transition-colors">
                <span className="absolute left-3.5 text-[#88929b] text-lg pointer-events-none">
                  @
                </span>

                <input
                  id="adminEmail"
                  type="email"
                  placeholder="admin@example.com"
                  autoComplete="username"
                  className="w-full bg-transparent pl-11 pr-4 py-3 text-sm text-[#e0e3e7] placeholder:text-[#3e4850] outline-none rounded-lg"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
              </div>

              {errors.email && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label
                  htmlFor="adminPassword"
                  className="text-[11px] font-semibold tracking-widest uppercase text-[#bec8d2]"
                >
                  Password
                </label>

                <span className="text-[11px] text-sky-400 tracking-wider">
                  PROTECTED
                </span>
              </div>

              <div className="relative flex items-center bg-[#0b0f12] rounded-lg border border-transparent focus-within:border-sky-400/40 transition-colors">
                <span className="absolute left-3.5 text-[#88929b] text-lg pointer-events-none">
                  ◆
                </span>

                <input
                  id="adminPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••••••••"
                  autoComplete="current-password"
                  className="w-full bg-transparent pl-11 pr-12 py-3 text-sm text-[#e0e3e7] placeholder:text-[#3e4850] outline-none rounded-lg"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 text-[#88929b] hover:text-[#e0e3e7] transition-colors"
                >
                  {showPassword ? "◉" : "◌"}
                </button>
              </div>

              {errors.password && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Session */}
            <div className="flex items-center justify-between pt-1">
              {/* <label className="inline-flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-sky-400 cursor-pointer"
                />

                <span className="text-xs text-[#bec8d2]">
                  Remember this device
                </span>
              </label> */}

              {/* <span className="text-[11px] font-semibold tracking-widest text-emerald-400">
                🔒 SECURE
              </span> */}
            </div>

            {/* Login Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-400 text-[#00344d] font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.99] shadow-md"
              >
                <span className="tracking-wide">Authenticate & Continue</span>

                <span className="text-lg">→</span>
              </button>
            </div>
          </form>

          {/* Bottom Security Strip */}
          <div className="mt-6 pt-5 border-t border-[#313539]">
            <div className="flex items-center justify-center gap-2 flex-wrap text-[10px] font-semibold tracking-widest text-[#88929b]">
              <span className="text-[#bec8d2]">🔐 SECURE CONNECTION</span>

              <span>•</span>

              <span className="text-[#bec8d2]">RESTRICTED ACCESS</span>
            </div>

            <p className="text-center text-[10px] text-[#3e4850] tracking-wider mt-2">
              AUTHORIZED ADMINISTRATORS ONLY
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminLogin;
