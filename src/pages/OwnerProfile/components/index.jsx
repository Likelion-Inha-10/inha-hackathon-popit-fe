import React, { useState } from "react";
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
import Modal from "../../../popit-ui/Modal";
import { IoChevronDownSharp } from "react-icons/io5";
import theme from "../../../assets/theme";

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

const ClassificationWrapper = styled(Flex)`
  height: 60px;
  width: 80%;
`;

const Classification = styled(Flex)`
  height: 40px;
  cursor: pointer;
`;

const PopWrapper = styled(Flex)`
  width: 304px;
  height: 500px;
  padding-left: 25px;
  padding-top: 50px;
`;
const ProfileDetail = (props) => {
  const [clickMore, setClickMore] = useState(false);
  const [popSave, setPopSave] = useState(false);
  const navigate = useNavigate();

  const onClickFollower = () => {
    navigate("/follower-list");
  };
  const onClickFollowing = () => {
    navigate("/following-list");
  };
  return (
    <>
      {clickMore ? (
        <Modal
          first="최신 순"
          second="좋아요 순"
          third="댓글 순"
          size="medium"
          clickMore={clickMore}
          setClickMore={setClickMore}
          popSave={popSave}
          setPopSave={setPopSave}
          type="selectPopUp"
        />
      ) : (
        <></>
      )}
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
      <ClassificationWrapper align="flex-end" justify="flex-end">
        <Classification align="flex-end" onClick={onMoreClick}>
          <Typography regular12 color="middlegray">
            분류
          </Typography>
          <Margin width="4px" />
          <IoChevronDownSharp size={14} color={theme.colors.middlegray} />
        </Classification>
      </ClassificationWrapper>

      <PopWrapper direction="column">
        <Pop src={B1} small clickMore={clickMore} setClickMore={setClickMore}>
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
