import styled from "@emotion/styled";
import hexToRgba from "hex-to-rgba";

export default function Button({ type = "fill", children }) {
  return <StyledButton type={type}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  height: 36px;
  ${({ type }) => `
    background-color: ${type === "text" ? "transparent" : "#fff"};
    color: ${type === "text" ? "#eee" : "rgb(10, 25, 41)"};
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
