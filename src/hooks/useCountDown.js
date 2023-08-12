import { useState, useEffect, useRef, useMemo } from "react";
import { formatTime } from "../components/utills/formatTime";
export const useCountDown = (items) => {
  const [routineItems, setRoutineItems] = useState([...items]);
  const totalPlayTime = useMemo(
    () => routineItems.reduce((a, b) => a + Number(b.playTime ?? 0), 0),
    [routineItems]
  );
  const [playIndex, setPlayIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(totalPlayTime);
  const [isPlaying, setIsPlaying] = useState(false);
  const interval = useRef(null);
  // console.log("items", items);
  // console.log("routineItems", routineItems);

  useEffect(() => {
    setTimeRemaining(totalPlayTime);
  }, [totalPlayTime]);

  // useEffect(() => {
  //   setRoutineItems([...items]);
  // }, [items]);

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
      setRoutineItems((items) => {
        const currentPlayTime = Number(items[playIndex].playTime);
        if (currentPlayTime === 0) setPlayIndex((index) => index + 1);
        // items[playIndex].playTime = Number(items[playIndex].playTime) - 1;
        return [
          ...items.slice(0, playIndex),
          {
            ...items[playIndex],
            playTime: currentPlayTime - 1,
          },
          ...items.slice([playIndex] + 1),
        ];
      });
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
    timeRemaining,
    routineItems,
  };
};
