import { formatTime } from "../utills/formatTime";

export default function ItemCountDown(seconds) {
  return <>{formatTime(seconds)}</>;
}
