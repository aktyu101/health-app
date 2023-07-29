import { useState, useEffect } from "react";
import { formatTime } from "../components/utills/formatTime";

export const useCountDown = (seconds) => {
  const [timeRemaining, setTimeRemaining] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return formatTime(timeRemaining);
};
