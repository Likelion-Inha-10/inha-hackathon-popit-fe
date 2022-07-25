import React from "react";
import styled from "styled-components";
import deco from "../img/deco.png";
import Button from "../../Button";

const StyledImage = styled.div`
  image: url(${(props) => props.image});
  width: 30px;
  height: 30px;
  z-index: 5;
`;

const TextBox = styled.div`
  width: 100%;
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
  margin-top: 80px;
  margin-left: 33px;
`;

const Backgroundimg = styled.img`
  height: 674px;
  width: 390px;
  background-image: url("../img/deco.png");
  background-size: cover;
  position: absolute;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

const Template = (props) => {
  return (
    <>
      <Backgroundimg src={deco} />
      <StyledImage image={props.image} />
      <Wrapper>
        <TextBox
          fontsize="32px"
          paddingtop="135%"
          paddingbottom="15px"
          fontweight="bolder"
        >
          <h1>{props.title}</h1>
        </TextBox>
        <TextBox fontsize="16px" textalign="center" lineheight="20px">
          {props.content}
        </TextBox>

        <StyledButton>시작하기</StyledButton>
      </Wrapper>
    </>
  );
};

export default Template;
