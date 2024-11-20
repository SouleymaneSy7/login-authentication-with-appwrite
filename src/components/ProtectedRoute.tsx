import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated, loading } = useAuthContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <React.Fragment>
      <Navigate to="/" />
    </React.Fragment>
  );
};

export default ProtectedRoute;
