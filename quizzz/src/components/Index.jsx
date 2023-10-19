import React from "react";
import IndexpageCard from "./IndexpageCard";
import "./Index.css";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <div className="container">
      <Link to="/instructions">
        <IndexpageCard className="card" />
      </Link>
      <Link to="/quiz/2">
        <IndexpageCard className="card" />
      </Link>
      <Link to="/quiz/2">
        <IndexpageCard className="card" />
      </Link>
      <Link to="/quiz/2">
        <IndexpageCard className="card" />
      </Link>
      <Link to="/quiz/2">
        <IndexpageCard className="card" />
      </Link>
      <Link to="/quiz/2">
        <IndexpageCard className="card" />
      </Link>
    </div>
  );
};

export default Index;
