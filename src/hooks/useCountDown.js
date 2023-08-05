import { useState, useEffect, useRef } from "react";
import { formatTime } from "../components/utills/formatTime";

export const useCountDown = (seconds) => {
  const [timeRemaining, setTimeRemaining] = useState(seconds);
  const [isPlaying, setIsPlaying] = useState(false);
  const interval = useRef(null);

  useEffect(() => {
    setTimeRemaining(seconds);
  }, [seconds]);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setTimeRemaining((prevTime) => prevTime - 1);
    // }, 1000);
    return () => clearInterval(interval.current);
  }, []);

  const play = () => {
    setIsPlaying(true);
    clearInterval(interval.current);
    interval.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);
  };

  const pause = () => {
    setIsPlaying(false);
    clearInterval(interval.current);
  };
  return {
    play,
    pause,
    currentCount: formatTime(timeRemaining),
    isPlaying,
  };
};
