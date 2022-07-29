import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Margin from "../../../popit-ui/Margin";
import ProfileIcon from "../../../popit-ui/ProfileIcon/index";
import styled from "styled-components";
import Flex from "../../../popit-ui/Flex";
import Typography from "../../../popit-ui/Typography";
import Pop from "../../../popit-ui/Pop";
import { MdOutlineModeEdit } from "react-icons/md";
import Modal from "../../../popit-ui/Modal";
import theme from "../../../assets/theme";
import { IoChevronForwardSharp } from "react-icons/io5";

const PopContainer = styled(Flex)`
  margin-top: 10px;
`;

const MoreContainer = styled(Flex)`
  margin-left: 300px;
  margin-top: 30px;
  cursor: pointer;
`;

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

const ProfileDetail = (props) => {
  const [clickMore, setClickMore] = useState(false);
  const [popSave, setPopSave] = useState(false);
  const [classify, setClassify] = useState(false);
  const navigate = useNavigate();

  const onMoreClick = () => {
    setClassify(true);
  };

  const onClickFollower = () => {
    navigate("/follower-list");
  };
  const onClickFollowing = () => {
    navigate("/following-list");
  };
  return (
    <>
      {classify ? (
        <Modal
          first="시간 순"
          firstMessage="시간 순으로 정렬되었습니다."
          second="좋아요 순"
          secondMessage="좋아요 순으로 정렬되었습니다."
          third="댓글 순"
          thirdMessage="댓글 순으로 정렬되었습니다."
          size="large"
          title="분류"
          classify={classify}
          setClassify={setClassify}
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
      <MoreContainer onClick={onMoreClick} direction="row">
        <Typography
          onClick={() => setClassify(!classify)}
          regular12
          color="middlegray"
        >
          분류
        </Typography>
        <Margin width="0px" />
        <IoChevronForwardSharp size={12} color={theme.colors.middlegray} />
      </MoreContainer>
      <PopContainer direction="column" align="center">
        {/* 나중에 axios로 카테고리에 속하는 pop get 해와서 map으로 연결.. */}
        <Pop
          clickMore={clickMore}
          setClickMore={setClickMore}
          small
          src="https://i.pinimg.com/564x/93/4a/c4/934ac4da0339aa7531d080e713ea211c.jpg"
        >
          수소의 원소기호는 1번입니다.
        </Pop>
        <Margin height="20px" width="100%" />
        <Pop
          clickMore={clickMore}
          setClickMore={setClickMore}
          small
          src="https://i.pinimg.com/564x/ea/98/d9/ea98d92347f8fe73673024915bc10107.jpg"
        >
          운전자에게 엔진 과열 상태를 알려주는 경고등은 수온경고등이다.
        </Pop>
      </PopContainer>
    </>
  );
};

export default ProfileDetail;
