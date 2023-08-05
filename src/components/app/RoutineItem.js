import styled from "@emotion/styled";
import { createContext } from "react";
import { useMemo } from "react";
import { useCountDown } from "../../hooks/useCountDown";

export const RoutineItemContext = createContext(null);

export default function RoutineItem({ children, routine }) {
  const totalPlayTime = useMemo(
    () => routine.items.reduce((a, b) => a + Number(b.playTime ?? 0), 0),
    [routine.items]
  );
  const { play, pause, currentCount, isPlaying } = useCountDown(totalPlayTime);
  return (
    <RoutineItemContext.Provider
      value={{ routine, play, pause, currentCount, isPlaying }}
    >
      <RoutineListItem>{children}</RoutineListItem>;
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
