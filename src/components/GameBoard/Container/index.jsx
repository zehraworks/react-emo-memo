import React from "react";
import styled from "styled-components";
import { Cards } from "../Cards";

export function Container() {
  return (
    <StyledContainer>
      <Cards />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #0e1010;
  overflow-y: scroll;
  height: 80vh;
`;
