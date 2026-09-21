import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const AdminProtectedRoute = () => {
  const { admin, isLoading } = useSelector((state) => state.admin);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!admin) {
    return <Navigate to="/admin" replace />;
  }

  return <Outlet />;
};

export default AdminProtectedRoute;
