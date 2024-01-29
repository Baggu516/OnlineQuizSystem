import React from "react";
import IndexpageCard from "./IndexpageCard";
import "./Index.css";
import { Link } from "react-router-dom";
import { useContext,useEffect } from "react";
import AuthContext from "../context/AuthContext";
const Index = () => {
  const {setUser}=useContext(AuthContext)
  useEffect(()=>{
    if(localStorage.getItem("token")){
      setUser(localStorage.getItem("token"))
    }
    console.log("login useffect")
  },[])
  return (
    <div className="zoom-in">
      <nav>
        <div className="index-img">
        <img src="./quiz.jpg" alt="fghjkl" className="quiz-img" />
        <h3 className="quiz-text">
          Quiz <span style={{ opacity: 0.6 }}>Hub</span>
        </h3>
        </div>
        
        <div className="index-logout">
          <h2>Logout</h2>
          <button className="log" onClick={()=>{
            localStorage.removeItem("token")
            setUser(null)}}><ion-icon name="log-out-outline"  size="small"></ion-icon></button>
        </div>
      </nav>
      <div className="card-container1">
        {/* <Link to="/instructions"><IndexpageCard/></Link>
    <Link to="/quiz/2"><IndexpageCard/></Link>
    <Link to="/quiz/3"><IndexpageCard/></Link> */}

        <div className="desc-abt-quiz">
          <h2 className="desc-heading">
            Where knowledge meets fun, test your wits and learn something new!
          </h2>
          <p className="desc-text">Attempt Any Quiz</p>
        </div>
        <div className="cards1">
          <Link to="/quiz/instructions/0">
            <IndexpageCard
              image="./react.jpg"
              alt="react"
              content="React Quiz"
            />
          </Link>
          <Link to="/quiz/instructions/1">
            <IndexpageCard
              image="./general.jpg"
              alt="genaral"
              content="General knowledge Quiz"
            />
          </Link>
        </div>
      </div>
      ;
    </div>
  );
};

export default Index;
