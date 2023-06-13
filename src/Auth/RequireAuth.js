import React from "react";
import { useAuth } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  return (
    <div>
      {isLoggedIn ? (
        <>{children}</>
      ) : (
        <Navigate to={"/login"} state={{ from: location }} />
      )}
    </div>
  );
};
