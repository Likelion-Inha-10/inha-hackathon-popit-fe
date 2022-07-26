import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Typography from "../../popit-ui/Typography";
import Flex from "../../popit-ui/Flex";
import Margin from "../../popit-ui/Margin";
import Layout from "../../popit-ui/Layout";
import UserProfile from "./components/UserProfile";
import Button from "../../popit-ui/Button";
import { Alert } from "./../../popit-ui/Alert/index";

const MenuWrapper = styled(Flex)`
  width: 100%;
  height: 60px;
  border-bottom: 1px #eaeaea solid;
  cursor: pointer;
`;

const Dimmer = styled.div`
  position: fixed;
  width: 390px;
  height: 844px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const fadeIn = keyframes`
   from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Popup = styled(Flex)`
  width: 300px;
  height: 150px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.2);
  animation-name: ${fadeIn};
  animation-duration: 300ms;
  animation-iteration-count: 1;
`;

const Hamburger = () => {
  const [isPopup, setIsPopup] = useState(false);
  const navigate = useNavigate();

  const onChestClick = () => {
    navigate("/:userId/pop-chest");
  };

  const onChatClick = () => {
    navigate("/:userId/chat-list");
  };

  const onRequestClick = () => {
    navigate("/:userId/request-list");
  };

  const onAlarmClick = () => {
    navigate("/:userId/set-alarm");
  };

  const onLogOutClick = () => {
    setIsPopup(true);
  };

  const onCancelClick = () => {
    setIsPopup(false);
  };
  const onOkClick = () => {
    Alert("로그아웃 되었습니다");
    setTimeout(() => {
      navigate(`/login`);
    }, 350);
  };
  return (
    <>
      <Layout white>
        <UserProfile />
        <MenuWrapper align="center" onClick={onChestClick}>
          <Margin width="30px" height="100%" />
          <Typography bold16>팝 보관함</Typography>
        </MenuWrapper>
        <MenuWrapper align="center" onClick={onChatClick}>
          <Margin width="30px" height="100%" />
          <Typography bold16>나의 댓글 목록</Typography>
        </MenuWrapper>
        <MenuWrapper align="center" onClick={onRequestClick}>
          <Margin width="30px" height="100%" />
          <Typography bold16>수정 건의 목록</Typography>
        </MenuWrapper>
        <MenuWrapper align="center" onClick={onAlarmClick}>
          <Margin width="30px" height="100%" />
          <Typography bold16>알림 설정</Typography>
        </MenuWrapper>
        <MenuWrapper align="center" onClick={onLogOutClick}>
          <Margin width="30px" height="100%" />
          <Typography bold16 color="warningred">
            로그아웃
          </Typography>
        </MenuWrapper>
        {isPopup ? (
          <Dimmer>
            <Popup direction="column" align="center">
              <Margin height="50px" width="100%" />
              <Typography bold16>로그아웃 하시겠습니까?</Typography>
              <Margin height="30px" width="100%" />
              <Flex direction="row" align="center">
                <Button small gray onClick={onCancelClick}>
                  취소
                </Button>
                <Margin width="20px" height="100%" />
                <Button small onClick={onOkClick}>
                  확인
                </Button>
              </Flex>
            </Popup>
          </Dimmer>
        ) : (
          ""
        )}
      </Layout>
    </>
  );
};

export default Hamburger;
