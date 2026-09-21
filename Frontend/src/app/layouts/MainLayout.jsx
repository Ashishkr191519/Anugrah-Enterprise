import React from "react";
import { Outlet } from "react-router";
import { useServiceHook } from "../../features/services/hooks/useServiceHook";
import Navbar from "../../features/dashboard/UI/components/Navbar";
import ScrollToTop from "../../shared/ui/ScrollToTop";

const MainLayout = () => {
  useServiceHook();
  return (
    <div>
      <Navbar/>
      <ScrollToTop/>
      <Outlet />
    </div>
  );
};

export default MainLayout;
