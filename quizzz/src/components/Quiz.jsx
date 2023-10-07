import React, { useState } from "react";
import Instructions from "./Instructions";
import Timer from "./Timer";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import "./Quiz.css";
// material ui
// import Divider
import Divider from '@mui/material/Divider';
const Quiz = () => {
  const { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);
  return (
    <>
    <div className="quiz">
      <div className="quiz-heading">
      This is quizz page where actuall quiz {id} goes!!
      </div>
    
      <div className="sections-container">
        <button className="section-btn">section-A</button>
        <button className="section-btn">section-B</button>
        <button className="section-btn">section-c</button>
        <Divider />
      </div>
      
      
      <div className="time-instruction">
        <button className="Instruction-btn" onClick={openModal}>view Instructions</button>
        
        <Timer />
      </div>
      {/* <hr></hr> */}
      <div className="nav-btn">
      <div className="clear-mark-btn">
        <button>Clear</button>
        <button>Mark up</button>
      </div>
      <div className="save-next-btn">
        <button>Save and next</button>
      </div>
      </div>
      <div className="submit-btn">
      <button>Submit</button>
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
