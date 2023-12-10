import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import Data from "../Static-Data/Data";
import Data1 from "../Static-Data/Data";
import "./AnswersAndResponses.css";
// import Divider from "@mui/material"
import { Divider } from "@mui/material";
import AuthContext from "../context/AuthContext";
const AnswersAndResponeses = () => {
  const {id}=useContext(AuthContext)
  const [isScroll, setIsScroll] = useState("none");
  const [ss, setSs] = useState();
  const [keyss, setKeyss] = useState([...Object.keys(Data1[id])]);
  // var t=[...localStorage.getItem("A")]
  // console.log(t)
  // var t1=[...localStorage.getItem("B")]
  // var t2=[...localStorage.getItem("C")]
  const [local, setLocal] = useState(
    JSON.parse(localStorage.getItem("optionstore"))
  );
  console.log(local["A"], "localllllllllll");
  const style = {
    display: isScroll,
    // fontSize: 200
  };

  console.log(style);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setIsScroll("block");
      } else {
        setIsScroll("none");
      }
    });
    // setIsScroll(window.scrollY)
  }, [ss]);
  return (
    <div className="main" id="main">
      <div className="back-container">
        <Link to="/submit">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </Link>
        <p className="back">Back</p>
      </div>
      <p className="goto-top" style={style}>
        {" "}
        <a href="#main">Go to top</a>
      </p>
      {keyss.map((item1, index1) => {
        return (
          <div className="questionsss-card" key={index1}>
            <h2 className="section-heading">{item1}</h2>
            {Data1[id][item1].map((item2, index2) => {
              return (
                <div className="question-card" key={index2}>
                  <h3>{` ${index2 + 1} .) ${item2["Q"]}`}</h3>
                  {"a" == local[`${item1}`.split("").at(-1)][index2] ? (
                    <p className="answered-option">{`a.) ${item2["a"]}`}</p>
                  ) : (
                    <p>{`a.) ${item2["a"]}`}</p>
                  )}
                  {"b" == local[`${item1}`.split("").at(-1)][index2] ? (
                    <p className="answered-option">{`b.) ${item2["b"]}`}</p>
                  ) : (
                    <p>{`b.) ${item2["b"]}`}</p>
                  )}
                  {"c" == local[`${item1}`.split("").at(-1)][index2] ? (
                    <p className="answered-option">{`c.) ${item2["c"]}`}</p>
                  ) : (
                    <p>{`c.) ${item2["c"]}`}</p>
                  )}
                  {/* <p>{`c.) ${item2["c"]}`}</p> */}
                  {/* <Divider /> */}
                  <p className="answer">
                    {" "}
                    Answer : <b>{item2["solution"]}</b>
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default AnswersAndResponeses;
