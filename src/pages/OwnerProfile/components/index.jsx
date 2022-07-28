import React from "react";
import { useNavigate } from "react-router-dom";
import Margin from "../../../popit-ui/Margin";
import ProfileIcon from "../../../popit-ui/ProfileIcon/index";
import styled from "styled-components";
import Flex from "../../../popit-ui/Flex";
import Typography from "../../../popit-ui/Typography";
import Pop from "../../../popit-ui/Pop";
import B1 from "./B1.png";
import B2 from "./B2.png";
import B3 from "./B3.png";
import { MdOutlineModeEdit } from "react-icons/md";

const ProfileWrapper = styled(Flex)`
  width: 100%;
  height: 100px;
  padding-top: 10px;
  padding-left: 20px;
`;

const ContentWrapper = styled(Flex)`
  width: 250px;
  height: 10px;
  padding-top: 10px;
  padding-right: 10px;
  padding-left: ${(props) => (props.paddingleft ? props.paddingleft : "20px")};
`;

const InfoWrapper = styled(Flex)`
  width: 230px;
  height: 12px;
  padding-right: 50px;
  padding-top: 15px;
`;

const NameWrapper = styled(Flex)``;

const PopWrapper = styled(Flex)`
  width: 304px;
  height: 500px;
  padding-left: 25px;
  padding-top: 50px;
`;
const ProfileDetail = (props) => {
  const navigate = useNavigate();

  const onClickFollower = () => {
    navigate("/follower-list");
  };
  const onClickFollowing = () => {
    navigate("/following-list");
  };
  return (
    <>
      <ProfileWrapper>
        <NameWrapper direction="column">
          <ProfileIcon size60 />
          <Margin height="10px" />
          <Typography bold16 center>
            홍길동
          </Typography>
        </NameWrapper>
        <InfoWrapper direction="column">
          <ContentWrapper paddingleft="20px" justify="space-around">
            <Typography regular12>내 팝</Typography>
            <Typography regular12 onClick={onClickFollower}>
              팔로워
            </Typography>
            <Typography regular12 onClick={onClickFollowing}>
              팔로잉
            </Typography>
          </ContentWrapper>
          <ContentWrapper justify="space-around">
            <Typography bold12>615</Typography>
            <Typography bold12>324</Typography>
            <Typography bold12>124</Typography>
          </ContentWrapper>
        </InfoWrapper>
        <MdOutlineModeEdit size="20px" onClick={props.onClickEvent} />
      </ProfileWrapper>

      <PopWrapper direction="column">
        <Pop src={B1} small>
          블라블라
        </Pop>
        <Margin height="20px" />
        <Pop src={B2} small>
          블라블라
        </Pop>
        <Margin height="20px" />
        <Pop src={B3} small>
          블라블라
        </Pop>
      </PopWrapper>
    </>
  );
};

export default ProfileDetail;
