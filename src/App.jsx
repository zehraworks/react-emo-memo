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
  display: block;
  @media only screen and (orientation: landscape) {
    -webkit-transform: rotate(0deg);

    -moz-transform: rotate(0deg);

    -o-transform: rotate(0deg);

    -ms-transform: rotate(0deg);

    transform: rotate(0deg);
  }
`;
