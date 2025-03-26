import { useState, useEffect, useRef } from 'react';
import ClockSvg from "./ClockSvg"
import "./Stopwatch.css"
import { timeToDisplay } from "../../utils/Stopwatch/formatTime"

const Stopwatch = ({isRunning=false}) => {
  const [time, setTime] = useState(0);
  const minuteHandRef = useRef(null);
  const secondHandRef = useRef(null);

  const rotateClockHands = () => {
    const timeInSeconds = Math.floor(time / 1000)
    const minuteAngle = timeInSeconds * 0.1;
    const secondAngle = timeInSeconds * 6;
    minuteHandRef.current.setAttribute('transform', `rotate(${minuteAngle}, 12, 12)`);
    secondHandRef.current.setAttribute('transform', `rotate(${secondAngle}, 12, 12)`);
  }
  useEffect(rotateClockHands, [time])

  useEffect(() => {
    let intervalId;
    
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1000);
      }, 1000);
    }
    
    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    <div className="stopwatch-container">
      <ClockSvg minuteHandRef={ minuteHandRef } secondHandRef={ secondHandRef }/>
      <div className="time-display">{timeToDisplay(time)}</div>
    </div>
  );
};

export default Stopwatch;