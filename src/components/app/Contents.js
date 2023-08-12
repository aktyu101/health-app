import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "../button/Button";
import RegistModal from "../registPortal/RegistModal";
import RoutineListItemHeader from "./RoutineListItemHeader";
import RoutineItem from "./RoutineItem";
import RoutineChildItem from "./RoutineChildItem";

const currentRoutine =
  JSON.parse(window.localStorage.getItem("routines")) ?? [];
export default function Contents() {
  const [registRoutine, setRegistRoutine] = useState("");
  const [registRoutineItem, setRegistRoutineItem] = useState({
    name: "",
    playTime: 0,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [openRegistId, setOpenRegistId] = useState(null);
  const [modalType, setModalType] = useState("group");
  const [routines, setRoutines] = useState(currentRoutine);

  const handleOpenRegistRoutine = () => {
    setModalOpen(true);
    setModalType("group");
  };
  const handleOpenRegistRoutineItem = (id) => {
    setModalOpen(true);
    setModalType("item");
    setOpenRegistId(id);
  };
  const handleCancleRegistRoutine = () => {
    setModalOpen(false);
  };
  const handleDeleteRoutine = (id) => {
    console.log("deleteId", id);
    setRoutines((routines) => routines.filter((routine) => routine.id !== id));
  };
  //list

  const handleRegistRoutine = () => {
    if (modalType === "group") {
      console.log("regist");
      setRoutines((routines) => [
        ...routines,
        {
          id: routines.length + 1,
          title: registRoutine,
          items: [],
        },
      ]);
      setRegistRoutine("");
    } else {
      setRoutines((routines) =>
        routines.map((routine) => {
          return openRegistId === routine.id
            ? {
                ...routine,
                items: [
                  ...routine.items,
                  {
                    id: routine.items.length + 1,
                    title: registRoutineItem.name,
                    playTime: registRoutineItem.playTime,
                  },
                ],
              }
            : routine;
        })
      );
    }
    setModalOpen(false);
    //초기화 > close
  };

  const handleChangeRoutineInput = (event) => {
    setRegistRoutine(event.target.value);
  };
  const handleChangeRoutineItemInput = (event) => {
    setRegistRoutineItem((item) => ({
      ...item,
      name: event.target.value,
    }));
  };
  const handleChangeRoutineItemPlayTime = (event) => {
    setRegistRoutineItem((item) => ({
      ...item,
      playTime: event.target.value,
    }));
    //객체 상태변경
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
          {modalType === "group" ? (
            <StyledInput
              type="text"
              value={registRoutine}
              onChange={handleChangeRoutineInput}
            />
          ) : (
            <div
              style={{ display: "flex", plexDirection: "column", gap: "5px" }}
            >
              <StyledInput
                placeholder="운동 이름을 입력해주세요"
                type="text"
                value={registRoutineItem.name}
                onChange={handleChangeRoutineItemInput}
              />
              <StyledInput
                type="text"
                value={registRoutineItem.playTime}
                onChange={handleChangeRoutineItemPlayTime}
              />
            </div>
          )}
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
            <RoutineItem key={routine.id} routine={routine}>
              <RoutineListItemHeader
                onRegist={handleOpenRegistRoutineItem}
                onDelete={handleDeleteRoutine}
              ></RoutineListItemHeader>

              <WrapTwoDepthList>
                {routine.items.map((item) => {
                  return (
                    <RoutineChildItem
                      key={item.id}
                      item={item}
                    ></RoutineChildItem>
                  );
                })}
              </WrapTwoDepthList>
            </RoutineItem>
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
const SectionListItemAction = styled.div``;
const StyledInput = styled.input`
  border-radius: 5px;
  width: 100%;
  outline: none;
  height: 30px;
  border: solid 1px #ddd;
`;
const WrapTwoDepthList = styled.ul`
  border-top: solid 1px #fff;
`;
const TwoDepthList = styled.li`
  line-height: 40px;
`;
//팝업 > 제목 입력하여 리스트 추가
