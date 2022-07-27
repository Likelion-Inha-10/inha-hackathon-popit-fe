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
  border-radius: 16px;
`;
const Container = styled(Flex)``;

const Close = styled.div``;

const ButtonWrapper = styled(Flex)`
  padding-top: 10px;
`;

const StyledInput = styled.input`
  width: 320px;
  height: 130px;
  background-color: #f7f7f7;
  border: none;
  border-radius: 20px;
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
  box-shadow: 0px 4px 10px 2px rgb(0, 0, 0, 0.15);
  height: 26px;
  width: 26px;
  position: relative;
  bottom: 33px;
  left: 5px;
  z-index: 1;
`;

const InputPopUp = (props) => {
  return (
    <Wrapper justify="center" align="center">
      <Container direction="column" jusify="baseline">
        <ButtonWrapper align="left">
          <Close onClick={props.onClick}>
            <IoCloseSharp size="30px" color="black" />
          </Close>
          <Margin width="20px" />
          <Typography underline regular12 color="main">
            카테고리
          </Typography>
          <Margin width="130px" />
          <Button small>{props.buttoncontent}</Button>
        </ButtonWrapper>
        <StyledInput
          type={props.type}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
        <StyledCircle align="center" justify="center">
          <FaCamera color="grey" />
        </StyledCircle>
      </Container>
    </Wrapper>
  );
};

export default InputPopUp;
