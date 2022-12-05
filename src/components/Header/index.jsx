import React from "react";
import styled from "styled-components";

import { LogoSection } from "./LogoSection";
import { ScoreBoard } from "./ScoreBoard";

export function Header() {
  return (
    <HeaderStyle>
      <LogoSection />
      <ScoreBoard />
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  display: flex;
  padding: 0 5rem;
  height: 100px;
  background-color: black;
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    justify-content: start;
}
`;