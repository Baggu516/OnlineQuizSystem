import React, { useState,useEffect, useContext } from "react";
import "./PracticeModel2.css";
import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import Data1 from "../Static-Data/Data";
import AuthContext from "../context/AuthContext";
const PracticeModal2 = ({ passingdata,HandleMod }) => {
  const {id,answerData}=useContext(AuthContext)
  const [answers, setAnswers] = useState({ ...answerData });
   const [total,setTotal]=useState(0)
   const [attemptedtotal,setAttemptedTotal]=useState(0)
  const [answerscount,setAnswerscount]=useState({
    "A":"",
    "B":"",
    "C":""
  })
  
  useEffect(()=>{
    let gc=0
    let tc=0
    Object.keys(answers).forEach((item)=>{
      tc=tc+Data1[id][`section${item}`].length
     
      let c=0
      console.log("enterreddddddddddd")
      answers[item].forEach(i=>{
        if(["a","b","c"].includes(i)){
          console.log("enterreddddddddddd2222")
          c+=1
          gc++
        }
      })
      // console.log({...answerscount,[item]:[c]},"belowenterdd222")
      
      setAnswerscount((x)=>({...x,[item]:[c]}))
    }) 
    setAttemptedTotal(gc)
    setTotal(tc)
    // console.log(answers, "passssssssedddddddddddd",answerscount,"passssssssedddddddddddd12345678765432345678");
  },[])
  return (
    <div className="attempted-number-container">
      <h2 className="attempted-text">Attempted Questions statistics</h2>
      <table>
        <tr>
          {Object.keys(answers).map((item,index)=>{
            return(
              <th>section-{item}</th> 
            )
          })} 
  
        </tr>
        <tr>
        {Object.keys(answers).map((item,index)=>{
            return(
              <td>{answerscount[item]}</td>
            )
          })} 
          {/* <td>Alfreds Futterkiste</td> */}
        </tr>
      </table>
      <div className="total-attempted">
      <table>
        <tr>
          <th>Total Questions</th>
          <th>Attempted Questions</th>
        </tr>
        <tr>
          <td>{total}</td>
          <td>{attemptedtotal}</td>
        </tr>
      </table>
      </div>
      
      <div className="attempted-number-container-btn">
        {/* <Button  onClick={HandleMod} variant="contained" > Back</Button> */}
        
        <Button  variant="contained" ><NavLink style={{color:"white"}}to="/submit" state={{"d":passingdata}}>Submit Test</NavLink></Button>
      </div>
    </div>
  );
};

export default PracticeModal2;
