import React, { useCallback } from "react";
import styled from "styled-components";

export function Card({ character, name, id, onClickCard }) {
  const capitalizeFirstLetter = useCallback((str) => {
    return str[0].toUpperCase() + str.slice(1);
  }, []);
  return (
    <StyledCard
      onClick={() => {
        onClickCard(id);
      }}
    >
      <CardEmo>{character}</CardEmo>
      <CardInfo>{capitalizeFirstLetter(name)}</CardInfo>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px;
  width: 150px;
  height: 200px;

  border-radius: 5px;
  background-color: black;
  box-shadow: 1px 1px 10px 0px rgba(250, 250, 250, 0.837);
  transition: all 200ms;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transform: translate(0%, -3%);
    transition: 0.1s ease-out;
    box-shadow: 1px 1px 10px 0px #ffe83a;
  }

  @media (max-width: 600px) {
    height: 100px;
    width: 75px;
    margin: 5px;
  }
`;

const CardEmo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 75px;
  height: 100px;
  width: 100px;
  margin: 10px;

  @media (max-width: 600px) {
    font-size: 40px;
    height: 45px;
    width: 45px;
  }
`;
const CardInfo = styled.div`
  color: white;
  padding: 0 10px 10px;
  @media (max-width: 600px) {
    padding: 0 3px 3px;
    font-size: 8px;
  }
`;
