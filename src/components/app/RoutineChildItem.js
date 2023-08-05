import styled from "@emotion/styled";
import { formatTime } from "../utills/formatTime";
import { RoutineItemContext } from "./RoutineItem";
import { useContext } from "react";

export default function RoutineChildItem({ title, playTime }) {
  const { currentCount } = useContext(RoutineItemContext);
  return (
    <TwoDepthList>
      {title}({formatTime(playTime ?? 0)} )
    </TwoDepthList>
  );
}
const TwoDepthList = styled.li`
  line-height: 40px;
`;
