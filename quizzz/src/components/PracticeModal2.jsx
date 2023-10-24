import React, { useState,useEffect } from "react";
import "./PracticeModel2.css";
import { Button } from "@mui/material";
const PracticeModal2 = ({ passingdata,HandleMod }) => {
  const [answers, setAnswers] = useState({ ...passingdata });
  //  const []
  const [answerscount,setAnswerscount]=useState({
    "A":"",
    "B":"",
    "C":""
  })
  
  useEffect(()=>{
    Object.keys(answers).forEach((item)=>{
      let c=0
      answers[item].forEach(i=>{
        if(i=="a" ||i=="b" || i=="c"){
          c+=1
        }
      })
      setAnswerscount({...answerscount,[item]:[c]})
    }) 
    // console.log(answers, "passssssssedddddddddddd",answerscount);
  },[])
  return (
    <div className="attempted-number-container">
      <h2>passing data</h2>
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
              <td>{answers[item].length}</td>
            )
          })} 
          {/* <td>Alfreds Futterkiste</td> */}
        </tr>
      </table>
      <div className="attempted-number-container-btn">
        <Button  onClick={HandleMod} variant="contained" > Back</Button>
        
        <Button  variant="contained">Submit Test</Button>
      </div>
    </div>
  );
};

export default PracticeModal2;
