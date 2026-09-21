import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { ServiceStore } from "../../state/ServiceContext";

const ServicesPage = () => {
  const { services } = useContext(ServiceStore);
  const navigate = useNavigate();

  // UI-only data.
  // Backend/database mein inki zarurat nahi hai.
  const serviceMeta = [
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      ),
      accent: "text-sky-700",
      bg: "bg-sky-50",
      standard: "Industrial & Institutional Runoff Systems",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m14 0a5 5 0 11-10 0 5 5 0 0110 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      ),
      accent: "text-emerald-700",
      bg: "bg-emerald-50",
      standard: "Deep Hydrogeological Shaft Infiltration",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      ),
      accent: "text-amber-700",
      bg: "bg-amber-50",
      standard: "Closed-Loop Facility Water Auditing",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      ),
      accent: "text-indigo-700",
      bg: "bg-indigo-50",
      standard: "Heavy Reinforced Concrete & Site Grading",
    },
  ];

  return (
    <>
      <main className="bg-[#f7fafd] text-[#12171a] antialiased">
        {/* =====================================================
            SERVICES HERO
        ====================================================== */}

        <section
          className="
            relative
            overflow-hidden
            border-b
            border-slate-200
            py-16
            sm:py-24
            bg-[#f7fafd]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(15, 23, 42, 0.04) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(15, 23, 42, 0.04) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "32px 32px",
          }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Technical label */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 rounded border border-slate-200 bg-slate-100 px-2.5 py-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />

                <span className="font-mono text-xs font-medium uppercase tracking-wider text-slate-700">
                  OUR SERVICES
                </span>
              </div>

              {/* <div className="font-mono text-xs text-slate-400">
                SPEC: AE-SVC-2025 // HYDRAULIC & STRUCTURAL
              </div> */}
            </div>

            {/* Hero heading */}
            <div className="max-w-4xl">
              <h1 className="font-display text-4xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Practical Infrastructure.
                <br />
                Sustainable Solutions.
              </h1>

              <p className="mt-6 max-w-3xl text-lg font-normal leading-relaxed text-slate-600 sm:text-xl">
                From water conservation systems to reliable civil construction,
                Anugrah Enterprise delivers practical solutions engineered
                around real site requirements.
              </p>
            </div>

            {/* Jump to service */}
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-8 font-mono text-xs text-slate-500">
              <div className="flex flex-wrap items-center gap-6">
                <span className="font-semibold tracking-wide text-slate-900">
                  JUMP TO SERVICE:
                </span>

                {services.map((service, index) => (
                  <React.Fragment key={service._id}>
                    <a
                      href={`#service-${service._id}`}
                      className="transition-colors hover:text-slate-950"
                    >
                      {String(index + 1).padStart(2, "0")} {service.title}
                    </a>

                    {index !== services.length - 1 && (
                      <span className="text-slate-300">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="h-3.5 w-3.5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>

                <span>FIELD-PROVEN ENGINEERING STANDARDS</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICE OVERVIEW
        ====================================================== */}

        <section className="border-b border-slate-200 bg-slate-50/60 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
              {/* Left */}
              <div className="lg:col-span-5">
                <span className="mb-2 block font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  WHAT WE DO
                </span>

                <h2 className="font-display text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
                  Solutions Built Around Real Requirements.
                </h2>
              </div>

              {/* Right */}
              <div className="lg:col-span-7">
                <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
                  Every project is approached with practical planning, quality
                  execution and long-term reliability. We bridge hydrogeological
                  science with disciplined civil works to deliver infrastructure
                  that performs under local environmental conditions.
                </p>

                {/* Engineering pillars */}
                <div className="mt-8 grid grid-cols-1 gap-4 border-t border-slate-200 pt-6 font-mono text-[11px] uppercase tracking-wider text-slate-600 sm:grid-cols-3">
                  {/* Pillar 1 */}
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 shrink-0 text-slate-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>

                    <span>Hydrogeological Precision</span>
                  </div>

                  {/* Pillar 2 */}
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 shrink-0 text-slate-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>

                    <span>Reinforced Structural Integrity</span>
                  </div>

                  {/* Pillar 3 */}
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 shrink-0 text-slate-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>

                    <span>Ecological Durability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MAIN SERVICES
        ====================================================== */}

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="mb-12 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  ENGINEERED CAPABILITIES
                </span>

                <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-slate-950">
                  Core Engineering Services
                </h2>
              </div>

              <span className="hidden font-mono text-xs text-slate-400 sm:block">
                FOUR SPECIALIZED CIVIL DIVISIONS
              </span>
            </div>

            {/* Dynamic services */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {services.map((service, index) => {
                const meta = serviceMeta[index % serviceMeta.length];

                return (
                  <article
                    key={service._id}
                    id={`service-${service._id}`}
                    className="
                      group
                      flex
                      scroll-mt-24
                      flex-col
                      justify-between
                      rounded-lg
                      border
                      border-slate-200
                      bg-slate-50
                      p-8
                      shadow-sm
                      transition-all
                      hover:border-slate-400
                      sm:p-10
                    "
                  >
                    <div>
                      {/* Card Header */}
                      <div className="flex items-center justify-between border-b border-slate-200/80 pb-6">
                        {/* <span className="font-mono text-xs font-medium tracking-wider text-slate-500">
                          SERVICE // {String(index + 1).padStart(2, "0")}
                        </span> */}

                        <div className="flex h-10 w-10 items-center justify-center rounded border border-slate-200 bg-white text-slate-700">
                          {meta.icon}
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="mt-6">
                        <span
                          className={`rounded px-2 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wider ${meta.accent} ${meta.bg}`}
                        >
                          {service.tag}
                        </span>

                        <h3 className="mt-3 font-display text-2xl font-bold text-slate-950">
                          {service.title}
                        </h3>

                        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                          {service.description}
                        </p>
                      </div>

                      {/* Standard */}
                      <div className="mt-6 border-t border-dashed border-slate-200 pt-4">
                        <span className="font-mono text-xs text-slate-400">
                          STANDARD: {meta.standard}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="mt-8 flex items-center justify-between border-t border-transparent pt-4">
                      <NavLink
                        to={`/home/request?service=${service._id}`}
                        className="
                          group/btn
                          inline-flex
                          items-center
                          justify-center
                          rounded
                          bg-slate-950
                          px-4
                          py-2.5
                          font-mono
                          text-xs
                          font-semibold
                          uppercase
                          tracking-wider
                          text-white
                          shadow-sm
                          transition-colors
                          hover:bg-slate-800
                        "
                      >
                        <span>REQUEST THIS SERVICE</span>

                        <svg
                          className="ml-2 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </NavLink>

                      <span className="font-mono text-[11px] text-slate-400">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {String(services.length).padStart(2, "0")}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Empty state */}
            {services.length === 0 && (
              <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
                <p className="font-display text-lg font-semibold text-slate-800">
                  No services available.
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Services will appear here once they are added.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            APPROACH / METHODOLOGY
        ====================================================== */}

        <section className="border-y border-slate-200 bg-slate-100/70 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 max-w-2xl">
              <span className="mb-2 block font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                HOW WE WORK
              </span>

              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950">
                A Disciplined Engineering Workflow
              </h2>

              <p className="mt-3 text-base text-slate-600">
                Every installation follows an established procedural blueprint
                ensuring long-term hydrogeological functionality and civil
                resilience.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Step 01 */}
              <div className="relative rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-slate-950 font-mono text-xs font-bold text-white">
                    01
                  </span>

                  <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-600">
                    Assessment
                  </span>
                </div>

                <h3 className="mb-2 font-display text-lg font-bold text-slate-950">
                  Understand
                </h3>

                <div className="mb-3 font-mono text-xs uppercase text-sky-600">
                  Site & Hydrology Audit
                </div>

                <p className="text-sm leading-relaxed text-slate-600">
                  Understand the site, catchment topography, soil permeability,
                  local aquifer levels, and practical structural constraints
                  before drafting specifications.
                </p>
              </div>

              {/* Step 02 */}
              <div className="relative rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-slate-950 font-mono text-xs font-bold text-white">
                    02
                  </span>

                  <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-600">
                    Precision
                  </span>
                </div>

                <h3 className="mb-2 font-display text-lg font-bold text-slate-950">
                  Execute
                </h3>

                <div className="mb-3 font-mono text-xs uppercase text-emerald-600">
                  Precision Civil Works
                </div>

                <p className="text-sm leading-relaxed text-slate-600">
                  Plan and execute with industrial-grade materials, certified
                  concrete mixes, calibrated silt interceptors, and strict
                  on-site supervisor oversight.
                </p>
              </div>

              {/* Step 03 */}
              <div className="relative rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-slate-950 font-mono text-xs font-bold text-white">
                    03
                  </span>

                  <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-600">
                    Durability
                  </span>
                </div>

                <h3 className="mb-2 font-display text-lg font-bold text-slate-950">
                  Deliver
                </h3>

                <div className="mb-3 font-mono text-xs uppercase text-indigo-600">
                  Commission & Stewardship
                </div>

                <p className="text-sm leading-relaxed text-slate-600">
                  Deliver reliable, functional solutions designed for long-term
                  use with comprehensive handover documentation and zero
                  maintenance overhead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY US
        ====================================================== */}

        <section
          className="border-b border-slate-200 bg-[#171c1f]  py-24"
          style={{
            backgroundImage: `

        linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),

        linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,

            backgroundSize: "50px 50px",
          }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-16 flex flex-col justify-between border-b border-slate-200 pb-6 md:flex-row md:items-end">
              <div>
                <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-slate-500">
                  • STANDARDS & INTEGRITY
                </span>

                <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
                  Built on Practical Experience.
                </h2>

                <p className="mt-3 max-w-2xl text-base text-white">
                  A disciplined engineering mindset grounded in verifiable
                  results, durable materials, and transparent operational
                  management.
                </p>
              </div>

              <div className="mt-4 font-mono text-xs text-slate-400 md:mt-0">
                SPEC: AE-INFRA-2025 // HEAVY CIVIL & RECHARGE
              </div>
            </div>

            {/* Three pillars */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Experience */}
              <div className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-8">
                <div>
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded border border-slate-200 bg-slate-50 text-slate-700">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </div>

                  <span className="mb-1 block font-mono text-xs uppercase tracking-widest text-slate-400">
                    PILLAR 01
                  </span>

                  <h3 className="mb-4 font-display text-xl font-bold text-slate-950">
                    EXPERIENCE
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600">
                    Practical understanding of water conservation and civil
                    infrastructure requirements. Seasoned execution across
                    diverse geological strata and site conditions.
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                  <span>SITE GEOLOGY</span>
                  <span>SURFACE DRAINAGE</span>
                </div>
              </div>

              {/* Quality */}
              <div className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-8">
                <div>
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded border border-slate-200 bg-slate-50 text-slate-700">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </div>

                  <span className="mb-1 block font-mono text-xs uppercase tracking-widest text-slate-400">
                    PILLAR 02
                  </span>

                  <h3 className="mb-4 font-display text-xl font-bold text-slate-950">
                    QUALITY
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600">
                    Attention to materials, workmanship, and execution
                    standards. Strict insistence on certified aggregates,
                    corrosion-resistant plumbing, and reinforced concrete.
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                  <span>MATERIALS TESTING</span>
                  <span>DURABLE JOINERY</span>
                </div>
              </div>

              {/* Reliability */}
              <div className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-8">
                <div>
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded border border-slate-200 bg-slate-50 text-slate-700">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </div>

                  <span className="mb-1 block font-mono text-xs uppercase tracking-widest text-slate-400">
                    PILLAR 03
                  </span>

                  <h3 className="mb-4 font-display text-xl font-bold text-slate-950">
                    RELIABILITY
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600">
                    Clear communication, responsible execution, and dependable
                    project delivery. Realistic milestones, straightforward
                    technical guidance, and committed post-handover support.
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                  <span>TRANSPARENT SCHEDULE</span>
                  <span>ON-SITE ACCOUNTABILITY</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            REQUEST SERVICE CTA
        ====================================================== */}

        <section id="request-service" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12 lg:p-14">
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                {/* Left */}
                <div className="lg:col-span-7">
                  <span className="mb-2 block font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                    GET IN TOUCH
                  </span>

                  <h2 className="font-display text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                    Have a Project in Mind?
                  </h2>

                  <p className="mt-4 max-w-xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
                    Tell us what you need. Our team can understand your
                    requirements, assess your site, and discuss the right
                    solution for your infrastructure.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <NavLink
                      to="/home/request"
                      className="inline-flex items-center rounded bg-slate-950 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-slate-800"
                    >
                      <span>Request a Service</span>

                      <svg
                        className="ml-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </NavLink>

                    <a
                      href="tel:+912228479100"
                      className="inline-flex items-center rounded border border-slate-300 px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-slate-800 transition-colors hover:bg-slate-50"
                    >
                      <svg
                        className="mr-2 h-4 w-4 text-slate-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                        />
                      </svg>

                      <span>Talk to Our Engineers</span>
                    </a>
                  </div>
                </div>

                {/* Right */}
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:col-span-5">
                  <h3 className="mb-2 font-display text-base font-bold uppercase tracking-tight text-slate-900">
                    Direct Communication
                  </h3>

                  <p className="mb-6 font-mono text-xs text-slate-500">
                    Reach out directly with project site coordinates, catchment
                    specifications, or civil tender requirements.
                  </p>

                  <div className="space-y-4 font-mono text-xs text-slate-700">
                    <div className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                        />
                      </svg>

                      <span>+91 (0) 22 2847 9100</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                        />
                      </svg>

                      <span className="break-all">
                        operations@anugrahenterprise.com
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                        />

                        <path
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                        />
                      </svg>

                      <span>
                        Plot 42, Heavy Industrial Area, Phase II, Civil Lines,
                        Navi Mumbai, MH 400705
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-slate-200 bg-white pb-12 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 border-b border-slate-200 pb-12 md:grid-cols-12">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded border border-slate-300 bg-slate-50 font-display text-sm font-bold">
                  AE
                </div>

                <span className="font-display text-base font-bold uppercase tracking-tight text-slate-950">
                  Anugrah Enterprise
                </span>
              </div>

              <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                Water Conservation • Civil Construction • Sustainable
                Infrastructure
              </p>

              <p className="max-w-sm text-sm leading-relaxed text-slate-600">
                Engineered civil structures, stormwater harvesting
                infrastructure, and geotechnical groundwater recharge solutions
                built for long-term ecological resilience.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <span className="mb-4 block font-mono text-xs font-semibold uppercase tracking-widest text-slate-400">
                Quick Links
              </span>

              <ul className="space-y-2.5 text-sm font-medium text-slate-600">
                <li>
                  <NavLink
                    to="/home"
                    className="transition-colors hover:text-slate-950"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/home/services"
                    className="font-semibold text-slate-950"
                  >
                    Services
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/home/about"
                    className="transition-colors hover:text-slate-950"
                  >
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/home/contact"
                    className="transition-colors hover:text-slate-950"
                  >
                    Contact
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/home/request"
                    className="transition-colors hover:text-slate-950"
                  >
                    Request a Service
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-4">
              <span className="mb-4 block font-mono text-xs font-semibold uppercase tracking-widest text-slate-400">
                Contact & Operations
              </span>

              <div className="space-y-2 font-mono text-xs text-slate-600">
                <div className="flex">
                  <span className="w-16 uppercase text-slate-400">PHONE:</span>

                  <span className="text-slate-800">+91 (0) 22 2847 9100</span>
                </div>

                <div className="flex">
                  <span className="w-16 uppercase text-slate-400">EMAIL:</span>

                  <a
                    href="mailto:operations@anugrahenterprise.com"
                    className="text-slate-800 hover:underline"
                  >
                    operations@anugrahenterprise.com
                  </a>
                </div>

                <div className="flex">
                  <span className="w-16 uppercase text-slate-400">
                    ADDRESS:
                  </span>

                  <span className="text-slate-800">
                    Plot 42, Heavy Industrial Area, Phase II, Civil Lines, Navi
                    Mumbai, MH 400705
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs font-mono text-slate-500 sm:flex-row">
            <div>© 2025 Anugrah Enterprise. All rights reserved.</div>

            <div>
              Compliant with state hydrological and industrial civil safety
              codes.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ServicesPage;
