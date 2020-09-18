import React, {useRef, useState} from 'react';
import Button from "@material-ui/core/Button";
import useApp from './useApp.js'
import './App.css';




function App() {

  const {seconds,minutes,title,startTimer,stopTimer,resetTimer} = useApp()

  return (
     <div className="App">
       <h2>{title}</h2>
       <div className="timer">
         <span>{minutes}</span>
         <span>:</span>
         <span>{seconds}</span>
       </div>
       <div className="buttons">
         <Button onClick={startTimer} color="secondary" variant="contained">Start</Button>
         <Button onClick={stopTimer} color="primary" variant="contained">Stop</Button>
         <Button onClick={resetTimer} color="primary" variant="contained">Reset</Button>
       </div>
     </div>
  );
}

export default App;
