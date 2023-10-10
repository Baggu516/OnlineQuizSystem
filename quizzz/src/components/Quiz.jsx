import React, { useState } from "react";
import Instructions from "./Instructions";
import Timer from "./Timer";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import "./Quiz.css";
// material ui
// import Divider
import Divider from '@mui/material/Divider';
import { Button } from "@mui/material";
// importing question component
import Questions from "./Questions";
const Quiz = () => {
  const { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);
  // changing question number state(n)
  const [n,setN]=useState(0)
  // options functions to set options
  const option1=()=>{
  console.log("option1")
  }
  const option2=()=>{
    console.log("option2")
  }
  const option3=()=>{
    console.log("option3")
  }
  // handling section functions to render particular section questions
  const handleSecA=()=>{

  } 
  const handleSecB=()=>{
    
  } 
  const handleSecC=()=>{
    
  } 
  return (
    <>
    <div className="quiz">
      <div className="quiz-heading">
      This is quizz page where actuall quiz {id} goes!!
      </div>
    
      <div className="sections-container">
        <Button  variant="contained" className="section-btn" onClick={handleSecA}>section-A</Button>
        <Button  variant="contained" className="section-btn" onClick={handleSecB}>section-B</Button>
        <Button  variant="contained" className="section-btn" onClick={handleSecB}>section-c</Button>
        <Divider />
      </div>
      
      
      <div className="time-instruction">
        <Button   variant="contained" color="warning" className="Instruction-btn" onClick={openModal}>view Instructions</Button>
        
        <Timer />
      </div>
      {/* ************************************************************questions********************************************/}
      <div className="question-container">
        <Questions n={n} option1={option1} option2={option2} option3={option3} />
      </div>
      {/* *******************************************************************************************8 */}
      {/* <hr></hr> */}
      <div className="nav-btn">
      <div className="clear-mark-btn">
        <Button   variant="contained" >Clear</Button>
        <Button variant="contained">Mark up</Button>
      </div>
      <div className="save-next-btn">
        <Button  variant="contained" color="primary"  onClick={()=>setN(n+1)}>Save and next</Button>
      </div>
      </div>
      <div className="submit-btn">
      <Button variant="contained"style={{backgroundColor:"blue"}}>Submit</Button>
      </div>
      
      
      <Modal isOpen={modalOpen}>
        <Instructions closeModal={closeModal} />
      </Modal>
      {/* <Timer /> */}
    </div>
    
    </>
  );
};

export default Quiz;
