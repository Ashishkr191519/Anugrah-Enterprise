import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router";
import { ServiceStore } from "../../../services/state/ServiceContext";
import { useRequestHook } from "../../hooks/useRequestHook";

const Request = () => {
  let { register, handleSubmit, errors, onRequestSubmit, selectedService } =
    useRequestHook();

  return (
    <div className="min-h-screen bg-[#f7fafd] text-[#101417]">
      {/* Technical Background Grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-70"
        style={{
          backgroundSize: "32px 32px",
          backgroundImage: `
            linear-gradient(to right, rgba(16,20,23,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16,20,23,0.035) 1px, transparent 1px)
          `,
        }}
      />

      <main className="relative z-10 mx-auto w-full max-w-5xl px-4 pt-28 pb-12 sm:px-6 md:pt-32 lg:px-8">
        {/* ================= HEADER ================= */}

        <section className="mb-10 text-center">
          {/* Small Technical Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded border border-slate-200 bg-white/70 px-3 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-500" />

            <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-slate-500 sm:text-xs">
              PROJECT ENQUIRY
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-['Space_Grotesk'] text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-[52px]">
            Request a Service
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
            Tell us what you need and our team will get in touch with you.
          </p>

          {/* Technical Divider */}
          <div className="mt-6 flex items-center justify-center gap-3 text-slate-300">
            <span className="h-px w-12 bg-current" />

            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 2v20M2 12h20" />
              <circle cx="12" cy="12" r="3" />
            </svg>

            <span className="h-px w-12 bg-current" />
          </div>
        </section>

        {/* ================= FORM CARD ================= */}

        <section className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_-5px_rgba(16,20,23,0.07)] sm:p-8 md:p-12">
          {/* Top Accent */}
          <div className="absolute left-0 right-0 top-0 h-0.75 bg-linear-to-r from-sky-500 via-slate-800 to-emerald-500" />

          {/* Section Label */}
          {/* <div className="absolute right-5 top-4 hidden font-mono text-[10px] uppercase tracking-widest text-slate-300 sm:block">
            SEC.01 // CLIENT_ENTRY
          </div> */}

          <form onSubmit={handleSubmit(onRequestSubmit)} className="space-y-6">
            {/* ================= BASIC DETAILS ================= */}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* NAME */}
              <div>
                <label className="mb-2 flex items-center justify-between font-mono text-xs font-semibold uppercase tracking-wider text-slate-600">
                  <span>
                    Full Name <span className="text-sky-500">*</span>
                  </span>

                  <span className="hidden text-[10px] font-normal normal-case tracking-normal text-slate-400 sm:block">
                    e.g. Anugrah Singh
                  </span>
                </label>

                <div className="relative">
                  <UserIcon />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    {...register("name", {
                      required: "Full name is required",
                    })}
                    className="request-input pl-10"
                  />
                </div>

                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* PHONE */}
              <div>
                <label className="mb-2 flex items-center justify-between font-mono text-xs font-semibold uppercase tracking-wider text-slate-600">
                  <span>
                    Phone Number <span className="text-sky-500">*</span>
                  </span>

                  <span className="hidden text-[10px] font-normal normal-case tracking-normal text-slate-400 sm:block">
                    with country code
                  </span>
                </label>

                <div className="relative">
                  <PhoneIcon />

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter a valid 10 digit phone number",
                      },
                    })}
                    className="request-input pl-10"
                  />
                </div>

                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 flex items-center justify-between font-mono text-xs font-semibold uppercase tracking-wider text-slate-600">
                  <span>
                    Email Address <span className="text-sky-500">*</span>
                  </span>

                  <span className="hidden text-[10px] font-normal normal-case tracking-normal text-slate-400 sm:block">
                    corporate or personal
                  </span>
                </label>

                <div className="relative">
                  <EmailIcon />

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    {...register("email", {
                      required: "Email is required",
                    })}
                    className="request-input pl-10"
                  />
                </div>

                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* SERVICE */}
              <div>
                <label className="mb-2 flex items-center justify-between font-mono text-xs font-semibold uppercase tracking-wider text-slate-600">
                  <span>
                    Service <span className="text-sky-500">*</span>
                  </span>

                  <span className="hidden text-[10px] font-normal normal-case tracking-normal text-slate-400 sm:block">
                    choose discipline
                  </span>
                </label>

                <div className="relative">
                  <ServiceIcon />

                  <div className="request-input flex items-center pl-10">
                    {selectedService?.title || "Loading service..."}
                  </div>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400">
                    {/* <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg> */}
                  </div>
                </div>

                {errors.service && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.service.message}
                  </p>
                )}
              </div>
            </div>

            {/* ================= ADDRESS ================= */}

            <div>
              <label className="mb-2 flex items-center justify-between font-mono text-xs font-semibold uppercase tracking-wider text-slate-600">
                <span>
                  Address / Site Location{" "}
                  <span className="text-sky-500">*</span>
                </span>

                <span className="hidden text-[10px] font-normal normal-case tracking-normal text-slate-400 sm:block">
                  plot, industrial area, city, pin code
                </span>
              </label>

              <div className="relative">
                <LocationIcon />

                <textarea
                  rows="2"
                  placeholder="Enter your address"
                  {...register("address", {
                    required: "Address is required",
                  })}
                  className="request-input resize-y pl-10"
                />
              </div>

              {errors.address && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.address.message}
                </p>
              )}
            </div>

            {/* ================= DESCRIPTION ================= */}

            <div>
              <label className="mb-2 flex items-center justify-between font-mono text-xs font-semibold uppercase tracking-wider text-slate-600">
                <span>
                  Project Description & Requirements{" "}
                  <span className="text-sky-500">*</span>
                </span>

                <span className="hidden text-[10px] font-normal normal-case tracking-normal text-slate-400 sm:block">
                  catchment area size, depth, civil specs
                </span>
              </label>

              <div className="relative">
                <DescriptionIcon />

                <textarea
                  rows="5"
                  placeholder="Describe what you need..."
                  {...register("description", {
                    required: "Description is required",
                  })}
                  className="request-input resize-y pl-10"
                />
              </div>

              {errors.description && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.description.message}
                </p>
              )}

              <p className="mt-2 flex items-center gap-2 font-mono text-[11px] text-slate-400">
                <span className="text-emerald-500">✓</span>
                All project specifications and site parameters remain strictly
                confidential.
              </p>
            </div>

            {/* ================= SUBMIT AREA ================= */}

            <div className="flex flex-col gap-5 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
              {/* Response Information */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100">
                  <svg
                    className="h-4 w-4 text-sky-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-700">
                    Direct Engineering Review
                  </p>

                  <p className="font-mono text-[10px] text-slate-400">
                    Response turnaround within 24 operational hours
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#101417] px-8 py-3.5 font-['Space_Grotesk'] text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-slate-800 hover:shadow-xl active:scale-[0.99]"
              >
                <span>Submit Request</span>

                <svg
                  className="h-4 w-4 text-sky-400 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </form>
        </section>

        {/* ================= BOTTOM TEXT ================= */}

        <div className="mt-7 text-center">
          <p className="font-mono text-[10px] tracking-wide text-slate-400 sm:text-xs">
            Anugrah Enterprise • Water Conservation • Civil Construction •
            Sustainable Infrastructure
          </p>
        </div>
      </main>

      {/* ================= INPUT CSS ================= */}

      <style>{`

        .request-input {
          width: 100%;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          background: #f8fafc;
          padding-top: 12px;
          padding-bottom: 12px;
          padding-right: 16px;
          color: #0f172a;
          font-size: 14px;
          outline: none;
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03);
          transition: all 150ms ease;
        }

        .request-input::placeholder {
          color: #94a3b8;
        }

        .request-input:hover {
          border-color: #94a3b8;
        }

        .request-input:focus {
          border-color: #0ea5e9;
          box-shadow: 0 0 0 1px #0ea5e9;
        }

        @media (min-width: 640px) {
          .request-input {
            font-size: 15px;
          }
        }

      `}</style>
    </div>
  );
};

/* =====================================================
   ICONS
===================================================== */

const Icon = ({ children }) => (
  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      {children}
    </svg>
  </div>
);

const UserIcon = () => (
  <Icon>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </Icon>
);

const PhoneIcon = () => (
  <Icon>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </Icon>
);

const EmailIcon = () => (
  <Icon>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </Icon>
);

const ServiceIcon = () => (
  <Icon>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  </Icon>
);

const LocationIcon = () => (
  <Icon>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </Icon>
);

const DescriptionIcon = () => (
  <Icon>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    />
  </Icon>
);

export default Request;
