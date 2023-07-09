import styled from "@emotion/styled";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>HEALTH APP</HeaderTitle>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 65px;
  background: rgb(10, 25, 41);
  border-bottom: solid 1px rgba(194, 224, 255, 0.2);
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: sticky;
`;
const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 28px;
  letter-spacing: 0.2;
`;
