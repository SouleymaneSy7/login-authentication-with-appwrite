import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const user = null;

  return user ? (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Navigate to="/" />
    </React.Fragment>
  );
};

export default ProtectedRoute;
