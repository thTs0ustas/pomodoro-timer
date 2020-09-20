import React from 'react';
import Button from "@material-ui/core/Button";
import useApp from './useApp.js'
import './App.css';


function App() {
  
  const {seconds, minutes, title, isRunning,lapsRemaining, startTimer, stopTimer, resetTimer} = useApp()
  
  return (
    <div className="App">
      <h2>{title}</h2>
      <div className="laps">
        <span>Laps</span>
        <span>: </span>
        <span>{lapsRemaining}</span>
      </div>
      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className="buttons">
        {!isRunning || <Button onClick={() => startTimer(lapsRemaining)} color="secondary" variant="contained">Start</Button>}
        {isRunning || <Button onClick={() => stopTimer()} color="primary" variant="contained">Stop</Button>}
        <Button onClick={resetTimer} color="primary" variant="contained">Reset</Button>
      </div>
    </div>
  );
}

export default App;
