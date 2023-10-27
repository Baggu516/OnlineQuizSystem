import React from "react";
import IndexpageCard from "./IndexpageCard";
import "./Index.css"
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <div className="zoom-in">
    <nav>
      <img src="./quiz.jpg" alt="fghjkl" className="quiz-img" />
      <h3 className="quiz-text">Quiz <span style={{opacity:0.6}}>Hub</span></h3>
    </nav>
  <div className="card-container1">
    {/* <Link to="/instructions"><IndexpageCard/></Link>
    <Link to="/quiz/2"><IndexpageCard/></Link>
    <Link to="/quiz/3"><IndexpageCard/></Link> */}
    
    <div className="desc-abt-quiz">
      <h2 className="desc-heading">Where knowledge meets fun, test your wits and learn something new!</h2>
      <p className="desc-text">Attempt Any Quiz</p>
    </div>
    <div className="cards1">
    <Link to="/quiz/1"><IndexpageCard image="./react.jpg"  alt="react" content="React Quiz"/></Link>
    <Link to="/quiz/2"><IndexpageCard image="./general.jpg"  alt="genaral" content="General knowledge Quiz"/></Link>
    </div>
    
    
    </div>;
    </div>
    )
};

export default Index;
