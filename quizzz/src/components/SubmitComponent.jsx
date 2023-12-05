import React, { useState, useEffect, useContext } from "react";
import Data1 from "../Static-Data/Data";
import "./SubmitComponent.css";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import axios from "axios";
const SubmitComponent = () => {
  // const loc = useLocation();
  // console.log("loccccation", loc.state);
  const [obtainedMarks, setObtainedMarks] = useState(0);
  const [totalMarks, setTotalMarks] = useState(0);
  const { answerData,id,user,username,title } = useContext(AuthContext);
  console.log("answerData", answerData);
  const TestSubmit=async(x)=>{
    console.log("xxxxxx",x)
    try {
      let t= await axios.post("http://localhost:5000/result/",x, {
        headers: {
            'authorization': `Bearer ${user}`
        }
        
    })
    console.log(t,"token respone")
    } catch (error) {
      console.log("tokennn errrrrrrerrrrrrr")
    }
  }
  useEffect(() => {
    let c = 0;
    let c1 = 0;
    // let t = loc.state["d"];
    let t = answerData;
    Object.keys(Data1[id]).map((item) => {
      Data1[id][item].map((i, index) => {
        c1++;
        if (i["solution"] == t[item.split("").at(-1)][index]) {
          c++;
        }
      });
    });
    setTotalMarks(c1);
    setObtainedMarks(c);
    console.log("front",title)
    TestSubmit({username,obtainedmarks:c,totalmarks:c1,title})//for storing total marks in database
  },[]);
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
