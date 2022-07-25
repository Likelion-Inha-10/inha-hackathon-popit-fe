import React from "react";
import styled from "styled-components";
import deco from "../img/deco.png";
import Button from "../../../popit-ui/Button";
import { Animated } from "react-animated-css";

const StyledImage = styled.img`
  width: 290px;
  height: 225px;
  z-index: 1;
  padding-top: 60%;
  padding-left: 15%;
  padding-right: 30%;
`;

const TextBox = styled.div`
  font-size: ${(props) => (props.fontsize ? props.fontsize : "32px")};
  padding-top: ${(props) => (props.paddingtop ? props.paddingtop : "none")};
  padding-bottom: ${(props) =>
    props.paddingbottom ? props.paddingbottom : "none"};
  text-align: ${(props) => (props.textalign ? props.textalign : "center")};
  line-height: ${(props) => (props.lineheight ? props.lineheight : "none")};
  font-weigth: ${(props) => (props.fontweight ? props.fontweight : "bold")};
  z-index: 1;
`;

const StyledButton = styled(Button)`
  margin-top: 70px;
  margin-left: 33px;
`;

const Backgroundimg = styled.img`
  height: 674px;
  width: 390px;
  background-image: url("../img/deco.png");
  background-size: cover;
  position: absolute;
  z-index: -1;
`;

const Template = (props) => {
  return (
    <>
      <Backgroundimg src={deco} />
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <StyledImage src={props.image} />
      </Animated>

      <TextBox
        fontsize="16px"
        paddingtop="20%"
        paddingbottom="15px"
        fontweight="bolder"
      >
        <h1>{props.title}</h1>
      </TextBox>
      <TextBox fontsize="16px" textalign="center" lineheight="20px">
        {props.content}
      </TextBox>

      <StyledButton>시작하기</StyledButton>
    </>
  );
};

export default Template;
