import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = (props) => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [lvl, setLvl] = useState(1);
  const [gameOver, setGameOver] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        score,
        setScore,
        bestScore,
        setBestScore,
        lvl,
        setLvl,
        gameOver,
        setGameOver,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
