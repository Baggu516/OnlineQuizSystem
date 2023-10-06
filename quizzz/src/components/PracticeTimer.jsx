import React, { useEffect, useRef, useState } from "react";

const PracticeTimer = () => {
  const [time, setTime] = useState(180);
  const [timer, setTimer] = useState(null);

  const ref = useRef(null);

  const Start = () => {
    // ref.current = setInterval(() => {
    //   setTime((prev) => prev + 1);
    // }, 1000);
  };
  const stop = () => {
    clearInterval(ref.current);
  };
  useEffect(() => {
    console.log("effect");
    const a = setInterval(() => {
      // setTime((prev) => prev + 1);
      setTime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(a);
    };
  }, []);
  //   console.log("time");
  return (
    <div>
      <p>Time : {time}</p>
      <div className="actions">
        {/* <button onClick={Start}>Start</button>
        <button onClick={stop}>Stop</button> */}
        {/* {console.log("hello")} */}
      </div>
    </div>
  );
};

export default PracticeTimer;
