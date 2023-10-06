import React, { useState } from "react";
import Instructions from "./Instructions";
import Timer from "./Timer";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import "./Quiz.css"
const Quiz = () => {
  const { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);
  return (
    <div className="quiz">
      This is quizz page where actuall quiz {id} goes!!
      <div className="time-instruction">
        
        <button onClick={openModal}>view Instructions</button>
        
      
      <Timer/>
      
      
      
      </div>
      
      <Modal isOpen={modalOpen} >
        <Instructions closeModal={closeModal} />
      </Modal>
      {/* <Timer /> */}
    </div>
  );
};

export default Quiz;
