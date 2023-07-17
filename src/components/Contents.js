import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "./button/Button";
import RegistModal from "./registPortal/RegistModal";

const currentRoutine =
  JSON.parse(window.localStorage.getItem("routines")) ?? [];
export default function Contents() {
  const [registRoutine, setRegistRoutine] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [routines, setRoutines] = useState(currentRoutine);

  const handleOpenRegistRoutine = () => {
    setModalOpen(true);
  };
  const handleCancleRegistRoutine = () => {
    setModalOpen(false);
  };
  const handleRegistRoutine = () => {
    console.log("regist");
    setRoutines((routines) => [
      ...routines,
      {
        id: routines.length + 1,
        title: registRoutine,
        item: [
          {
            id: 1,
            title: "스쿼트",
          },
          { id: 2, title: "걷기" },
        ],
      },
    ]);
    setRegistRoutine("");
    setModalOpen(false);
    //초기화 > close
  };
  const handleChangeRoutineInput = (event) => {
    setRegistRoutine(event.target.value);
  };

  useEffect(() => {
    window.localStorage.setItem("routines", JSON.stringify(routines));
  }, [routines]);
  //string 형태만 저장, key, value 필요

  return (
    <ContentsContainer>
      <RoutineAction>
        <Button onClick={handleOpenRegistRoutine}>루틴 등록</Button>
      </RoutineAction>
      {modalOpen && (
        <RegistModal
          onRegist={handleRegistRoutine}
          onCancel={handleCancleRegistRoutine}
        >
          <StyledInput
            type="text"
            value={registRoutine}
            onChange={handleChangeRoutineInput}
          />
        </RegistModal>
      )}
      {/* {modalOpen && (
        <RoutinePopupContainer>
          <CloseBtn>x</CloseBtn>
        </RoutinePopupContainer>
      )} */}

      <RoutineList>
        {routines.map((routine) => {
          return (
            <RoutineListItem key={routine.id}>
              <span>루틴 목록1</span>
              <SectionListItemAction>
                <Button type="text">운동 등록</Button>
                <Button type="text">운동 삭제</Button>
                <Button type="text">운동 시작</Button>
              </SectionListItemAction>
              <ul>
                {routine.item.map((item) => {
                  return <li key={item.id}>{item.title}</li>;
                })}
              </ul>
            </RoutineListItem>
          );
        })}
      </RoutineList>
    </ContentsContainer>
  );
}

// const RoutinePopupContainer = styled.div`
//   width: 800px;
//   height: 600px;
//   background-color: #fff;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   display: block;
//   transform: translate(-50%, -50%);
//   border-radius: 5px;
// `;

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
const SectionListItemAction = styled.div``;
const StyledInput = styled.input`
  border-radius: 5px;
  width: 100%;
  outline: none;
  height: 30px;
  border: solid 1px #ddd;
`;
//팝업 > 제목 입력하여 리스트 추가
