import React, { useEffect, useState } from "react";
import Instructions from "./Instructions";
import Timer from "./Timer";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import "./Quiz.css";
// material ui
// import Divider
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
// importing question component
import Questions from "./Questions";
// importing Data
import Data from "../Static-Data/Data";
const Quiz = () => {
  const { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);
  // changing question number state(n)
  const [n, setN] = useState(0);
  // options functions to set options

  const option1=()=>{
  console.log("option1")
  setOptionDisableArr([true,false,false])
  }
  const option2=()=>{
    console.log("option2")
    setOptionDisableArr([false,true,false])
  }
  const option3=()=>{
    console.log("option3")
    setOptionDisableArr([false,false,true])
  }

  // handling section functions to render particular section questions
  const [s,setS]=useState("A") //s=section
  const [secdisable,setSecDisable]=useState([true,false,false])
  // options disableing
  const [optionDisableArr,setOptionDisableArr]=useState([false,false,false])
  const [goNextText,setGoNextText]=useState("Go To Next section")
  const handleSecA=()=>{
    setS("A")
    setN(0)
    setSecDisable([true,false,false])
    setGoNextText("Go To Next section")
  } 
  const handleSecB=()=>{
    setS("B")
    setN(0)
    setSecDisable([false,true,false])
    setGoNextText("Go To Next section")
  } 
  const handleSecC=()=>{
    setS("C")
    setN(0)
    setSecDisable([false,false,true])
    setGoNextText("Go to Back-Section or Submit")
  } 

  // going to next section whenever we are end of the section
  
  const goingNextSection=()=>{
    if(s=="A"){
      setS("B")
      setN(0)
      setSecDisable([false,true,false])
    }
    else if(s=="B"){
      setS("C")
      setN(0)
      setSecDisable([false,false,true])
      setGoNextText("Go to Back-Section or Submit")
    }
    else{
        
    }
  }
  // save and next button function
  const HandleNext=()=>{
    setN(n+1)
    setOptionDisableArr([false,false,false])
  } 

useEffect(()=>{
  console.log(n,"useEffecttttttttttttttttt")
  // if(Data[`section${s}`].length-1==n){
  //   if(s=="A"){
  //     setS("B")
  //     setN(0)
  //     setSecDisable([false,true,false])
  //   }
  //   else if(s=="B"){
  //     setS("C")
  //     setN(0)
  //     setSecDisable([false,false,true])
  //   }
  // }
},[n])

  return (
    <>
      <div className="quiz">
        <div className="quiz-heading">
          This is quizz page where actuall quiz {id} goes!!
        </div>

        <div className="sections-container">
          <Button
            variant="contained"
            className="section-btn"
            onClick={handleSecA}
          >
            section-A
          </Button>
          <Button
            variant="contained"
            className="section-btn"
            onClick={handleSecB}
          >
            section-B
          </Button>
          <Button
            variant="contained"
            className="section-btn"
            onClick={handleSecB}
          >
            section-c
          </Button>
          <Divider />
        </div>

        <div className="time-instruction">
          <Button
            variant="contained"
            color="warning"
            className="Instruction-btn"
            onClick={openModal}
          >
            view Instructions
          </Button>

          <Timer />
        </div>
        {/* ************************************************************questions********************************************/}
        <div className="question-container">
          <Questions
            n={n}
            option1={option1}
            option2={option2}
            option3={option3}
          />
        </div>
        {/* *******************************************************************************************8 */}
        {/* <hr></hr> */}
        <div className="nav-btn">
          <div className="clear-mark-btn">
            <Button variant="contained">Clear</Button>
            <Button variant="contained">Mark up</Button>
          </div>
          <div className="save-next-btn">
            <Button
              variant="contained"
              color="primary"
              onClick={() => setN(n + 1)}
            >
              Save and next
            </Button>
          </div>
        </div>
        <div className="submit-btn">
          <Button variant="contained" style={{ backgroundColor: "blue" }}>
            Submit
          </Button>
        </div>

        <Modal isOpen={modalOpen}>
          <Instructions closeModal={closeModal} isModal={false} />
        </Modal>
        {/* <Timer /> */}
      </div>
    
      <div className="sections-container">
        <Button  variant="contained" className="section-btn" onClick={handleSecA} disabled={secdisable[0]}>section-A</Button>
        <Button  variant="contained" className="section-btn" onClick={handleSecB} disabled={secdisable[1]}>section-B</Button>
        <Button  variant="contained" className="section-btn" onClick={handleSecC} disabled={secdisable[2]}>section-c</Button>
        <Divider />
      </div>
      
      
      <div className="time-instruction">
        <Button   variant="contained" color="warning" className="Instruction-btn" onClick={openModal}>view Instructions</Button>
        
        <Timer />
      </div>
      {/* ************************************************************questions********************************************/}
      <div className="question-container">
        <Questions n={n} option1={option1} option2={option2} option3={option3} s={s}  optionDisableArr={optionDisableArr}/> 
      </div>
      {/* *******************************************************************************************8 */}
      <div className="question-numbers">
        <button className="section-heading-btn">section-{s}</button>
        <Divider/>
        <div className="numbers">
          {Data[`section${s}`].map((item,index)=>
            <button  className="number-btn" key={index} onClick={()=>setN(index)}>{index+1}</button>
          )}
        </div>
      </div>
      {/* <hr></hr> */}
      <div className="nav-btn">
      <div className="clear-mark-btn">
        <Button   variant="contained" >Clear</Button>
        <Button variant="contained">Mark up</Button>
      </div>
      <div className="save-next-btn">
        {(Data[`section${s}`].length-1!==n)?<Button  variant="contained" color="primary"  onClick={HandleNext}>Save and next</Button>
        : <Button variant="contained" color="primary"  onClick={goingNextSection}>{goNextText}</Button>}
      </div>
      </div>
      <div className="submit-btn">
      <Button variant="contained"style={{backgroundColor:"blue"}}>Submit</Button>
      </div>
      
      
      <Modal isOpen={modalOpen}>
        <Instructions closeModal={closeModal} />
      </Modal>
      {/* <Timer /> */}
    
    </>
  );
};

export default Quiz;
