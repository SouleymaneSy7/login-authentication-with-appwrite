import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import ProtectedRoute from "../components/ProtectedRoute";

import LogInPage from "../pages/LogInPage";
import RegisterPage from "../pages/RegisterPage";
import SuccessPage from "../pages/SuccessPage";
import ErrorPage from "../pages/ErrorPage";

const RouterConfig: React.FC = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path={"/login"} element={<LogInPage />} />
        <Route path={"/signup"} element={<RegisterPage />} />

        <Route
          path={"/success"}
          element={
            <ProtectedRoute>
              <SuccessPage />
            </ProtectedRoute>
          }
        />

        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default RouterConfig;
