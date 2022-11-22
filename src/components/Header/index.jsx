import React from "react";
import styled from "styled-components";
import { LogoSection } from "./LogoSection";
import { ScoreBoard } from "./ScoreBoard";

export function Header({ score, bestScore, lvl }) {
  return (
    <HeaderStyle>
      <LogoSection />
      <ScoreBoard score={score} bestScore={bestScore} lvl={lvl} />
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  display: flex;
  padding: 0 5rem;
  height: 100px;
  background-color: #000000;
`;
