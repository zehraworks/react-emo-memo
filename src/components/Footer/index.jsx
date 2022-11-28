import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterWrapper>
      <p>Copyright © 2022 aydinfz</p>
      <GithubLink href="https://github.com/aydinfz" target="_blank">
        <FaGithub />
      </GithubLink>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  padding: 0.5rem;
  background-color: black;
  color: white;
  @media (max-width:600px) {
    height: 30px;
  }
`;

const GithubLink = styled.a`
  display: flex;
  padding-bottom: 0.3rem;
  margin-left: 1rem;
  color: white;
  font-size: 1.8rem;
  transition: transform 0.7s;
  &:hover {
    transform: rotate(360deg);
  }
  &:active {
    color: white;
  }
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;
