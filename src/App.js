import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Header from "./components/app/Header";
import Contents from "./components/Contents";
import { Global } from "@emotion/react";

const reset = css`
  h1,
  div,
  section,
  header,
  ul,
  ol,
  dl {
    margin: 0;
    padding: 0;
  }
  ul,
  ol,
  dl {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  button {
    border: 0;
  }
`;

function App() {
  return (
    <>
      <Global styles={reset} />
      <AppContainer>
        <Header />
        <Contents />
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default App;
