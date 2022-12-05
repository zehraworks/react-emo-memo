import React, { useContext } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styled from "styled-components";
import { GlobalContext } from "../../../context/GlobalContext";

export function CardSkeleton() {
  const { cardsNum } = useContext(GlobalContext);
  return Array(cardsNum)
    .fill(0)
    .map((_, i) => (
      <SkeletonTheme key={i} baseColor="#202020" highlightColor="#444">
        <StyledCard>
          <StyledSkeleton
            circle
            // style={{ marginTop: "25px", marginBottom: "10px" }}
          />
          <StyledSkeletonLine
            count={2}
            // style={{ marginTop: "10px" }}
          />
        </StyledCard>
      </SkeletonTheme>
    ));
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
  background-color: transparent;
  box-shadow: 1px 1px 10px 0px rgba(250, 250, 250, 0.837);

  @media (max-width: 600px) {
    height: 100px;
    width: 75px;
    margin: 5px;
  }
`;

const StyledSkeleton = styled(Skeleton)`
  margin: 25px 0 10px 0;
  height: 80px;
  width: 80px;
  @media (max-width: 600px) {
    height: 40px;
    width: 40px;
    margin: 10px 0 5px 0;
  }
`;

const StyledSkeletonLine = styled(Skeleton)`
  margin-top: 10px;
  width: 100px;
  height: 15px;
  @media (max-width: 600px) {
    margin-top: 2px;
    height: 10px;
    width: 60px;
  }
`;
