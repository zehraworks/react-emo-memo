import React from "react";
import styled from "styled-components";
import logo from "./poop.png";

export function LogoSection() {
  return (
    <StyledLogo>
      <Logo src={logo} />
      <GameName>EmoMemo</GameName>
    </StyledLogo>
  );
}

const StyledLogo = styled.div`
  display: flex;
`;

const Logo = styled.img`
  display: block;
  margin: auto 0;
  height: 60px;
  @media (max-width: 425px) {
    height: 35px;
  }
  @media (max-width: 600px) {
    height: 40px;
  }
`;

const GameName = styled.h1`
  color: white;
  margin: 35px 0 0 20px;
  font-size: 35px;
  font-weight: 700;
  @media (max-width: 425px) {
    margin: 15px 0 0 20px;
  }
  @media (max-width: 600px) {
    font-size: 25px;
    font-weight: 600;
    padding: 5px 0 0 0;
  }
`;
