import styled from "@emotion/styled";
import { createContext } from "react";
import { useCountDown } from "../../hooks/useCountDown";

export const RoutineItemContext = createContext(null);
export default function RoutineItem({ children, routine }) {
  const { play, pause, currentCount, isPlaying, routineItems } = useCountDown(
    routine.items
  );
  return (
    <RoutineItemContext.Provider
      value={{ routine, play, pause, currentCount, isPlaying, routineItems }}
    >
      <RoutineListItem>{children}</RoutineListItem>
    </RoutineItemContext.Provider>
  );
}

const RoutineListItem = styled.li`
  border-radius: 5px;
  border: solid 1px #eee;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  display; flex;
  flex-direction: column;
`;
