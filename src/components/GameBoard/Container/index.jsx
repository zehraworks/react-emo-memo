import React from "react";
import styled from "styled-components";
import { Cards } from "../Cards";

export function Container({
  score,
  setScore,
  bestScore,
  setBestScore,
  lvl,
  setLvl,
  gameOver,
  setGameOver,
}) {
  return (
    <StyledContainer>
      <Cards
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
        lvl={lvl}
        setLvl={setLvl}
        gameOver={gameOver}
        setGameOver={setGameOver}
      />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #0e1010;
  overflow-y: scroll;
  height: 80vh;
`;
