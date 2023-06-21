import React, { useState, useRef } from 'react';

function Chronometer() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startChronometer = () => {
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 10); // Increase time by 10 milliseconds
    }, 10);
  };

  const stopChronometer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
  };

  const formatTime = () => {
    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / 1000 / 60 / 60) % 24);

    return `${hours.toString().padStart(2, '0')}:
            ${minutes.toString().padStart(2, '0')}:
            ${seconds.toString().padStart(2, '0')}:
            ${milliseconds.toString().padStart(3, '0')}`;
  };

  return (
    <div>
      <div>Time: {formatTime()}</div>
      <button onClick={startChronometer}>Start</button>
      <button onClick={stopChronometer}>Stop</button>
    </div>
  );
}

export default Chronometer;
