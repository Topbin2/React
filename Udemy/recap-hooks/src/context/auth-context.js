import React, { useState, createContext } from "react";

const AuthContext = () =>
  createContext({
    isAuth: false,
    login: () => {},
  });

export const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginHandler = () => {
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider
      value={{ login: loginHandler, isAuth: isAuthenticated }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;