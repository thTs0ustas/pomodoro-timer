import React, {useRef, useState} from 'react';


const useApp = () => {
  const pad_time = (time) => time.toString().padStart(2, '0')
  const [title, setTitle] = useState('Start the countdown!!!')
  const [timeLeft, setTimeLeft] = useState(10)
  
  const minutes = pad_time(Math.floor(timeLeft / 60))
  const seconds = pad_time(timeLeft - minutes * 60)
  const interval = useRef(null)
  
  const startTimer = () => {
    setTitle('Time is passing')
    interval.current = setInterval(() => setTimeLeft(timeLeft => {
        if (timeLeft > 0) return timeLeft - 1
        
        clearInterval(interval.current)
        resetTimer()
        return 0
        
      }
    ), 1000)
    
  }
  const stopTimer = () => [clearInterval(interval.current), setTitle('Keep it up')]
  
  const resetTimer = () => {
    clearInterval(interval.current)
    setTimeLeft(10)
    setTitle('Ready for another one')
  }
  return {seconds, minutes, title, startTimer, stopTimer, resetTimer}
}

export default useApp