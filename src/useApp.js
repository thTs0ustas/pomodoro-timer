import {useRef, useState} from 'react';


const useApp = () => {
  const pad_time = (time) => time.toString().padStart(2, '0')
  const settingLaps = 2
  
  const [title, setTitle] = useState('Start the countdown!!!')
  const [timeLeft, setTimeLeft] = useState(2)
  const [isRunning, setIsRunning] = useState(true)
  const [laps, setLaps] = useState(settingLaps)
  // const [rest, setRest] = useState(laps?laps-1:0)
  // const [timeToRest, setTimeToRest] = useState(false)
  
  const minutes = pad_time(Math.floor(timeLeft / 60))
  const seconds = pad_time(timeLeft - minutes * 60)
  const lapsRemaining = pad_time(laps)
  const interval = useRef(null)
  
  const startTimer = (laps) => {
    setIsRunning(false)
    setTitle('Time is passing')
    if (interval.current !== null) return;
    interval.current = setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft >= 1) return timeLeft - 1
        resetTimer()
        if (laps>0) {
          setLaps(laps-1)
          startTimer(laps-1)
        }
        if (laps===0) {
          resetTimer()
          setLaps(settingLaps)
        }
        return 0
      })
    }, 1000)
  }
  
  
  const stopTimer = () => {
    if (interval.current === null) return
    
    clearInterval(interval.current)
    interval.current = null;
    setTitle('Keep it up')
    setIsRunning(true)
  }
  
  const resetTimer = () => {
    clearInterval(interval.current)
    interval.current = null;
    setTimeLeft(10)
    setTitle('Ready for another one')
    setIsRunning(true)
    
  }
  
  
  
  
  return {seconds, minutes, title, isRunning, lapsRemaining, startTimer, stopTimer, resetTimer}
}

export default useApp