import React from "react";
import styled from "styled-components";
import Flex from "../../../popit-ui/Flex";
import MainHeader from "../../../popit-ui/MainHeader";
import ProfileIcon from "../../../popit-ui/ProfileIcon";
import Typography from "../../../popit-ui/Typography";
import Margin from "../../../popit-ui/Margin";
import { MdNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ProfileWrapper = styled(Flex)`
  width: 100%;
  height: 112px;
  border-bottom: 1px #eaeaea solid;
`;

const ArrowWrapper = styled(Flex)`
  width: 16px;
  height: 100%;
  cursor: pointer;
`;

const UserInfo = styled(Flex)`
  width: 255px;
  height: 60px;
`;

// api 연동시 user 이름, 이메일, 팝 개수, 팔로워, 팔로잉을 props로 전달합니다.
const UserProfile = (props) => {
  const navigate = useNavigate();
  const onProfileClick = () => {
    navigate("/owner-profile");
  };
  return (
    <>
      <MainHeader page="others" title="설정" />
      <ProfileWrapper direction="row" align="center">
        <Margin width="16px" height="100%" />
        <ProfileIcon size48 />
        <Margin width="12px" height="100%" />
        <UserInfo direction="column">
          <Typography bold16>홍길동</Typography>
          <Margin height="2px" width="100%" />
          <Typography regular12>popit123@popit.com</Typography>
          <Margin height="2px" width="100%" />
          <Typography regular12>내 팝 23 팔로워 321 팔로잉 123</Typography>
        </UserInfo>
        <Margin width="16px" height="100%" />
        <ArrowWrapper align="center" onClick={onProfileClick}>
          <MdNavigateNext color="black" />
        </ArrowWrapper>
        <Margin width="12px" height="100%" />
      </ProfileWrapper>
    </>
  );
};

export default UserProfile;
