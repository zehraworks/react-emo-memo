import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import { Header, Container, Footer, GameOver } from "./components";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [lvl, setLvl] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  return (
    <StyledApp>
      {console.log({ lvl: lvl })}
      {gameOver && (
        <GameOver
          score={score}
          setScore={setScore}
          setLvl={setLvl}
          setGameOver={setGameOver}
        />
      )}
      <Header score={score} bestScore={bestScore} lvl={lvl} />
      <Container
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
        lvl={lvl}
        setLvl={setLvl}
        gameOver={gameOver}
        setGameOver={setGameOver}
      />
      <Footer />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  min-height: 100%;
`;
