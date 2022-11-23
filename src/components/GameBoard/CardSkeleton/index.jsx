import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styled from "styled-components";

export function CardSkeleton() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <StyledCard>
        <Skeleton
          circle
          height={80}
          width={80}
          style={{ marginTop: "25px", marginBottom: "10px" }}
        />
        <Skeleton
          width={100}
          height={15}
          count={2}
          style={{ marginTop: "10px" }}
        />
      </StyledCard>
    </SkeletonTheme>
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
  background-color: transparent;
  box-shadow: 1px 1px 10px 0px rgba(250, 250, 250, 0.837);
`;
