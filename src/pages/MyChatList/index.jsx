import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "../../popit-ui/Typography";
import Flex from "../../popit-ui/Flex";
import Margin from "../../popit-ui/Margin";
import Button from "../../popit-ui/Button";
import styled, { keyframes } from "styled-components";
import Layout from "../../popit-ui/Layout";
import MainHeader from "../../popit-ui/MainHeader";
import ChatList from "./../../popit-ui/ChatList";
import { Alert } from "./../../popit-ui/Alert";

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
const slideIn = keyframes`
   0%{
    transform: translateX(390px);
  }
  100%{
    transform: translateX(0px);
  }
`;

const AnimationBox = styled.div`
  position: relative;
  animation-name: ${slideIn};
  animation-duration: 0.6s;
  animation-iteration-count: 1;
`;

// api 연동시 map으로 구현해야됨
const MyChatList = () => {
  const [isPopup, setIsPopup] = useState(false);
  const onDelete = () => {
    setIsPopup(true);
  };
  const onCancelClick = () => {
    setIsPopup(false);
  };
  const onOkClick = () => {
    Alert("삭제되었습니다");
    setIsPopup(false);
    //setTimeout(axios delete);
  };
  return (
    <Layout white>
      <AnimationBox>
        <MainHeader page="others" title="나의 댓글 목록" />
        <Margin height="10px" width="100%" />
        <ChatList
          name="홍길동"
          chat="Narcissistic, my god, I love it"
          button
          onDelete={onDelete}
        />
        <ChatList
          name="홍길동"
          chat="서로를 비춘 밤"
          button
          onDelete={onDelete}
        />
        <ChatList
          name="홍길동"
          chat="아름다운 까만 눈빛 더 빠져 깊이"
          button
          onDelete={onDelete}
        />
        <ChatList
          name="홍길동"
          chat="넌 내게로, 난 네게로"
          button
          onDelete={onDelete}
        />
        <ChatList name="홍길동" chat="숨 참고 Love Dive" />
      </AnimationBox>
      {isPopup ? (
        <Dimmer>
          <Popup direction="column" align="center">
            <Margin height="50px" width="100%" />
            <Typography bold16>작성하신 댓글을 삭제하시겠습니까?</Typography>
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
  );
};

export default MyChatList;
