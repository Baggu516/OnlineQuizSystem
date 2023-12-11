import React, { useContext } from "react";
import { useNavigate,Navigate,useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const RedirectRoute = ({ children }) => {
  let navigate=useNavigate()
  const { user } = useContext(AuthContext);
  return (
    <div>
{ user ? navigate("/"):children }
    </div>
   )
};

export default RedirectRoute;
