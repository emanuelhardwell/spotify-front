import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRouter = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};
