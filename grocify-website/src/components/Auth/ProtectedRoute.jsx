import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  // agar login nahi hai to signin pe bhej do
  if (!isAuthenticated || isAuthenticated !== "true") {
    return <Navigate to="/signin" replace />;
  }

  // warna children (Layout/Home/...) render kar do
  return children;
};

export default ProtectedRoute;
