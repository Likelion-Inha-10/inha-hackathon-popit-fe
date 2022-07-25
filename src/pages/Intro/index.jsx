import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Layout from "../../popit-ui/Layout";
import Typography from "../../popit-ui/Typography";
import RoundBox from "./../../popit-ui/RoundBox/index";

const slideOut = keyframes`
  0%{
    transform: translateY(0px);
  }
  100%{
    transform: translateY(-760px);
  }
`;

const AnimationBox = styled.div`
  position: relative;
  top: -230px;
  animation-name: ${slideOut};
  animation-duration: 1.5s;
  animation-iteration-count: 1;
  animation-delay: 1.5s;
`;

const LogoContainer = styled.div`
  position: relative;
  top: 350px;
  left: 10px;
  width: 300px;
  height: 200px;
  border: none;
  margin: 230px 30px 30px 30px;
  text-align: center;
  text-shadow: 0 2px 5px rgb(0, 0, 0, 0.2);
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

const TextWrapper = styled.div`
  position: relative;
  top: -25px;
`;

const Intro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(`/tutorial`);
    }, 2900);
  });

  return (
    <Layout white>
      <AnimationBox>
        <RoundBox gradation up height="760px">
          <LogoContainer>
            <Typography size="48px" color="white">
              POP IT
            </Typography>
            <Circle />
            <TextWrapper>
              <Typography color="white" small>
                내 손 안의 포스트잇, 팝잇
              </Typography>
            </TextWrapper>
          </LogoContainer>
        </RoundBox>
      </AnimationBox>
    </Layout>
  );
};

export default Intro;
