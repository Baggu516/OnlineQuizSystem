import { createContext, useState } from "react";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [answerData, setAnswerData] = useState();
  const [user, setUser] = useState(null);
  let ContextData = {
    user: user,
    setUser: setUser,
    answerData: answerData,
    setAnswerData: setAnswerData,
  };
    
  return (
    <AuthContext.Provider value={ContextData}>{children}</AuthContext.Provider>
  );
};

{
  /* <div>
  <input>
  </input>
</div>

<AuthContext.Provider value={ContextData}>
  <App/>
</AuthContext.Provider> */
}
