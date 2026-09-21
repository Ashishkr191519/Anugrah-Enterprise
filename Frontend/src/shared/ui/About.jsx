import React from "react";
import { useNavigate } from "react-router";

const AboutPage = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-700 py-20">
      {/* Leadership */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Image */}
            <div className="md:col-span-5">
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <img
                  src="/image5.png"
                  alt="Founder of Anugrah Enterprise"
                  className="w-full h-90 object-cover"
                />
              </div>

              <div className="mt-3 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <h3 className="font-semibold text-slate-900">Anugrah Singh</h3>
                <p className="text-xs text-slate-500">
                  Founder & Proprietor • Anugrah Enterprise
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-7">
              {/* <p className="text-xs font-mono tracking-widest text-sky-600 mb-2">
                LEADERSHIP PROFILE
              </p> */}

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Experience You Can Trust
              </h2>

              <p className="text-sm sm:text-base leading-relaxed mb-4">
                Anugrah Enterprise is built on experience, professionalism, and
                a commitment to delivering dependable solutions in water
                conservation and civil construction.
              </p>

              <p className="text-sm sm:text-base leading-relaxed mb-5">
                Our focus is on quality workmanship, transparent communication,
                and practical solutions that create lasting value for every
                client.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-sky-500 italic text-sm">
                “Our vision is to deliver reliable infrastructure while creating
                sustainable solutions for a better tomorrow.”
                <span className="block not-italic text-xs text-slate-500 mt-2">
                  — Anugrah Singh, Founder & Proprietor
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1.5 bg-slate-100 rounded-md">
                  Borewell Recharge
                </span>
                <span className="px-3 py-1.5 bg-slate-100 rounded-md">
                  Rainwater Harvesting
                </span>
                <span className="px-3 py-1.5 bg-slate-100 rounded-md">
                  Civil Construction
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <p className="text-xs font-mono tracking-widest text-emerald-600">
            STANDARDS & INTEGRITY
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            Our Quality Commitment
          </h2>

          <p className="text-sm text-slate-500 mt-2">
            Professional service with a focus on quality, transparency and
            sustainable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">
              Quality Workmanship
            </h3>
            <p className="text-sm leading-relaxed">
              We focus on reliable materials, careful execution and quality
              workmanship across every project.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">
              Transparent Execution
            </h3>
            <p className="text-sm leading-relaxed">
              Clear communication and straightforward project execution from
              planning to completion.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">
              Sustainable Responsibility
            </h3>
            <p className="text-sm leading-relaxed">
              Solutions designed with water conservation and long-term
              environmental responsibility in mind.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 py-8 pb-12">
        <div className="bg-[#0f172a] rounded-2xl p-7 sm:p-9 text-white flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-xs font-mono text-emerald-400 mb-2">
              BUILDING TOMORROW
            </p>

            <h2 className="text-2xl font-bold">
              Let’s Build a Sustainable Tomorrow
            </h2>

            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              Explore our water conservation and civil construction services for
              your upcoming project.
            </p>
          </div>

          <button onClick={() => navigate("/home/services")} className="shrink-0 px-5 py-3 rounded-lg bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition">
            Explore Our Services →
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
