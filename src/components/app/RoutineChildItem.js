import styled from "@emotion/styled";
import { useContext, useMemo } from "react";
import { RoutineItemContext } from "./RoutineItem";
import { formatTime } from "../utills/formatTime";

export default function RoutineChildItem({ item }) {
  const { routineItems } = useContext(RoutineItemContext);
  const currentTime = useMemo(() => {
    return formatTime(
      routineItems.find((routine) => routine.id === item.id)?.playTime ?? 0
    );
  }, [routineItems, item.id]);

  return (
    <TwoDepthList>
      {item.title}({currentTime} )
    </TwoDepthList>
  );
}
const TwoDepthList = styled.li`
  line-height: 40px;
`;
