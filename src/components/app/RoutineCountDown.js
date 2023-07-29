import { formatTime } from "../utills/formatTime";
import { useCountDown } from "../../hooks/useCountDown";
export default function RoutineCountDown({ seconds }) {
  const timeRemaining = useCountDown(seconds);
  return (
    <>
      {timeRemaining} / {formatTime(seconds)}
    </>
  );
}
