import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../app/layouts/AuthLayout";
import Login from "../features/auth/ui/pages/Login";
import Register from "../features/auth/ui/pages/Register";
import MainLayout from "../app/layouts/MainLayout";
import Home from "../features/dashboard/UI/pages/Home";
import PublicRoute from "./ProtectedRoute/PublicRoute";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { useDispatch } from "react-redux";
import { getMe } from "../features/auth/state/authAction";
import ServicePage from "../features/services/ui/Pages/ServicePage";
import Request from "../features/requests/ui/pages/Request";
import About from "../shared/ui/About";
import Contact from "../shared/ui/Contact";
import MyRequest from "../shared/ui/MyRequest";
import ForgetPassword from "../features/auth/ui/pages/ForgetPassword";
import ResetPassword from "../features/auth/ui/pages/ResetPassword";
import AdminLogin from "../features/admin/Ui/AdminLogin";
import AdminDashboard from "../features/admin/Ui/AdminDashboard";
import AdminProtectedRoute from "./ProtectedRoute/AdminProtectedRoute";

const AppRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
            {
              path: "forgot-password",
              element: <ForgetPassword />,
            },
            {
              path: "reset-password",
              element: <ResetPassword />,
            },
          ],
        },
      ],
    },
    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "services",
              element: <ServicePage />,
            },
            {
              path: "request",
              element: <Request />,
            },
            {
              path: "about",
              element: <About />,
            },
            {
              path: "contact",
              element: <Contact />,
            },
            {
              path: "my-request",
              element: <MyRequest />,
            },
          ],
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLogin />,
    },
    {
      path: "/admin/dashboard",
      element: <AdminProtectedRoute />,
      children: [
        {
          path: "",
          element: <AdminDashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
