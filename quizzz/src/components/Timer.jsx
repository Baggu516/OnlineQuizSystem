import React, { useState, useEffect, useRef } from "react";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(4);
  const [seconds, setSeconds] = useState(7);
  const [isRunning, setIsRunning] = useState(false);
  const navigate = useNavigate();

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };
  const ref = useRef();
  useEffect(() => {
    console.log("timer");
    if (isRunning) {
      ref.current = setInterval(() => {
        console.log(ref, "timer");
        if (seconds === 0) {
          // console.log(timer,"timer")
          if (minutes === 0) {
            if (hours === 0) {
              // alert("Time up");
              navigate("/");
              return;
            }
            setHours((prevHours) => prevHours - 1);
            setMinutes(59);
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
          }
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(ref.current);
      //   console.log()
    }
    return () => {
      clearInterval(ref.current);
    };
  }, [isRunning, seconds]);
  console.log(ref, "timer outside");
  return (
    <div className="stopwatch">
      <h1>Stopwatch Timer</h1>
      <div className="timer">
        <span>{hours < 10 ? `0${hours}` : hours}</span>:
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <div className="buttons">
        <button onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button onClick={stopTimer} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
