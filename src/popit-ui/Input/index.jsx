import styled from "styled-components";
import React, { useState } from "react";
import Margin from "../Margin";
import Flex from "../Flex";
import { BsCheck2 } from "react-icons/bs";

const Wrapper = styled(Flex)`
  background-color: white;
  width: 324px;
  height: 48px;
  border-radius: 50px;

  border: 1px solid
    ${(props) =>
      props.typing ? props.theme.colors.main : props.theme.colors.gray};
`;

const Container = styled(Flex)`
  width: 290px;
  height: 24px;
`;
const StyledInput = styled.input`
  width: 260px;
  outline: 0;
  border: none;
  ::placeholder {
    color: lightgrey;
  }
`;

const Input = (props) => {
  const [typing, setTyping] = useState(false);

  const BorderColor = (e) => {
    setTyping(true);
  };
  return (
    <Wrapper typing={typing} justify="center" align="center">
      <Container justify="space-between" align="center">
        <StyledInput onInput={BorderColor} placeholder={props.placeholder} />
        {typing ? (
          <BsCheck2 size="25" color="#FFC74A" />
        ) : (
          <Margin height="50px" width="50px" />
        )}
      </Container>
    </Wrapper>
  );
};
export default Input;

/* 사용법
1. borderColor="" -> 테두리 색 변경 

(미완성임.
  의문: 입력값이 유효한지 검사가 필요한가?
  */
