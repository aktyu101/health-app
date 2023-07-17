import styled from "@emotion/styled";
import hexToRgba from "hex-to-rgba";

export default function Button({
  type = "fill",
  children,
  onClick,
  bgColor = "#fff",
  textColor = "#fff",
}) {
  return (
    <StyledButton
      type={type}
      bgColor={bgColor}
      textColor={textColor}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  height: 36px;
  ${({ type, bgColor, textColor }) => `
    background-color: ${type === "text" ? "transparent" : bgColor};
    color: ${type === "text" ? textColor : "#000"};
    &:hover {
        background-color: ${
          type === "text" ? `${hexToRgba("#fff", "0.2")}` : "#333"
        };
    };
  `}
  padding: 0 10px;
  border-radius: 5px;
  cursor: pointer;
`;
