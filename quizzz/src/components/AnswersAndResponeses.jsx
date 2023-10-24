import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Data from "../Static-Data/Data"
import "./AnswersAndResponses.css"
// import Divider from "@mui/material"
import { Divider } from '@mui/material';
const AnswersAndResponeses = () => {
  const [keyss,setKeyss]=useState([...Object.keys(Data)])
  return (
        <div className='main'>
            <div className="back-container" >
            <Link to="/submit"><ion-icon name="arrow-back-outline"></ion-icon></Link>
            <p className='back'>Back</p>
            </div>
            {
              keyss.map((item1,index1)=>{
                return ( 
                  <div className='questionsss-card' key={index1}>
                <h2 className="section-heading">{item1}</h2>  
                 { Data[item1].map((item2,index2)=>{
                     return ( 
                      <div className="question-card" key={index2}> 
                         <h3>{index2+1} .) ${item2["Q"]}</h3>
                         <p>a.) {item2["a"]}</p>
                         <p>b.) {item2["b"]}</p>
                         <p>c.) {item2["c"]}</p>
                         <Divider/>
                         <p className="answer">  Answer :  <b>{item2["solution"]}</b></p>
                      </div>
                     )
                  })}
                  </div>
                )
              })
            }
           
        </div>
  )
}

export default AnswersAndResponeses