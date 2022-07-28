import React from "react";
import styled from "styled-components";
import Margin from "../../../popit-ui/Margin";
import Flex from "../../../popit-ui/Flex/index";
import { BiSearchAlt2 } from "react-icons/bi";

const MenuWrapper = styled(Flex)`
  width: 100%;
  height: 60px;
  border-bottom: 1px #eaeaea solid;
  cursor: pointer;
`;
const TextBox = styled.div`
  width: 50%;
  height: 45px;
  text-align: center;
  padding-top: 15px;
  font-family: "NanumSquare";
  font-size: 16px;
  border-bottom: ${(props) =>
    props.borderbottom ? props.borderbottom : "none"};
  cursor: pointer;
`;
const StyledInput = styled.input`
  background-color: #f7f7f7;
  border-radius: 50px;
  width: 280px;
  height: 40px;
  border: none;
  margin-left: 50px;
`;
const StyledCircle = styled(Flex)`
  border-radius: 50%;
  background-color: none;
  height: 20px;
  width: 20px;
  position: relative;
  bottom: 30px;
  left: 30px;
  z-index: 1;
`;

const List2 = (props) => {
  return (
    <>
      <MenuWrapper>
        <TextBox borderbottom={props.borderbottom1}>팔로워</TextBox>
        <TextBox borderbottom={props.borderbottom2}>팔로잉</TextBox>
      </MenuWrapper>
      <Margin height="20px" fontcolor="#C1C1C1" />
      <StyledInput placeholder="검색" />
      <StyledCircle>
        <BiSearchAlt2 size="20px" color="#C1C1C1" />
      </StyledCircle>
    </>
  );
};

export default List2;
