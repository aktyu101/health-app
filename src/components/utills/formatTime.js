import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

export const formatTime = (seconds) => {
  const duration = dayjs.duration(seconds, "seconds");
  return duration.format("HH시간 mm분 ss초");
};
