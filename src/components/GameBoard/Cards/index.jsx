import React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Card } from "../Card";

export function Cards({
  score,
  setScore,
  bestScore,
  setBestScore,
  lvl,
  setLvl,
  gameOver,
  setGameOver,
}) {
  const BASE_URL = "https://emoji-api.com/emojis";
  const [data, setData] = useState([]);
  const [cardsNum, setCardsNum] = useState(3);
  const ref = useRef([]);

  useEffect(() => {
    async function fetchEmojis() {
      const response = await fetch(
        `${BASE_URL}?access_key=${import.meta.env.VITE_API_KEY}`
      );
      const json = await response.json();
      const result = await json.slice(0, cardsNum);
      setData(result);
    }
    fetchEmojis();
  }, [cardsNum]);

  useEffect(() => {
    ref.current = [];
    setCardsNum(2 * lvl + 1);
  }, [lvl]);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score]);

  const shuffle = (_data) => {
    return [..._data].sort(() => 0.5 - Math.random());
  };

  const onClickCard = (id) => {
    ref.current = [id, ...ref.current];
    setData(shuffle(data));
    checkGame();
    nextLvl();
  };

  const checkGame = () => {
    if (new Set(ref.current).size !== ref.current.length) {
      setGameOver(true);
    } else {
      setGameOver(false);
      setScore(score + 1);
    }
  };

  const nextLvl = () => {
    if (cardsNum === ref.current.length && gameOver === false) {
      setLvl(lvl + 1);
    }
  };

  console.log({ score: score });

  console.log({ lvl: lvl });
  console.log(ref.current);
  console.log(gameOver);

  return (
    <Wrapper>
      {data?.map((d) => (
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
