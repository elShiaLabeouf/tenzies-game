import { useState, useEffect, useRef } from 'react';
import ClockSvg from "./ClockSvg"
import "./Stopwatch.css"
import { formatTime } from "../../utils/formatTime"


const Stopwatch = ({isRunning}) => {
  const [time, setTime] = useState(0);
  const formattedTime = formatTime(time);
  const minuteHandRef = useRef(null);
  const secondHandRef = useRef(null);

  useEffect(() => {
    const minuteAngle = 6 * formattedTime.minutes + formattedTime.secondsRemainder * 0.1;
    const secondAngle = 6 * formattedTime.seconds;
    minuteHandRef.current.setAttribute('transform', `rotate(${minuteAngle}, 12, 12)`);
    secondHandRef.current.setAttribute('transform', `rotate(${secondAngle}, 12, 12)`);
  })


  useEffect(() => {
    let intervalId;
    
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1000);
      }, 1000);
    }
    
    return () => clearInterval(intervalId);
  }, [isRunning]);

  // Format time as MM:SS
  const timeToDisplay = () => {
    const hoursStr = formattedTime.hours === 0 ? "" : `${hours.toString().padStart(2, '0')}:`

    return `${hoursStr}${formattedTime.minutesRemainder.toString().padStart(2, '0')}:${formattedTime.secondsRemainder.toString().padStart(2, '0')}`;
  };

  return (
    <div className="stopwatch-container">
      <ClockSvg minuteHandRef={ minuteHandRef } secondHandRef={ secondHandRef }/>
      <div className="time-display">{timeToDisplay()}</div>
    </div>
  );
};

export default Stopwatch;