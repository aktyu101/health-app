import { useState } from "react";
import styled from "@emotion/styled";
import Button from "./button/Button";

export default function Contents() {
  const [routine, setRoutines] = useState([
    { id: 1, title: "루틴 목록 1" },
    { id: 2, title: "루틴 목록 2" },
  ]);
  return (
    <ContentsContainer>
      <RoutineAction>
        <Button>루틴 등록</Button>
      </RoutineAction>

      <RoutineList>
        {routine.map((routine) => {
          return (
            <RoutineListItem key={routine.id}>
              <span>루틴 목록1</span>
              <sectionListItemAction>
                <Button type="text">운동 등록</Button>
                <Button type="text">운동 삭제</Button>
                <Button type="text">운동 시작</Button>
              </sectionListItemAction>
            </RoutineListItem>
          );
        })}
      </RoutineList>
    </ContentsContainer>
  );
}

const ContentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  background: rgb(10, 25, 41);
`;

const RoutineAction = styled.div`
  padding: 0 20px;
  margin-top: 20px;
`;

const RoutineList = styled.ul`
  margin-top: 20px;
  padding: 0 20px;
  color: #eee;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const RoutineListItem = styled.li`
  border-radius: 5px;
  border: solid 1px #eee;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const sectionListItemAction = styled.div``;
//팝업 > 제목 입력하여 리스트 추가
