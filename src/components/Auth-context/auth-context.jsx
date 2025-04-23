import { useState } from "react";
import { AuthContext } from "./index";

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthorized: false });

  const toggleAuth = () => {
    setAuth((prev) => {
      return prev.isAuthorized
        ? { isAuthorized: false }
        : { isAuthorized: true, name: "Артем" };
    });
  };

  return <AuthContext value={{ auth, toggleAuth }}>{children}</AuthContext>;
};
