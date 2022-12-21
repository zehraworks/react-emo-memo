import React, { useState, useEffect, useRef } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { CardSkeleton } from "../CardSkeleton";
import styled from "styled-components";
import { useGlobal } from "../../../context/GlobalContext";
import { Card } from "../Card";

export function Cards() {
  const BASE_URL = "https://emoji-api.com/emojis";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef([]);

  const { score, bestScore, cardsNum, lvl, gameOver, setValue } = useGlobal();

  useEffect(() => {
    async function fetchEmojis() {
      const response = await fetch(
        `${BASE_URL}?access_key=${import.meta.env.VITE_API_KEY}`
      );
      const json = await response.json();
      const result = await json.slice(0, cardsNum);
      setData(result);
      setIsLoading(false);
    }
    fetchEmojis();
  }, [cardsNum]);

  useEffect(() => {
    ref.current = [];
    setValue({ cardsNum: 2 * lvl + 1 });
  }, [lvl]);

  useEffect(() => {
    if (score > bestScore) {
      setValue({ bestScore: bestScore });
    }
  }, [score]);

  const shuffle = (_data) => {
    return [..._data].sort(() => 0.5 - Math.random());
  };

  const onClickCard = (id) => {
    ref.current = [id, ...ref.current];
    setData(shuffle(data));
    checkGame();
  };

  const checkGame = () => {
    if (new Set(ref.current).size !== ref.current.length) {
      setValue({ gameOver: true, cardsNum: 3 });
    } else {
      setValue({
        gameOver: false,
        score: score + 1,
        lvl: cardsNum === ref.current.length ? lvl + 1 : lvl,
      });
    }
  };

  return (
    <Wrapper>
      {isLoading && <CardSkeleton />}
      {data.map((d) => (
        <Card
          key={d.codePoint}
          character={d.character}
          name={d.unicodeName}
          id={d.codePoint}
          onClickCard={onClickCard}
        />
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px;
  padding: 30px;
`;
