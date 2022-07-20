//나중에 pages 폴더에 옮길 예정
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  top: -230px;
  width: 100%;
  min-height: 750px;
  background: linear-gradient(240deg, #ff6073 -20%, #ffc74a 100%);
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  box-shadow: 0 4px 10px -4px rgb(0, 0, 0, 0.3);
`;

const LogoContainer = styled.div`
  position: relative;
  top: 250px;
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
`;

const Circle = styled.div`
  position: relative;
  z-index: 100;
  top: 70px;
  left: 215px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(255, 226, 89, 0.3);
`;

const Intro = () => {
  return (
    <Container>
      <LogoContainer>
        <Circle />
        <Title>POP IT!</Title>
        <SubTitle>내 손 안의 포스트잇, 팝잇!</SubTitle>
      </LogoContainer>
    </Container>
  );
};

export default Intro;
