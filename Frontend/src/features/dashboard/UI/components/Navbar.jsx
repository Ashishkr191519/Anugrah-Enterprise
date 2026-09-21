import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { UserRound } from "lucide-react";
import axiosInstance from "../../../../config/axiosInstace";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigation = useNavigate()
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const isServicesPage = location.pathname === "/home/services";
  const navLinkClass = ({ isActive }) =>
    `flex h-full items-center ${
      isActive
        ? "border-b-2 border-black font-semibold text-black"
        : "text-[#44474a] transition-colors hover:text-black"
    }`;
  const handleLogout = async () => {
    try {
      await axiosInstance.post("/auth/logout");
      window.location.href = "/";
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#c4c7ca] bg-white/95 backdrop-blur-md shadow-[0_1px_2px_rgba(18,23,26,0.05)]">
      <div className="mx-auto flex h-20 max-w-360 items-center justify-between gap-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-black text-white">
            <img
              className="material-symbols-outlined"
              src="/anugrah_enterprise_logo.png"
              alt=""
            />
          </div>

          <div className="flex flex-col">
            <button onClick={() => navigation("/home")} className="font-['Space_Grotesk'] text-[18px] font-semibold tracking-tight">
              ANUGRAH ENTERPRISE
            </button>

            {/* <span className="font-['JetBrains_Mono'] text-[10px] font-medium uppercase tracking-widest text-[#44474a]">
              Water Conservation
            </span> */}
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden h-full items-center gap-6 lg:flex">
          {/* Home */}
          <NavLink to="/home" end className={navLinkClass}>
            Home
          </NavLink>

          {/* Services */}

          <NavLink to="/home/services" className={navLinkClass}>
            Services
          </NavLink>

          {/* About */}
          <NavLink to="/home/about" className={navLinkClass}>
            About
          </NavLink>

          {/* Contact */}
          <NavLink to="/home/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Request Service */}
          <NavLink
            to="/home/services"
            className={`hidden items-center justify-center rounded-sm px-4 py-2.5 font-['JetBrains_Mono'] text-[12px] font-medium uppercase tracking-wider sm:inline-flex ${
              isServicesPage
                ? "cursor-not-allowed bg-gray-300 text-gray-500"
                : "bg-black text-white hover:bg-[#386380]"
            }`}
            onClick={(e) => {
              if (isServicesPage) {
                e.preventDefault();
              }
            }}
          >
            REQUEST A SERVICE
          </NavLink>

          {/* User */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen((prev) => !prev)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white hover:bg-[#386380]"
            >
              <UserRound size={18} />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 top-11 w-48 rounded-md border border-gray-200 bg-white p-2 shadow-lg">
                {/* <button className="w-full rounded px-3 py-2 text-left text-sm hover:bg-gray-100">
                  Profile
                </button> */}

                <NavLink
                  to="/home/my-request"
                  onClick={() => setIsProfileOpen(false)}
                  className="block w-full rounded px-3 py-2 text-left text-sm hover:bg-gray-100"
                >
                  My Requests
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="w-full rounded px-3 py-2 text-left text-sm hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
