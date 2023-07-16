import { useState } from "react";
import styled from "@emotion/styled";
import Button from "./button/Button";

export default function Contents() {
  const [modalOpen, setModalOpen] = useState(false);
  const [routine, setRoutines] = useState([
    { id: 1, title: "루틴 목록 1" },
    { id: 2, title: "루틴 목록 2" },
  ]);
  function showModal() {
    setModalOpen(true);
  }
  console.log(modalOpen);

  return (
    <ContentsContainer>
      <RoutineAction>
        <Button onClick={() => showModal()}>루틴 등록</Button>
      </RoutineAction>
      {modalOpen && (
        <RoutinePopupContainer>
          <button>x</button>
        </RoutinePopupContainer>
      )}

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

const RoutinePopupContainer = styled.div`
  width: 800px;
  height: 600px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  transform: translate(-50%, -50%);
  border-radius: 5px;
`;

const ContentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  background: rgb(10, 25, 41);
  position: relative;
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
