import React from "react";
import Flex from "../../popit-ui/Flex";
import PhotoEdit from "./components";
import styled from "styled-components";
import Layout from "../../popit-ui/Layout";
import Typography from "../../popit-ui/Typography";
import Margin from "./../../popit-ui/Margin/index";

const MenuWrapper = styled(Flex)`
  width: 100%;
  height: 60px;
  border-bottom: 1px #eaeaea solid;
  cursor: pointer;
`;

const StyledInput = styled.input`
  width: 200px;
  height: 30px;
  background-color: white;
  border: none;
  font-size: 16px;
  font-family: "NanumSquareR";
  ::placeholder {
    color: ${(props) => (props.fontcolor ? props.fontcolor : "black")};
  }
`;
const ProfileEdit = ({ api }) => {
  return (
    <>
      <Layout white>
        <PhotoEdit />
        <MenuWrapper align="center">
          <Margin width="30px" height="100%" />
          <Typography bold16>이름</Typography>
          <Margin width="80px" />
          <StyledInput type="type" placeholder="홍길동" />
        </MenuWrapper>
        <MenuWrapper align="center">
          <Margin width="30px" height="100%" />
          <Typography bold16>이메일(아이디)</Typography>
          <Margin width="12px" />
          <StyledInput type="type" placeholder="pop123@popit.com" />
        </MenuWrapper>
        <MenuWrapper align="center">
          <Margin width="30px" height="100%" />
          <Typography bold16>한 줄 소개</Typography>
          <Margin width="43px" />
          <StyledInput type="type" placeholder="소개" fontcolor="#E7E7E7" />
        </MenuWrapper>
      </Layout>
    </>
  );
};

export default ProfileEdit;
