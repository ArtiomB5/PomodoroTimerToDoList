import { useState, useEffect } from "react";

export const TimerRender = () => {
  const [sec, setSec] = useState(0);

  let intervalIDSec = 0;
  let timerFunc = () => {
    intervalIDSec = setTimeout(() => setSec(sec - 1), 1000);
  };
  useEffect(() => {
    sec > 0 && timerFunc();
  }, [sec]);

  let resetTimer = () => {
    clearTimeout(intervalIDSec);
    setSec(0);
  };
  let pauseTimer = () => {
    clearTimeout(intervalIDSec);
  };
  return (
    <div>
      <hr />
      <h2>⏱️ {Math.floor(sec / 60)} minutes</h2>
      <h2>⏱️ {sec % 60} seconds</h2>
      <hr />
      <button
        onClick={() => {
          setSec(25 * 60);
        }}
      >
        <h4>▶️ 25 min round</h4>
      </button>
      <button
        onClick={() => {
          setSec(5 * 60);
        }}
      >
        <h4>▶️ 5 min rest</h4>
      </button>
      <button
        onClick={() => {
          setSec(15 * 60);
        }}
      >
        <h4>▶️ 15 min rest</h4>
      </button>
      <button onClick={pauseTimer}>
        <h4>⏸️ Pause</h4>
      </button>
      <button
        onClick={() => {
          let pauseSec = sec;
          setSec(pauseSec - 1);
        }}
      >
        <h4>⏯️ Continue</h4>
      </button>
      <button onClick={resetTimer}>
        <h4>⏹️ Stop</h4>
      </button>
    </div>
  );
};
