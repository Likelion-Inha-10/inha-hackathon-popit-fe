import { React } from "react";
import styled from "styled-components";
import Flex from "../Flex";
import Layout from "../Layout";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../Button";

const Container = styled(Flex)`
  background-color: white;
  width: 360px;
  height: 200px;
  border-radius: 16px;
  margin-top: ${(props) => (props.margintop ? props.margintop : "none")};
  margin-left: ${(props) => (props.marginleft ? props.marginleft : "none")};
  margin-right: ${(props) => (props.marginright ? props.marginright : "none")};
  margin-bottom: ${(props) =>
    props.marginbottom ? props.marginbottom : "none"};
`;

const Close = styled.div`
  padding: 0px 220px 10px 0px;
`;

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
const Inputpopup = (props) => {
  return (
    <Layout white>
      <Container direction="column" align="center">
        <ButtonWrapper>
          <Close onClick={props.onClick}>
            <IoCloseSharp size="30px" color="black" />
          </Close>
          <Button small>{props.buttoncontent}</Button>
        </ButtonWrapper>
        <StyledInput
          type={props.type}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
      </Container>
    </Layout>
  );
};

export default Inputpopup;
