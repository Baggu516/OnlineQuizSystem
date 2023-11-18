import { createContext, useState } from "react";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [answerData, setAnswerData] = useState();
  const [user, setUser] = useState(null);
  const [id,setId]=useState()
  let ContextData = {
    user: user,
    setUser: setUser,
    answerData: answerData,
    setAnswerData: setAnswerData,
    id:id,
    setId:setId
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
