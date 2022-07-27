import { React } from "react";
import styled from "styled-components";
import Flex from "../Flex";
import Layout from "../Layout";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../Button";
import Input from "../Input";
import Margin from "../Margin";
import { FaCamera } from "react-icons/fa";
import Typography from "../Typography";
import theme from "../../assets/theme";

const Wrapper = styled(Flex)`
  background-color: white;
  width: 360px;
  height: 200px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0 rgb(0, 0, 0, 0.1);
`;
const Container = styled(Flex)`
  height: 170px;
`;

const ButtonWrapper = styled(Flex)``;

const InputWrapper = styled(Flex)`
  height: 128px;
  width: 330px;
  background-color: ${(props) => props.theme.colors.whitegray};
  border-radius: 20px;
`;

const StyledInput = styled.input`
  height: 80px;
  width: 260px;
  border: none;
  background-color: ${(props) => props.theme.colors.whitegray};
  text-align: center;

  :focus {
    outline: none;
  }
`;

const CategoryInput = styled.input`
  width: 60px;
  height: 20px;
  background-color: white;
  border: none;
  box-shadow: 0px 2px 0px 0px rgb(0, 0, 0, 0.15);
  font-size: 12px;
  text-decoration: underline;
  text-underline-position: under;
  font-family: "NanumSquareR";
  :focus {
    text-decoration: underline;
    text-underline-position: under;
    font-family: "NanumSquareR";
  }
`;
const StyledCircle = styled(Flex)`
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 4px 10px 2px rgb(0, 0, 0, 0.08);
  height: 26px;
  width: 26px;
  position: relative;
  left: 25px;
  bottom: 50px;
  z-index: 1;
`;

const InputPopUp = (props) => {
  return (
    <>
      <Wrapper justify="center" align="center">
        <Container direction="column" justify="space-between">
          <ButtonWrapper align="left">
            <IoCloseSharp size="30px" color="black" />
            <Margin width="14px" />
            <Typography align="center" underline regular12 color="main">
              카테고리
            </Typography>
            <Margin width="171px" />
            <Button small>완료</Button>
          </ButtonWrapper>
          <InputWrapper justify="center" align="center">
            <StyledInput />
          </InputWrapper>
        </Container>
      </Wrapper>
      <StyledCircle justify="center" align="center">
        <FaCamera color={theme.colors.middlegray} />
      </StyledCircle>
    </>
  );
};

export default InputPopUp;
