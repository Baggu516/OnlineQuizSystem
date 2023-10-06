import React, { useState } from "react";
import Instructions from "./Instructions";
import Timer from "./Timer";
import { useParams } from "react-router-dom";
import Modal from "react-modal";

const Quiz = () => {
  const { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);
  return (
    <>
      This is quizz page where actuall quiz {id} goes!!
      <button onClick={openModal}>view Instructions</button>
      <Modal isOpen={modalOpen} onRequestClose={closeModal}>
        <Instructions closeModal={closeModal} />
      </Modal>
      <Timer />
    </>
  );
};

export default Quiz;
