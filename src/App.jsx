import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import { Header, Container, Footer, GameOver } from "./components";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const { gameOver } = useContext(GlobalContext);
  return (
    <StyledApp>
      {gameOver && <GameOver />}
      <Header />
      <Container />
      <Footer />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  min-height: 100%;
  width: 100%;
`;
