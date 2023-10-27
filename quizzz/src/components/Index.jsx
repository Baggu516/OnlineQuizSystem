import React from "react";
import IndexpageCard from "./IndexpageCard";
import "./Index.css"
import { Link } from "react-router-dom";
const Index = () => {
  return <div className="card">
    {/* <Link to="/instructions"><IndexpageCard/></Link>
    <Link to="/quiz/2"><IndexpageCard/></Link>
    <Link to="/quiz/3"><IndexpageCard/></Link> */}
    <Link to="/quiz/1"><IndexpageCard image="./react.jpg"  alt="react" content="React Quiz"/></Link>
    <Link to="/quiz/2"><IndexpageCard image="./general.jpg"  alt="genaral" content="General knowledge Quiz"/></Link>
    
    </div>;
};

export default Index;
