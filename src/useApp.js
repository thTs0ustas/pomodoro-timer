import React, {useRef, useState} from 'react';


const useApp = () => {
  const pad_time = (time) => time.toString().padStart(2, '0')
  
  const [title, setTitle] = useState('Start the countdown!!!')
  const [timeLeft, setTimeLeft] = useState(10)
  const [isRunning , setIsRunning] = useState(true)
  
  const minutes = pad_time(Math.floor(timeLeft / 60))
  const seconds = pad_time(timeLeft - minutes * 60)
  const interval = useRef(null)
  
  const startTimer = () => {
    setIsRunning(false)
    setTitle('Time is passing')
    if (interval.current !== null) return;
    
    interval.current = setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft >=1) return timeLeft - 1
        resetTimer()
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
  return {seconds, minutes, title,isRunning, startTimer, stopTimer, resetTimer}
}

export default useApp