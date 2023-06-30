import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const socialToken = localStorage.getItem("socialToken");
  const [isLoggedIn, setIsLoggedIn] = useState(socialToken ? true : false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
