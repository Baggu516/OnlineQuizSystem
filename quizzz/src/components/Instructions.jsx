import React from "react";
import "./Instructions.css";

function Instructions({ closeModal }) {
  return (
    <div className="instructions">
      <h1>
        Quiz Instructions <button onClick={closeModal}>X close</button>
      </h1>
      <p>
        Welcome to the quiz! Please read the following instructions carefully
        before you start:
      </p>
      <ol>
        <li>There are 10 multiple-choice questions in this quiz.</li>
        <li>You have 30 minutes to complete the entire quiz.</li>
        <li>Each question has four options, and only one is correct.</li>
        <li>Click on the option you think is correct to select your answer.</li>
        <li>You can change your answer before submitting the quiz.</li>
        <li>After answering all the questions, click the "Submit" button.</li>
      </ol>
      <p>Good luck, and have fun!</p>
    </div>
  );
}

export default Instructions;
