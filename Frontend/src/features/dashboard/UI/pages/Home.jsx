import React from "react";
import { Link, NavLink } from "react-router";
import { BrickWall, Folder, Phone } from "lucide-react";
import { MoveRight, WavesHorizontal, Pickaxe } from "lucide-react";

import {
  trustPillars,
  approach,
  whyUs,
} from "../../../../shared/data/HomePageData";
import { useContext } from "react";
import { ServiceStore } from "../../../services/state/ServiceContext";

const Home = () => {
  const { services } = useContext(ServiceStore);

  return (
    <div className="min-h-screen bg-[#f7fafd] text-[#181c1e] font-['Hanken_Grotesk']">
      {/* ================= MAIN ================= */}

      <main className="min-h-screen bg-[#f7fafd] pt-20">
        {/* ================= HERO ================= */}

        <section className="relative w-full overflow-hidden bg-white">
          {/* Technical grid */}
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
                  linear-gradient(#dfe3e7 1px, transparent 1px),
                  linear-gradient(90deg, #dfe3e7 1px, transparent 1px)
                `,
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          <div className="relative mx-auto grid max-w-360 grid-cols-1 items-center gap-12 px-6 py-12 lg:grid-cols-12 lg:gap-16 lg:py-20">
            {/* LEFT */}

            <div className="flex flex-col items-start lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded bg-[#ebeef1] px-3 py-1.5 font-['JetBrains_Mono'] text-[10px] font-medium uppercase tracking-widest text-[#386380]">
                <span className="h-2 w-2 rounded-full bg-[#386380]" />

                <span>
                  WATER CONSERVATION • CIVIL CONSTRUCTION • INFRASTRUCTURE
                </span>
              </div>

              <h1 className="mt-6 max-w-2xl font-['Space_Grotesk'] text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[56px] lg:leading-16">
                Building Reliable Solutions for a Sustainable Future.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-7 text-[#44474a]">
                Anugrah Enterprise delivers practical solutions across water
                conservation, rainwater harvesting, borewell recharge and civil
                construction, with a focus on quality, reliability and long-term
                value.
              </p>

              {/* Buttons */}

              <div className="mt-8 flex w-full flex-wrap items-center gap-4 sm:w-auto">
                <Link
                  to="/home/services"
                  className="inline-flex items-center justify-center rounded bg-black px-6 py-3.5 font-['JetBrains_Mono'] text-[12px] font-medium uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#386380]"
                >
                  Explore Our Services
                  {/* <span className="material-symbols-outlined ml-2 text-base">
                    arrow_forward
                  </span> */}
                </Link>

              </div>

              {/* Technical indicators */}

              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-[#ebeef1] pt-6 font-['JetBrains_Mono'] text-[10px] uppercase text-[#44474a]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-[#386380]">
                    <WavesHorizontal />
                  </span>
                  Hydrological Precision
                </div>

                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-[#386380]">
                    <BrickWall />
                  </span>
                  Structural Integrity
                </div>

                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-[#386380]">
                    <Pickaxe />
                  </span>
                  Ecological Durability
                </div>
              </div>
            </div>

            {/* RIGHT - FOUNDER */}

            <div className="flex justify-center lg:col-span-5 lg:justify-end">
              <div className="relative w-full max-w-md">
                {/* Blueprint corners */}

                <div className="absolute -right-3 -top-3 h-24 w-24 border-r-2 border-t-2 border-[#386380]/30" />

                <div className="absolute -bottom-3 -left-3 h-24 w-24 border-b-2 border-l-2 border-[#386380]/30" />

                {/* Portrait */}

                <div className="relative overflow-hidden rounded-xl bg-[#f1f4f7] p-3 shadow-lg">
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-[#e0e3e6]">
                    <img
                      src="/image.png"
                      alt="Anugrah Singh - Founder and Proprietor"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  {/* Identity */}

                  <div className="mt-3 flex items-center justify-between rounded-lg bg-white p-4">
                    <div>
                      <p className="font-['Space_Grotesk'] text-lg font-bold leading-tight">
                        Anugrah Singh
                      </p>

                      <p className="mt-0.5 font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-[#386380]">
                        Founder & Proprietor
                      </p>

                      <p className="mt-1 text-sm text-[#44474a]">
                        Anugrah Enterprise
                      </p>
                    </div>

                    {/* <div className="flex h-10 w-10 items-center justify-center rounded bg-[#ebeef1]">
                      <span className="material-symbols-outlined">
                        verified_user
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TRUST ================= */}

        <section className="w-full bg-[#ebeef1] py-8">
          <div className="mx-auto max-w-360 px-6">
            <div className="pb-6">
              <span className="font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-widest text-[#386380]">
                FOUNDED ON DISCIPLINE
              </span>

              <h2 className="mt-1 font-['Space_Grotesk'] text-2xl font-bold">
                Built on Trust. Driven by Quality.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {trustPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex items-start gap-4 rounded bg-white p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#386380]/10 text-[#386380]">
                    <span className="material-symbols-outlined text-xl">
                      {pillar.icon}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-['Space_Grotesk'] text-base font-semibold">
                      {pillar.title}
                    </h3>

                    <p className="mt-1 text-[13px] leading-4.5 text-[#44474a]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHO WE ARE ================= */}

        <section className="w-full bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-360 grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16">
            {/* LEFT */}

            <div className="flex flex-col lg:col-span-5">
              <span className="font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-wider text-[#386380]">
                WHO WE ARE
              </span>

              <h2 className="mt-2 font-['Space_Grotesk'] text-3xl font-bold leading-tight lg:text-[40px]">
                Dedicated Civil & Groundwater Infrastructure.
              </h2>

              <p className="mt-6 text-lg leading-7 text-[#44474a]">
                Anugrah Enterprise is focused on delivering dependable solutions
                in water conservation, infrastructure and civil construction. We
                combine practical execution with a commitment to quality,
                responsible resource management and long-term results.
              </p>

              <div className="mt-8 rounded-lg bg-[#f1f4f7] p-6">
                <div className="flex items-center gap-3">
                  {/* <span className="material-symbols-outlined text-[#386380]">
                    water_ph
                  </span> */}

                  <span className="font-['Space_Grotesk'] text-base font-semibold">
                    Hydrological Stewardship
                  </span>
                </div>

                <p className="mt-2 text-[13px] leading-4.5 text-[#44474a]">
                  Every rainwater recharge installation is calibrated against
                  local geological stratification, ensuring runoff flows
                  efficiently back into sub-surface aquifers without siltation.
                </p>
              </div>
            </div>

            {/* RIGHT */}

            <div className="flex flex-col gap-4 lg:col-span-7">
              <div className="mb-2">
                <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-[#44474a]">
                  METHODOLOGY
                </span>

                <h3 className="mt-1 font-['Space_Grotesk'] text-[22px] font-bold">
                  Our Engineering Approach
                </h3>
              </div>

              {approach.map((item, index) => (
                <div
                  key={item.number}
                  className="flex flex-col items-start gap-5 rounded-lg bg-[#ebeef1] p-6 sm:flex-row"
                >
                  <div
                    className={`shrink-0 rounded px-3.5 py-2 font-['JetBrains_Mono'] text-xs font-bold ${
                      index === 1
                        ? "bg-[#386380] text-white"
                        : "bg-black text-white"
                    }`}
                  >
                    {item.number}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-['Space_Grotesk'] text-lg font-bold">
                        {item.title}
                      </h4>

                      <span className="rounded bg-[#e0e3e6] px-2 py-0.5 font-['JetBrains_Mono'] text-[10px] text-[#44474a]">
                        {item.label}
                      </span>
                    </div>

                    <p className="mt-2 text-[15px] leading-6 text-[#44474a]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHAT WE DO ================= */}

        <section className="w-full bg-[#f1f4f7] py-16 lg:py-24">
          <div className="mx-auto max-w-360 px-6">
            <div className="flex flex-col justify-between gap-6 pb-12 md:flex-row md:items-end">
              <div>
                <span className="font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-wider text-[#386380]">
                  WHAT WE DO
                </span>

                <h2 className="mt-2 font-['Space_Grotesk'] text-3xl font-bold lg:text-[40px]">
                  Core Engineering Services
                </h2>

                <p className="mt-2 max-w-xl text-lg text-[#44474a]">
                  Practical solutions for water, infrastructure and construction
                  needs.
                </p>
              </div>

              <Link
                to="/home/services"
                className="inline-flex items-center font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-wider text-[#386380]"
              >
                View All Services
                {/* <span className="material-symbols-outlined ml-1 text-base">
                  arrow_forward
                </span> */}
              </Link>
            </div>

            {/* Services */}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {services.slice(0, 4).map((service) => (
                <div
                  key={service._id}
                  className="group flex flex-col justify-between rounded-lg bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#74777a]">
                        {/* SERVICE // {service.number} */}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded bg-[#ebeef1] text-[#386380] transition-colors group-hover:bg-[#386380] group-hover:text-white">
                        <span className="material-symbols-outlined text-2xl">
                          <WavesHorizontal />
                        </span>
                      </div>
                    </div>

                    <h3 className="mt-6 font-['Space_Grotesk'] text-[22px] font-bold transition-colors group-hover:text-[#386380]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-6 text-[#44474a]">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-[#ebeef1] pt-4">
                    <Link
                      to="/home/services"
                      className="inline-flex items-center font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-wider transition-colors group-hover:text-[#386380]"
                    >
                      View Service
                      <span className="material-symbols-outlined ml-1.5 text-base transition-transform group-hover:translate-x-1">
                        <MoveRight />
                      </span>
                    </Link>

                    <span className="hidden font-['JetBrains_Mono'] text-[10px] text-[#74777a] sm:block">
                      {service.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <NavLink
                to="/home/services"
                className="inline-flex items-center justify-center rounded bg-black px-8 py-4 font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-white transition-all hover:bg-[#386380]"
              >
                View All Services →
              </NavLink>
            </div>
          </div>
        </section>

        {/* ================= WHY ANUGRAH ================= */}

        <section className="relative w-full overflow-hidden bg-[#171c1f] py-20 text-white lg:py-28">
          {/* Blueprint background */}

          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
                  linear-gradient(#808488 1px, transparent 1px),
                  linear-gradient(90deg, #808488 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-360 px-6">
            <div className="border-b border-white/10 pb-12">
              <div>
                <div className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-[#b2dcfe]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b2dcfe]" />
                  STANDARDS & INTEGRITY
                </div>

                <h2 className="mt-2 font-['Space_Grotesk'] text-3xl font-bold lg:text-[40px]">
                  WHY ANUGRAH ENTERPRISE
                </h2>

                <p className="mt-2 max-w-xl text-[15px] leading-6 text-[#808488]">
                  A disciplined engineering mindset grounded in verifiable
                  results, durable materials, and transparent operational
                  management.
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {whyUs.map((item) => (
                <div
                  key={item.number}
                  className="flex flex-col justify-between rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
                >
                  <div>
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded bg-[#b2dcfe]/10 text-[#b2dcfe]">
                      <span className="material-symbols-outlined text-2xl">
                        {item.icon}
                      </span>
                    </div>

                    <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-[#b2dcfe]">
                      PILLAR {item.number}
                    </span>

                    <h3 className="mt-2 font-['Space_Grotesk'] text-[22px] font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-6 text-[#808488]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 font-['JetBrains_Mono'] text-[10px] text-[#808488]">
                    <span>{item.tags[0]}</span>

                    <span>{item.tags[1]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FOUNDER ================= */}

        <section className="w-full bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-250 px-6">
            <div className="flex flex-col items-center gap-8 rounded-xl bg-[#f1f4f7] p-8 sm:p-12 md:flex-row">
              {/* Founder image */}

              <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full bg-[#e0e3e6] shadow-sm sm:h-36 sm:w-36">
                <img
                  src="/image5.png"
                  alt="Anugrah Singh - Founder and Proprietor"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Content */}

              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2 text-[#386380]">
                  {/* <span className="material-symbols-outlined text-2xl">
                    format_quote
                  </span> */}

                  <span className="font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-widest">
                    Leadership with Purpose
                  </span>
                </div>

                <p className="mt-3 font-['Space_Grotesk'] text-lg font-semibold leading-snug">
                  “Anugrah Enterprise is founded by Anugrah Singh, with a focus
                  on building dependable solutions and delivering work with
                  responsibility, quality and long-term value.”
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-[#e0e3e6] pt-4">
                  <div>
                    <p className="font-['Space_Grotesk'] text-base font-bold">
                      Anugrah Singh
                    </p>

                    <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-wider text-[#44474a]">
                      Founder & Proprietor • Anugrah Enterprise
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded bg-[#ebeef1] px-3 py-1 font-['JetBrains_Mono'] text-[10px] text-[#386380]">
                    {/* <span className="material-symbols-outlined text-sm">
                      handshake
                    </span> */}
                    Personal Commitment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}

        <section className="w-full bg-[#ebeef1] py-16 lg:py-24">
          <div className="mx-auto max-w-360 px-6">
            <div className="grid grid-cols-1 items-center gap-10 rounded-xl bg-white p-8 shadow-sm sm:p-14 lg:grid-cols-12 lg:p-16">
              <div className="flex flex-col items-start lg:col-span-8">
                <div className="inline-flex items-center rounded bg-[#ebeef1] px-3 py-1 font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-[#386380]">
                  GET IN TOUCH
                </div>

                <h2 className="mt-4 max-w-xl font-['Space_Grotesk'] text-3xl font-bold lg:text-[40px]">
                  Let’s Build a Better, More Sustainable Future.
                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-7 text-[#44474a]">
                  Have a project or water-conservation requirement? Tell us what
                  you need and our team can understand your requirement, assess
                  the site, and offer practical, long-lasting execution.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {/* <Link
                    to="/home/request-service"
                    className="inline-flex items-center justify-center rounded bg-black px-8 py-4 font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-white transition-all hover:bg-[#386380]"
                  >
                    Request a Service
                    <span className="material-symbols-outlined ml-2 text-base">
                      <MoveRight />
                    </span>
                  </Link> */}

                  <Link
                    to="/home/contact"
                    className="inline-flex items-center justify-center rounded bg-[#ebeef1] px-8 py-4 font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#181c1e]"
                  >
                    Contact Us
                    <span className="material-symbols-outlined ml-2 text-base">
                      <Phone />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Contact summary */}

              <div className="flex flex-col gap-4 rounded-lg bg-[#f1f4f7] p-6 lg:col-span-4">
                <h3 className="font-['Space_Grotesk'] text-base font-bold">
                  Direct Communication
                </h3>

                <p className="text-[13px] leading-4.5 text-[#44474a]">
                  Reach out directly with project requirements or civil and
                  water-conservation needs.
                </p>

                <div className="flex flex-col gap-3 text-[13px]">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg text-[#386380]">
                      <Phone />
                    </span>

                    <span>7061592255</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg text-[#386380]">
                      <Folder />
                    </span>
                    <span>ashishkumarpal7654@gmail.com</span>
                  </div>

                  {/* <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-lg text-[#386380]">
                      location_on
                    </span>

                    <span>Ranchi,Jharkhand</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}

      <footer className="w-full border-t border-[#c4c7ca] bg-[#f1f4f7] text-[#181c1e]">
        <div className="mx-auto max-w-360 px-6 pb-6 pt-10">
          <div className="grid grid-cols-1 gap-10 border-b border-[#c4c7ca] pb-10 md:grid-cols-12">
            {/* Company */}

            <div className="flex flex-col gap-2 md:col-span-5">
              <span className="font-['Space_Grotesk'] text-lg font-bold tracking-tight">
                ANUGRAH ENTERPRISE
              </span>

              <p className="text-[15px] text-[#44474a]">
                Water Conservation • Civil Construction • Sustainable
                Infrastructure
              </p>

              <p className="mt-1 max-w-md text-[13px] leading-4.5 text-[#44474a]">
                Engineered civil structures, stormwater harvesting
                infrastructure, and groundwater recharge solutions built for
                long-term ecological resilience.
              </p>
            </div>

            {/* Quick links */}

            <div className="flex flex-col gap-2 md:col-span-3">
              <h3 className="font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-wider">
                Quick Links
              </h3>

              <Link
                to="/home"
                className="text-sm text-[#44474a] hover:text-black"
              >
                Home
              </Link>

              <Link
                to="/home/services"
                className="text-sm text-[#44474a] hover:text-black"
              >
                Services
              </Link>

              <Link
                to="/home/about"
                className="text-sm text-[#44474a] hover:text-black"
              >
                About
              </Link>

              <Link
                to="/home/contact"
                className="text-sm text-[#44474a] hover:text-black"
              >
                Contact
              </Link>
            </div>

            {/* Contact */}

            <div className="flex flex-col gap-2 md:col-span-4">
              <h3 className="font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-wider">
                Contact & Operations
              </h3>

              <div className="flex flex-col gap-2 text-[13px] text-[#44474a]">
                <div>
                  <span className="mr-2 font-['JetBrains_Mono'] text-[10px] uppercase text-[#74777a]">
                    Phone:
                  </span>
                  Contact Number
                </div>

                <div>
                  <span className="mr-2 font-['JetBrains_Mono'] text-[10px] uppercase text-[#74777a]">
                    Email:
                  </span>
                  Email Address
                </div>

                <div>
                  <span className="mr-2 font-['JetBrains_Mono'] text-[10px] uppercase text-[#74777a]">
                    Address:
                  </span>
                  Business Address
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-2 pt-4 text-[13px] text-[#44474a] sm:flex-row">
            <p>
              © {new Date().getFullYear()} Anugrah Enterprise. All rights
              reserved.
            </p>

            <p className="font-['JetBrains_Mono'] text-[10px] text-[#74777a]">
              Water Conservation • Civil Construction
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
