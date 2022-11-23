import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

export function CardSkeleton() {
  return (
    <StyledCard>
      <Skeleton
        width={150}
        height={200}
        borderRadius={5}
        baseColor="transparent"
      />
      <CardEmo>
        <Skeleton circle width={80} height={80} />
      </CardEmo>
      <CardInfo>
        <Skeleton count={2} width={70} height={10} />
      </CardInfo>
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

  background-color: transparent;
  border-color: #202020;
  border-style: solid;
  border-width: 5px;
  border-radius: 5px;
`;

const CardEmo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80px;
  width: 100px;
  margin-bottom: 20px;
`;
const CardInfo = styled.div`
  /*   display: flex;
  padding: 0 10px 10px;
  height: 20px;
  width: 30px; */
`;
