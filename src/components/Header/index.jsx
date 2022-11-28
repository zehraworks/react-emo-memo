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
  width: 100vw;
  background-color: #000000;
`;
