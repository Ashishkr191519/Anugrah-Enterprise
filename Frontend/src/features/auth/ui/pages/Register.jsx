import React from "react";
import { useForm } from "react-hook-form";
import { useAuthHook } from "../../hooks/useAuthHook";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { registerSubmit, unverifiedEmail, resendVerification } = useAuthHook();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <div className="min-h-screen bg-[#0b0f12] text-white">
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* ================= LEFT SIDE ================= */}
        <div className="relative hidden lg:flex flex-col justify-between p-10 overflow-hidden border-r border-white/10">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.45]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0b0f12] via-[#0b0f12]/80 to-[#0b0f12]/40" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right,#64748b 1px,transparent 1px),linear-gradient(to bottom,#64748b 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Top */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border border-white/20 bg-black/50 flex items-center justify-center">
                <span className="text-2xl">💧</span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-bold tracking-wider">
                    ANUGRAH ENTERPRISE
                  </h2>

                  <span className="w-2 h-2 bg-sky-400 animate-pulse" />
                </div>

                <p className="text-[11px] tracking-[0.2em] text-sky-400">
                  CIVIL & WATER INFRASTRUCTURE
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-black/50 px-3 py-2 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[11px] tracking-wider text-gray-300">
                CIVIL DESK ACTIVE
              </span>
            </div>
          </div>

          {/* Center */}
          <div className="relative z-10 max-w-xl my-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-sky-400/30 bg-sky-400/10 text-sky-400 text-xs uppercase tracking-wider">
              💧 Municipal & Hydraulic Engineering
            </div>

            <h1 className="mt-5 text-5xl xl:text-6xl font-bold leading-[1.05] tracking-tight">
              Engineering Infrastructure.
              <br />
              <span className="text-sky-400">
                Building a Sustainable Future.
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg">
              Water conservation, infrastructure and civil construction
              solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mt-8 pt-5 border-t border-white/10">
              <div className="bg-black/40 p-3 border-l-2 border-sky-400">
                <p className="text-[10px] text-gray-400 tracking-wider">
                  CAPACITY
                </p>
                <p className="text-sm font-semibold">14.2M M³ / YR</p>
              </div>

              <div className="bg-black/40 p-3 border-l-2 border-emerald-400">
                <p className="text-[10px] text-gray-400 tracking-wider">
                  WATERSHEDS
                </p>
                <p className="text-sm font-semibold">1,840+ CELLS</p>
              </div>

              <div className="bg-black/40 p-3 border-l-2 border-sky-400">
                <p className="text-[10px] text-gray-400 tracking-wider">
                  SAFETY CODE
                </p>
                <p className="text-sm font-semibold">ZERO ACCIDENT</p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="relative z-10 pt-5 border-t border-white/10 flex justify-between text-[10px] tracking-wider text-gray-400">
            <div className="flex gap-3">
              <span className="border border-white/10 px-3 py-1.5">
                ✓ ISO 9001:2015 QUALITY VERIFIED
              </span>

              <span className="border border-white/10 px-3 py-1.5">
                ⚖ CGWA COMPLIANCE FRAMEWORK
              </span>
            </div>

            <span>DIRECT PROJECT DESK DISPATCH</span>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="relative flex flex-col justify-center items-center p-5 sm:p-10 overflow-y-auto">
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right,#64748b 1px,transparent 1px),linear-gradient(to bottom,#64748b 1px,transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Top bar */}
          <div className="relative z-10 w-full max-w-2xl flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

              <span className="text-[11px] text-gray-500 tracking-widest">
                CIVIL AUTH GATEWAY
              </span>
            </div>

            {/* <button
              type="button"
              className="flex items-center gap-2 px-3 py-2 bg-[#181c1f] border border-white/10 text-xs"
            >
              🌙 DARK MODE
              <span className="w-7 h-4 bg-gray-700 rounded-full p-0.5">
                <span className="block w-3 h-3 bg-sky-400 rounded-full ml-3" />
              </span>
            </button> */}
          </div>

          {/* ================= CARD ================= */}
          <div className="relative z-10 w-full max-w-2xl bg-[#181c1f] border border-white/10 p-5 sm:p-8 shadow-2xl">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-sky-400" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-sky-400" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-sky-400" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-sky-400" />

            {/* State bar */}
            <div className="mb-7 bg-[#101417] border border-white/10 p-1">
              <div className="flex justify-between px-2 py-1">
                <span className="text-[10px] text-gray-500 tracking-wider">
                  ⚙ PREVIEW UI SYSTEM STATE:
                </span>

                <span className="text-[10px] text-sky-400 font-bold">
                  MODE: STANDARD
                </span>
              </div>

              <div className="grid grid-cols-3 gap-1">
                <button
                  type="button"
                  className="py-1.5 text-[10px] bg-sky-500 text-black font-bold"
                >
                  [STANDARD]
                </button>

                <button
                  type="button"
                  className="py-1.5 text-[10px] bg-[#262a2e] text-gray-400"
                >
                  [LOADING]
                </button>

                <button
                  type="button"
                  className="py-1.5 text-[10px] bg-[#262a2e] text-gray-400"
                >
                  [SUCCESS]
                </button>
              </div>
            </div>

            {/* Heading */}
            <div className="pb-5 mb-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Create Your Account</h2>

                {/* <span className="text-[10px] text-sky-400 bg-sky-400/5 border border-sky-400/20 px-2 py-1">
                  FORM // REG-01
                </span> */}
              </div>

              <p className="mt-1 text-sm text-gray-400">
                Join Anugrah Enterprise to request and manage your service
                requirements.
              </p>
            </div>

            {/* ================= FORM ================= */}
            <form onSubmit={handleSubmit(registerSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* USERNAME */}
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="text-[11px] tracking-wider font-semibold">
                      USERNAME <span className="text-red-400">*</span>
                    </label>

                    {/* {!errors.username && (
                      <span className="text-[10px] text-emerald-400">
                        ✓ VALID
                      </span>
                    )} */}
                  </div>

                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-gray-500">
                      👤
                    </span>

                    <input
                      type="text"
                      placeholder="Enter your username"
                      className={`w-full h-11 pl-10 pr-3 bg-[#0b0f12] border ${
                        errors.username ? "border-red-500" : "border-white/10"
                      } focus:border-sky-400 outline-none text-sm`}
                      {...register("username", {
                        required: "Username is required",
                        minLength: {
                          value: 3,
                          message: "Minimum 3 characters",
                        },
                      })}
                    />
                  </div>

                  {errors.username && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.username.message}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="text-[11px] tracking-wider font-semibold">
                      EMAIL ADDRESS <span className="text-red-400">*</span>
                    </label>

                    {/* {!errors.email && (
                      <span className="text-[10px] text-emerald-400">
                        ✓ VALID
                      </span>
                    )} */}
                  </div>

                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-gray-500">
                      ✉
                    </span>

                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className={`w-full h-11 pl-10 pr-3 bg-[#0b0f12] border ${
                        errors.email ? "border-red-500" : "border-white/10"
                      } focus:border-sky-400 outline-none text-sm`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email",
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

                {/* PHONE */}
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="text-[11px] tracking-wider font-semibold">
                      PHONE NUMBER <span className="text-red-400">*</span>
                    </label>

                    <span className="text-[10px] text-gray-500">
                      SMS VERIFIED
                    </span>
                  </div>

                  <div className="relative">
                    <div className="absolute left-0 top-0 h-11 px-3 flex items-center bg-[#262a2e] border-r border-white/10">
                      <span className="text-xs text-sky-400 font-semibold">
                        +91
                      </span>
                    </div>

                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className={`w-full h-11 pl-16 pr-3 bg-[#0b0f12] border ${
                        errors.phone ? "border-red-500" : "border-white/10"
                      } focus:border-sky-400 outline-none text-sm`}
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "Enter valid 10 digit number",
                        },
                      })}
                    />
                  </div>

                  {errors.phone && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* PASSWORD */}
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="text-[11px] tracking-wider font-semibold">
                      PASSWORD <span className="text-red-400">*</span>
                    </label>

                    <span className="text-[10px] text-gray-500">
                      STRENGTH: STRONG
                    </span>
                  </div>

                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-gray-500">
                      🔒
                    </span>

                    <input
                      type="password"
                      placeholder="Create a password"
                      className={`w-full h-11 pl-10 pr-3 bg-[#0b0f12] border ${
                        errors.password ? "border-red-500" : "border-white/10"
                      } focus:border-sky-400 outline-none text-sm`}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Minimum 8 characters",
                        },
                      })}
                    />
                  </div>

                  {errors.password && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* CONFIRM PASSWORD */}
                {/* CONFIRM PASSWORD */}
                <div className="md:col-span-2">
                  <div className="flex justify-between mb-1">
                    <label className="text-[11px] tracking-wider font-semibold">
                      CONFIRM PASSWORD <span className="text-red-400">*</span>
                    </label>

                    {/* MATCH */}
                    {confirmPassword &&
                      password &&
                      confirmPassword === password &&
                      !errors.confirmPassword && (
                        <span className="text-[10px] text-emerald-400">
                          ✓ MATCH
                        </span>
                      )}
                  </div>

                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className={`w-full h-11 px-3 bg-[#0b0f12] border ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-white/10"
                    } focus:border-sky-400 outline-none text-sm`}
                    {...register("confirmPassword", {
                      required: "Please confirm password",

                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                  />

                  {/* ERROR */}
                  {errors.confirmPassword && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex gap-2 p-3 bg-[#101417] border border-white/10">
                <span className="text-sky-400">✓</span>

                <p className="text-xs text-gray-400 leading-relaxed">
                  By registering, you acknowledge compliance with Anugrah
                  Enterprise infrastructure access controls, field telematics
                  protocol, and CGWA aquifer conservation standards.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-sky-500 hover:bg-sky-400 disabled:opacity-60 text-black font-bold tracking-wider text-sm transition"
              >
                {isSubmitting
                  ? "INITIALIZING CREDENTIALS..."
                  : "CREATE ACCOUNT →"}
              </button>
              
              {unverifiedEmail && (
                <div className="mt-4 p-4 bg-[#101417] border border-yellow-400/20 text-center">
                  <p className="text-sm text-gray-400">
                    Your email is already registered but not verified.
                  </p>

                  <button
                    type="button"
                    onClick={resendVerification}
                    className="mt-2 text-sm text-sky-400 hover:text-sky-300 font-semibold underline underline-offset-4"
                  >
                    Resend Verification Email →
                  </button>
                </div>
              )}
            </form>

            {/* Sign in */}
            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
              <span className="text-sm text-gray-400">
                Already have an account?
              </span>

              <a
                href="/"
                className="text-sm text-sky-400 hover:text-sky-300 font-semibold underline underline-offset-4"
              >
                Sign in →
              </a>
            </div>

            {/* Footer */}
            <div className="mt-5 pt-4 border-t border-dashed border-white/10 flex justify-between text-[9px] tracking-wider text-gray-600">
              <span>ANUGRAH ENTERPRISE CIVIL NET</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
