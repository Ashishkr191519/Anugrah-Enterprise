import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const { user, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
