import { createContext } from "react";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  let ContextData = {
    user: "Bhargav",
  };

  return (
    <AuthContext.Provider value={ContextData}>{children}</AuthContext.Provider>
  );
};
