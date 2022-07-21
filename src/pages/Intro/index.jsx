import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const slideOut = keyframes`
  0%{
    transform: translateY(0px);
  }
  100%{
    transform: translateY(-760px);
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 760px;
  background: linear-gradient(270deg, #ff7c69 -30%, #ffc84b 100%);
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 10%;
  box-shadow: 0 4px 10px -4px rgb(0, 0, 0, 0.3);
  animation-name: ${slideOut};
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-delay: 1s;
  transform: translateY(0px);
`;

const LogoContainer = styled.div`
  position: relative;
  top: 100px;
  width: 300px;
  height: 100px;
  border: 0;
  margin: 230px 30px 30px 30px;
  text-align: center;
`;

const Title = styled.h1`
  font-family: "Gmarket Sans";
  font-weight: bold;
  text-shadow: 0 2px 5px rgb(0, 0, 0, 0.2);
  font-size: 48px;
  margin-bottom: 0px;
  color: white;
  position: relative;
`;

const SubTitle = styled.p`
  font-family: "Gmarket Sans";
  text-shadow: 0 2px 5px rgb(0, 0, 0, 0.2);
  font-size: 14px;
  margin-top: 5px;
  color: white;
  position: relative;
  top: -30px;
`;

const Circle = styled.div`
  position: relative;
  top: -25px;
  left: 215px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(255, 226, 89, 0.3);
`;

const Intro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(`/tutorial`);
    }, 3000);
  });

  return (
    <Container>
      <LogoContainer>
        <Title>POP IT!</Title>
        <Circle />
        <SubTitle>내 손 안의 포스트잇, 팝잇!</SubTitle>
      </LogoContainer>
    </Container>
  );
};

export default Intro;
