import { useState, useEffect, useRef, useMemo } from "react";
import { formatTime } from "../components/utills/formatTime";

export const useCountDown = (items) => {
  const [routineItems, setRoutineItems] = useState([...items]);
  const totalPlayTime = useMemo(
    () => routineItems.reduce((a, b) => a + Number(b.playTime ?? 0), 0),
    [routineItems]
  );
  const playIndex = useRef(0);
  const [timeRemaining, setTimeRemaining] = useState(totalPlayTime);
  const [isPlaying, setIsPlaying] = useState(false);
  const interval = useRef(null);
  // console.log("items", items);
  // console.log("routineItems", routineItems);
  useEffect(() => {
    setTimeRemaining(totalPlayTime);
  }, [totalPlayTime]);

  useEffect(() => {
    setRoutineItems(items);
  }, [items]);

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
        if (playIndex.current >= routineItems.length) {
          alert("운동이 종료되었습니다.");
          clearInterval(interval.current);
          setIsPlaying(false);
          return items;
        }

        const currentPlayTime = Number(items[playIndex.current].playTime);
        if (currentPlayTime === 0) playIndex.current++;

        // items[playIndex].playTime = Number(items[playIndex].playTime) - 1;
        return [
          ...items.slice(0, playIndex.current),
          {
            ...items[playIndex.current],
            playTime: currentPlayTime - 1,
          },
          ...items.slice([playIndex.current] + 1),
        ];
      });
    }, 1000);
  };
  // if (playIndex.current - 1 === items.length) {
  //   clearInterval(interval.current);
  // }

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
