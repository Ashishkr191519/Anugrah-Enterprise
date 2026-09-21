import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";
import axiosInstance from "../../../../config/axiosInstace";
import { toast } from "react-toastify";

const ResetPassword = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  console.log("Reset Token:", token);
  const newPassword = watch("newPassword");
  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/auth/reset-password", {
        token,
        newPassword: data.newPassword,
      });

      toast.success("Password reset successful!");

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to reset password");
    }
  };

  return (
    <div className="min-h-screen bg-[#f7fafd] flex items-center justify-center p-4 lg:p-10">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT PANEL */}
        <div className="lg:col-span-5 bg-[#171c1f] text-white p-6 lg:p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[32px_32px]" />

          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded flex items-center justify-center">
                <span className="text-[#171c1f] font-bold">A</span>
              </div>

              <div>
                <h2 className="font-semibold tracking-tight">ANUGRAH</h2>

                <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                  Civil & Hydrological Ops
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 mt-10 bg-white/10 rounded text-[10px] tracking-wider text-gray-300 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
              NODE // AE-SEC-RESET-04
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-snug">
                Secured Portal Access & Engineering Management.
              </h2>

              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                Industrial-grade sub-surface telemetry, hydraulic aquifer
                recovery metrics, and institutional contract verification hub.
              </p>
            </div>
          </div>

          <div className="relative z-10 my-8 bg-white/5 rounded p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                Stratum Recovery Telemetry
              </span>

              <span className="text-[10px] text-blue-300">SYS: OPTIMAL</span>
            </div>

            <div className="mt-3 space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">PERCOLATION COEFF</span>

                <span>0.842 m/day</span>
              </div>

              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-[78%] bg-blue-200" />
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-gray-400">PIEZOMETRIC DATUM</span>

                <span>BGL -18.4 m</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-gray-300">
              <span>✓</span>
              256-BIT SSL • ISO 9001:2015 • CGWA CERTIFIED
            </div>

            <p className="mt-2 text-[10px] text-gray-500 leading-relaxed">
              Internal operations protocol strictly audited. All access attempts
              logged with hardware signatures.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="lg:col-span-7 p-6 lg:p-10 flex flex-col">
          <div>
            <div className="flex items-center gap-2 text-blue-700 text-[10px] uppercase tracking-wider font-medium">
              <span>🔒</span>
              SECURITY PROTOCOL // SPEC: AE-SEC-RESET
            </div>

            <h1 className="text-4xl font-semibold text-[#181c1e] mt-2 tracking-tight">
              Reset Password
            </h1>

            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              Enter your updated master authentication passphrase to regain
              access to your Anugrah Enterprise infrastructure console.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            {/* NEW PASSWORD */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-medium uppercase tracking-wide">
                  New Credential Passphrase
                </label>

                <span className="text-[10px] text-gray-400 uppercase">
                  Strength: Empty
                </span>
              </div>

              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  🔒
                </span>

                <input
                  type="password"
                  placeholder="Enter secure new passphrase"
                  className="w-full bg-[#f1f4f7] text-sm pl-10 pr-4 py-3 rounded outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                  {...register("newPassword", {
                    required: "New password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
              </div>

              {errors.newPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.newPassword.message}
                </p>
              )}

              {/* STRENGTH UI */}
              <div className="grid grid-cols-4 gap-1.5 mt-2">
                <div className="h-1 bg-gray-200 rounded-full" />
                <div className="h-1 bg-gray-200 rounded-full" />
                <div className="h-1 bg-gray-200 rounded-full" />
                <div className="h-1 bg-gray-200 rounded-full" />
              </div>

              <div className="grid grid-cols-2 gap-2 mt-2 text-[10px] text-gray-500">
                <span>○ Min. 8 characters</span>
                <span>○ Mixed case (Aa)</span>
                <span>○ At least 1 number</span>
                <span>○ Special character (#/$)</span>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="text-xs font-medium uppercase tracking-wide">
                Confirm New Passphrase
              </label>

              <div className="relative mt-2">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  🔒
                </span>

                <input
                  type="password"
                  placeholder="Re-enter your new passphrase"
                  className="w-full bg-[#f1f4f7] text-sm pl-10 pr-4 py-3 rounded outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === newPassword || "Passwords do not match",
                  })}
                />
              </div>

              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}

              <div className="flex items-center gap-1 mt-2 text-[10px] text-gray-500">
                <span>ⓘ</span>
                Must match the new passphrase specified above.
              </div>
            </div>

            {/* SECURITY ADVISORY */}
            <div className="bg-[#f1f4f7] p-4 rounded flex items-start gap-3">
              <span className="text-blue-700 text-xl">🛡</span>

              <div>
                <h3 className="text-sm font-semibold">
                  Institutional Compliance Advisory
                </h3>

                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Once re-established, this credential terminates all concurrent
                  active telemetry connections and mobile field auditing tokens
                  for security hygiene.
                </p>
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded font-semibold text-sm flex items-center justify-center gap-2 hover:bg-gray-800 transition"
            >
              Commit New Credentials
              <span>→</span>
            </button>
          </form>

          {/* BOTTOM */}
          <div className="mt-8 pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] uppercase tracking-wider text-gray-500">
            <button
              type="button"
              className="text-blue-700 font-semibold hover:text-black transition"
            >
              ← Return to Portal Login
            </button>

            <span>☎ Helpline: +91 (020) 2548-9100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
