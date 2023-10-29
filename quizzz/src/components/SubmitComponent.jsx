import React, { useState, useEffect,useContext } from "react";
import Data from "../Static-Data/Data";
import "./SubmitComponent.css";
import { Link, useLocation } from "react-router-dom";
// import AuthContext from "../context/AuthContext";
// import { createContext } from "react";

// const AuthContext = createContext();
const SubmitComponent = () => {
  const loc = useLocation();
  console.log("loccccation", loc.state);
  // const { answerData } = useContext(AuthContext);
  // console.log(answerData,"answerDataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  const [obtainedMarks, setObtainedMarks] = useState(0);
  const [totalMarks, setTotalMarks] = useState(0);
  useEffect(() => {
    let c = 0;
    let c1 = 0;
    let t = loc.state["d"];
    Object.keys(Data).map((item) => {
      Data[item].map((i, index) => {
        c1++;
        if (i["solution"] == t[item.split("").at(-1)][index]) {
          c++;
        }
      });
    });
    setTotalMarks(c1);
    setObtainedMarks(c);
  });
  return (
    <div className="submit-container">
      <div className="total-marks-container">
        <p className="total-marks-text">Total Marks</p>
        <p className="total-marks">
          {obtainedMarks}/{totalMarks}
        </p>
      </div>
      <div className="keys">
        <Link to="/answers" className="view-answers">
          View answers & your responeses
        </Link>
      </div>
      <div className="keys">
        <Link to="/">back to home</Link>
      </div>
    </div>
  );
};

export default SubmitComponent;
