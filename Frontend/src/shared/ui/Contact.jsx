import React from "react";
import { NavLink } from "react-router";

const ContactPage = () => {
  return (
    <main className="relative z-10 min-h-screen bg-[#f7fafd] px-4 py-22 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded bg-emerald-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Contact Anugrah Enterprise
          </div>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Let’s Talk About Your Project
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Have a project in mind or need professional guidance? Get in touch
            with Anugrah Enterprise and discuss your requirements with us.
          </p>
        </div>

        {/* Contact + Company */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5">
              <p className="text-xs font-mono font-semibold uppercase tracking-widest text-sky-600">
                Direct Channels
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-900">
                Contact Information
              </h2>
            </div>

            <div className="space-y-3">
              {/* Phone */}
              <div className="flex gap-3 rounded-lg bg-slate-50 p-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                  ☎
                </div>

                <div>
                  <p className="text-xs uppercase text-slate-400">Phone</p>

                  <p className="text-sm font-semibold text-slate-800">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 rounded-lg bg-slate-50 p-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                  @
                </div>

                <div>
                  <p className="text-xs uppercase text-slate-400">Email</p>

                  <p className="text-sm font-semibold text-slate-800">
                    info@anugrahenterprise.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-3 rounded-lg bg-slate-50 p-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  📍
                </div>

                <div>
                  <p className="text-xs uppercase text-slate-400">Location</p>

                  <p className="text-sm font-semibold text-slate-800">
                    Navi Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-3 rounded-lg bg-slate-50 p-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                  ◷
                </div>

                <div>
                  <p className="text-xs uppercase text-slate-400">
                    Business Hours
                  </p>

                  <p className="text-sm font-semibold text-slate-800">
                    Monday – Saturday
                  </p>

                  <p className="text-xs text-slate-500">9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="mb-2 inline-block rounded bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-600">
              WATER CONSERVATION • CIVIL CONSTRUCTION
            </p>

            <h2 className="text-2xl font-bold text-slate-900">
              Anugrah Enterprise
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              We provide practical and reliable solutions for water
              conservation, groundwater recharge, and civil construction, with a
              focus on quality workmanship and professional execution.
            </p>

            <div className="mt-6">
              <p className="mb-3 text-xs font-mono uppercase tracking-wider text-slate-400">
                Our Services
              </p>

              <div className="grid grid-cols-2 gap-2">
                <span className="rounded-lg bg-slate-50 p-2.5 text-xs font-medium text-slate-700">
                  💧 Rainwater Harvesting
                </span>

                <span className="rounded-lg bg-slate-50 p-2.5 text-xs font-medium text-slate-700">
                  Borewell Recharge
                </span>

                <span className="rounded-lg bg-slate-50 p-2.5 text-xs font-medium text-slate-700">
                  Civil Construction
                </span>

                <span className="rounded-lg bg-slate-50 p-2.5 text-xs font-medium text-slate-700">
                  Structural Works
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-5 rounded-2xl bg-[#0f172a] p-6 text-white shadow-md sm:p-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="mb-2 text-xs font-mono font-medium uppercase tracking-wider text-emerald-400">
                Project Dispatch
              </p>

              <h2 className="text-2xl font-bold tracking-tight">
                Need a Service?
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Tell us what you need and submit your service request. Our team
                can review your requirements and get back to you.
              </p>
            </div>

            <div className="shrink-0">
              <NavLink
                to="/home/services"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Request a Service
                <span>→</span>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 rounded-lg bg-white p-3 text-xs font-medium text-slate-600 shadow-sm">
          <span>
            <span className="text-emerald-500">✓</span> Professional Execution
          </span>

          <span>
            <span className="text-emerald-500">✓</span> Transparent
            Communication
          </span>

          <span>
            <span className="text-emerald-500">✓</span> Sustainable Solutions
          </span>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
