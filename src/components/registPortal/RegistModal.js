import { createPortal } from "react-dom";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Button from "../button/Button";

export default function RegistModal({ children, onRegist, onCancel }) {
  return createPortal(
    <PopupContainer
      initial={{
        scale: 0,
        opacity: 0,
        x: "-50%",
        y: "-50%",
      }}
      animate={{
        scale: 1,
        opacity: 1,
        x: "-50%",
        y: "-50%",
      }}
    >
      <ModalContent>{children}</ModalContent>
      <ModalAction>
        <Button bgColor="#eee" onClick={onRegist}>
          등록
        </Button>
        <Button bgColor="#eee" onClick={onCancel}>
          취소
        </Button>
      </ModalAction>

      <CloseBtn>x</CloseBtn>
    </PopupContainer>,
    document.querySelector("#modal")
  );
}

const PopupContainer = styled(motion.div)`
  width: 800px;
  height: 600px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const CloseBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
`;
const ModalContent = styled.div`
  flex-grow: 1;
`;
const ModalAction = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
`;
