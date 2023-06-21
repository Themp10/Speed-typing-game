import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect, Fragment, useRef } from 'react'
import Chronometer from './Chronometer';
function App() {
  const [text,SetText]=useState("Mon texte ici")
  const [timer,SetTimer]=useState("")
  const [timerOn,SetTimerOn]=useState(false)
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentStyle, setCurrentStyle] = useState("current");

  const checkLetter=()=>{
    setCurrentIndex(prevIndex=> prevIndex + 1)
    
  }



  const start=()=>{
  const listItems = document.querySelectorAll('.btn')[0].classList.toggle("stop",)
    if(!timerOn){
      SetTimerOn(true);
      startChronometer()
    }else{
      stopChronometer()
      SetTimerOn(false);
    }
    
  }

  const startChronometer = () => {
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 10); // Increase time by 10 milliseconds
    }, 10);
  };

  const stopChronometer = () => {
    clearInterval(intervalRef.current);

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
    <div className="App">
      <div className="text-content">
        <p className="display-text">
          {text.split('').map((letter, index) => (
            <span key={index} className={index === currentIndex ? "current" : ''}>
              {letter}
            </span>
          ))}
      </p>
      </div>

      <div className="middle">
        <button className="btn" onClick={start} >start</button>
        <p className="next">Next lettre <b>'{text[currentIndex]}'</b></p>
        
        <select className="difficulty">
          <option >Simple</option>
          <option >Moyen</option>
          <option >Difficile</option>
          <option >Extreme</option>
        </select>

        <p className="timer">Timer <b className="timer-value">{formatTime()}</b></p>
      </div>

      <div className="text-content">
        <textarea type="text" className="display-text" onChange={checkLetter}></textarea>
      </div>

    </div>
  );
}

export default App;
