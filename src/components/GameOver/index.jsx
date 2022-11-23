import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../context/GlobalContext";
import img from "./skull.png";

export function GameOver() {
  const { score, setScore, setLvl, setGameOver } = useContext(GlobalContext);
  const startNewGame = () => {
    setScore(0);
    setLvl(1);
  };
  return (
    <StyledGameOver>
      <Skull src={img} />
      <Text>Game Over</Text>
      <Score>Your score: {score}</Score>
      <Btn
        onClick={() => {
          setGameOver(false);
          startNewGame();
        }}
      >
        New Game
      </Btn>
    </StyledGameOver>
  );
}

const StyledGameOver = styled.div`
  position: absolute;
  z-index: 495;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  height: 100vh;
  width: 100vw;
  color: #ffffff;
`;

const Skull = styled.img`
  height: 90px;
  width: 90px;
  margin-bottom: 20px;
  animation: rotation 1s infinite ease-in-out alternate;
  @keyframes rotation {
    from {
      transform: scale(0.7) rotate(-10deg);
    }
    to {
      transform: scale(1) rotate(10deg);
    }
  }
`;

const Text = styled.h1`
  position: relative;
`;

const Score = styled.p`
  position: relative;
  margin-bottom: 15px;
`;

const Btn = styled.button`
  background-color: #eaff4b;
  font-size: large;
  font-weight: bold;
  padding: 5px 10px;
  border-style: none;
  cursor: pointer;
  &:hover {
    transform: translate(0%, -8%);
    transition: 0.1s ease-out;
    box-shadow: 1px 1px 85px 0px rgba(244, 242, 242, 0.837);
  }
`;
