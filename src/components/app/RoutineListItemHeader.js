import styled from "@emotion/styled";
import Button from "../button/Button";
import RoutineCountDown from "./RoutineCountDown";
import { useContext } from "react";
import { RoutineItemContext } from "./RoutineItem";

export default function RoutineListItemHeader({ onRegist, onDelete }) {
  const { isPlaying, currentCount, pause, play, routine } =
    useContext(RoutineItemContext);
  const handleDelet = (id) => {
    if (isPlaying) {
      alert("진행 중인 운동이 있어서 삭제할 수 없습니다.");
      return;
    }

    window.confirm("삭제하시겠습니까?") && onDelete(id);
  };

  return (
    <StyledHeader>
      <span>
        {routine.title} (
        <RoutineCountDown seconds={currentCount} />)
      </span>
      <SectionListItemAction>
        <Button type="text" onClick={() => onRegist(routine.id)}>
          운동 등록
        </Button>
        <Button
          type="text"
          onClick={() => {
            handleDelet(routine.id);
          }}
        >
          운동 삭제{" "}
        </Button>
        <Button type="text" onClick={isPlaying ? pause : play}>
          운동 {isPlaying ? "멈춤" : "시작"}
        </Button>
      </SectionListItemAction>
    </StyledHeader>
  );
}

//interval은 중첩됨!기존 인터벌값은 초기화해야함
const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  alig-itmes: center;
`;
const SectionListItemAction = styled.div``;
//usecontext
