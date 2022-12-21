import { useContext } from "react";
import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [value, setValue] = useState({
    score: 0,
    bestScore: 0,
    cardsNum: 3,
    lvl: 1,
    gameOver: false,
  });

  return (
    <GlobalContext.Provider
      value={{
        ...value,
        setValue: (data) => {
          setValue({ ...value, ...data });
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobal = () => {
  return useContext(GlobalContext);
};
export { useGlobal, GlobalProvider };
