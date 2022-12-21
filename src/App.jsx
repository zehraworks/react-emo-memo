import React from "react";
import styled from "styled-components";
import { Header, Container, Footer, GameOver } from "./components";
import { useGlobal } from "./context/GlobalContext";

function App() {
  const { gameOver } = useGlobal();
  return (
    <StyledApp>
      {gameOver ? (
        <GameOver />
      ) : (
        <>
          <Header />
          <Container />
          <Footer />
        </>
      )}
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  min-height: 100%;
  width: 100%;
`;
